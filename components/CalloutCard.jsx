import React from 'react'
import { Image } from 'react-native'
import tw from 'twrnc';

import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CalloutCard = () => {
  return (
    <View style={styles.container}>
          {/** profile head **/}
          <View style={styles.calloutHeader}>
               <Image
                    source={require('../assets/logo.jpeg')}
                    style={{width: 50, height: 50}}
                    resizeMode='contain'
               />
               <Text
                    style={{color: '#fff', fontWeight: '900', fontSize: 16}}
               >Awurade mawu!</Text>
          </View>
          
          {/** deliveries cont  **/}
          <View style={styles.deliveryCount}>
          <MaterialCommunityIcons name='truck-delivery' style={styles.truck} size={40} />
               <MaterialCommunityIcons name='truck-delivery' style={styles.truck} size={40} />
               <MaterialCommunityIcons name='truck-delivery' style={styles.truck} size={40} />
               <MaterialCommunityIcons name='truck-delivery' style={[styles.truck, {color: 'red'}]} size={40} />
              
          </View>
          <Text>3/5</Text>
          <Text>See More...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
     container: {
          width: 200,
          height: 200,
          backgroundColor: 'hsl(12, 89%, 59%)',
          overflow: 'hidden',
          padding: 10
     },

     calloutHeader: {
          flexDirection: 'row', 
          gap: 3,
          alignItems: 'center',
          width: '100%'
     },

     deliveryCount: {
          flexWrap:'wrap',
          flexDirection:'row',
          justifyContent:'space-around',
          paddingTop:10

     },

     truck: {
          color: 'green',
     }
})

export default CalloutCard
