import * as React from 'react' 
import { ImageBackground } from 'react-native'
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity  } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import deliveryData from '../constants/deliveryData'
import DeliveryComponent from '../components/DeliveryComponent'



const ActiveDeliveries = ({navigation})  => {
     return (
          <View style={styles.container}>
               {/*Header*/}
               <View style={styles.header}>
                    {/* <View style={styles.beauty}>
                         <MaterialIcons name='menu-open' size={25} />
                    </View> */}
                    <View style={styles.titleView}>
                         <Text
                              style={styles.headerTitle}
                         >Welcome Back!</Text>
                         <Text style={styles.name}>Joe Mike</Text>
                    </View>
                    <Image
                         source={require('../assets/rider5.png')}
                         style={styles.headerImg}
                    />
               </View>
               {/*Deliveries*/}

               <View style={styles.deliveryContainer}>
                    {/* <Text
                         style={styles.deliveryTitle}
                    >Your deliveries today!</Text> */}
                    {/* <FlatList 
                         data={deliveryData}
                         render={({item}) => <DeliveryComponent {...item.data} />}

                         keyExtractor={item => item.id}
                    /> */}
                    <TouchableOpacity
                         onPress={() => navigation.navigate('Payment Screen', {
                              data: deliveryData[0]
                         })}
                    >
                         <DeliveryComponent data={deliveryData[0]} />
                    </TouchableOpacity>
                    
                    <DeliveryComponent data={deliveryData[0]} />
                    <DeliveryComponent data={deliveryData[0]} />
                    <DeliveryComponent data={deliveryData[0]} />
               </View>
               

          </View>
     )
}



const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'hsl(24.974619289340097, 89.9543378995434%, 57.05882352941176%)',
          paddingTop: 40,
          alignItems: 'center',
     },

     header: {
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          gap:10,
     },

     titleView: {
          marginLeft: 30,
          gap: 5
     },

     headerTitle: {
          fontWeight: '900',
          fontSize: 18 ,
          color: '#fff',

     },
     
     headerImg: {
          resizeMode: 'cover',
          width: 45,
          height: 45,
          marginLeft: 'auto',
          marginRight: 20
     },

     name: {
          color: '#f0f0f0',
          letterSpacing: 2,
          fontWeight: '700',
          fontSize: 16
     },

     beauty: {
          backgroundColor: '#fff',
          width: 35,
          height: 35,
          borderBottomEndRadius: 50,
          borderBottomLeftRadius: 50,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
     },

     deliveryContainer: {
          backgroundColor: '#fff',
          flex: 1,
          width: '100%',
          marginTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          paddingTop: 30,
          gap: 20
     },

     // deliveryTitle: {
     //      fontWeight: 'bold', 
     //      color: '#555',
     //      fontSize: 18,
     //      marginLeft: 15,
     //      marginTop: 20
     // },
})


export default ActiveDeliveries