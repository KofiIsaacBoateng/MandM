import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const DeliveryItem = (props) => {
  return (
    <View style={styles.container}>
          {/** Product **/}
          <Image 
               source={require('../assets/logo.jpeg')}
               width={50}
               style={styles.productImage}
          />
          <View style={styles.details}>
               <View style={styles.title}>
                    <Text style={styles.name}>Product name</Text>
                    <Text style={styles.price}>$ 36.00</Text>
               </View>


               <View style={styles.title}>
                    <MaterialCommunityIcons
                         size={25}
                         name='map-marker-radius' 
                         color={'goldenrod'}
                    />
                    <Text>Kwadaso Estate, Kumasi...</Text>
               </View>
          </View>
          
    </View>
  )
}


const styles = StyleSheet.create({
     container: {
          width: '100%',
          marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 20,
          backgroundColor: '#ccc',
          borderRadius: 5
     },

     title: {
          color: '#ccc',
          flexDirection: 'row', 
          marginHorizontal: 15,
          gap: 10,
          alignItems: 'center',
     },

     name: {
          fontSize: 20,
          fontWeight: '900'
     },

     price: {
          marginLeft: 50,
          fontWeight: '800',
          fontSize: 18
     },

     details: {
          gap: 10,
          marginRight: 'auto'
     },

     productImage: {
          width: 80,
          height: 60,
          resizeMode: 'contain'
     }
})

export default DeliveryItem
