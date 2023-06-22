import React, {useEffect, useRef, useState} from 'react' 
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT, Callout} from 'react-native-maps'
import customMapStyles from '../constants/customMapStyles'
import latlang from '../constants/latlang'
import CalloutCard from '../components/CalloutCard'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Home = (props)  => {
     const mapViewRef = useRef()
     const [showLiveBoard, setShowLiveBoard] = useState(true)

     const fitItemsIntoView = () => {
          if (mapViewRef.current) {
            const coordinates = latlang
      
            mapViewRef.current.fitToCoordinates(coordinates, {
              edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
              animated: true,
            });
          }
     };

     useEffect(() => {
          fitItemsIntoView()
     }, [])

     return (
          <View style={styles.container}>
               <TouchableOpacity
                    onPress={() => setShowLiveBoard(true)}
                    style={{position: 'absolute', right: 25, top: 45, zIndex: 100 }}
               >
                    <Ionicons
                         size={40}
                         name='menu-outline'
                         color='orangered'
                    />
               </TouchableOpacity>
               <MapView 
                    provider={PROVIDER_DEFAULT}
                    style={{flex: 1}}
                    ref={mapViewRef}
                    initialRegion={{
                         latitude: 6.695070,
                         longitude: -1.615800,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                    }}
                    customMapStyle={customMapStyles}
               >
                    
                    {latlang.map((marker, index) => (
                         <Marker
                              key={index}
                              coordinate={{
                                   longitude: marker.longitude,
                                   latitude: marker.latitude
                              }}

                              pinColor='hsl(12, 98%, 59%)'
                              // image={require('../assets/splash1.png')}
                              

                         >
                              <Image 
                                   source={require('../assets/splash1.png')}
                                   style={{width: 50, height: 50}}
                                   resizeMode='contain'
                              />
                              <Callout 
                                   style={styles.calloutView}
                                   tooltip= {true}
                              >
                                   <CalloutCard />
                              </Callout>
                         </Marker>
                    ))}
               </MapView>

               { showLiveBoard &&
                    <View style={styles.bottomSheet}>
                         <View style={styles.allo}></View>
                         {/***  Header  ***/}
                         <ScrollView>
                              <View  style={{
                                   width: '100%,', 
                                   flexDirection: 'row', 
                                   width: '100%', 
                                   alignItems: 'center', 
                                   gap: 15,
                                   marginLeft: 20
                              }}
                              >
                                   <Image 
                                        source={require('../assets/logo.jpeg')}
                                        resizeMode='contain'
                                        style={styles.headerImg}
                                   />
                                   <Text style={{fontSize: 25, fontWeight: '900', color: '#555'}}>Riders Live Watch</Text>

                                   <TouchableOpacity
                                        onPress={() => setShowLiveBoard(false)}
                                        style={{position: 'absolute', right: 45, top: 0 }}
                                   >
                                        <FontAwesome5Icon
                                             size={22}
                                             name='times'
                                             color='orangered'
                                        />
                                   </TouchableOpacity>
                              </View>

                              {/* <View>
                                   <Image 
                                        source={require('../assets/logo.jpeg')}
                                        width={50}
                                        height={50}
                                   />
                                   <Text>Riders</Text>
                              </View>

                              <View>
                                   <Image 
                                        source={require('../assets/logo.jpeg')}
                                        width={50}
                                        height={50}
                                   />
                                   <Text>Riders</Text>
                              </View> */}
                         </ScrollView>
                    </View>
               }
          </View>
          //KI.cbd@knust
     )
}


const styles = StyleSheet.create({
     container: {
          flex: 1,
     },

     calloutView: {
          width: 200,
          height: 200,
          backgroundColor: 'hsl(12, 88%, 59%)'
     },

     bottomSheet: {
          width: '100%',
          height: '55%',
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // display: 'none'
     },

     allo: {
          width: '50%',
          height: 5,
          backgroundColor: 'orange',
          marginHorizontal: 'auto',
          alignSelf: 'center',
          borderRadius: 30,
          backgroundColor: 'gray',
          marginTop: 5,
     },

     headerImg: {
               width: 70,
               height: 70
     },

     marker: {
          width: 50,
          height: 50,
          
     }
})


export default Home