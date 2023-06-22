import React, {useState} from 'react' 
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Touchable } from 'react-native'
import { View, Text, Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'



const PaymentScreen = ({navigation, route})  => {
     const [data, setData] = useState({
          cName: '',
          cLocation: '',
          itemType: '',
          price: 0,
          deliveryFee: 0,
          deliveryDescription: ''
     })



     return (
          <ScrollView>
               
               <View style={styles.container} > 
                    <TouchableOpacity 
                         style={styles.backIcon}
                         onPress={() => navigation.goBack()}
                    >
                         <Feather 
                              size={40} 
                              name='arrow-left' 
                              color='orange' 
                              
                         />
                    </TouchableOpacity>
                    
                    {/** RIDER RIDER */}
                    <View style={styles.header}>
                         <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
                         <Text style={styles.rider}>Rider</Text>
                    </View>


                    {/**  INPUTS */}
                    
                    <View style={styles.textView}>
                         <Text style={styles.label}>Client Name</Text>
                         <TextInput 
                              type='text'
                              value={data.cName}
                              placeholder='Godfred Awurade Mawu'
                              onChangeText={(text) => setData(prev => ({
                                   ...prev,
                                   cName: text
                              }))}
                              style={styles.input}
                         />
                    </View>

                    <View style={styles.textView}>
                         <Text style={styles.label}>Client Location</Text>
                         <TextInput 
                              type='text'
                              value={data.cLocation}
                              placeholder='Colinas del Campo de Martín Moro Toledano de Castilla y León'
                              onChangeText={(text) => setData(prev => ({
                                   ...prev,
                                   cLocation: text
                              }))}
                              style={[styles.input, {height: 80}]}
                         />
                    </View>

                    <View style={styles.textView}>
                         <Text style={styles.label}>Item Type</Text>
                         <TextInput 
                              type='text'
                              value={data.itemType}
                              placeholder='Groceries'
                              placeholderTextColor='#555'
                              onChangeText={(text) => setData(prev => ({
                                   ...prev,
                                   itemType: text
                              }))}
                              style={styles.input}
                         />
                    </View>

                    <View style={styles.pricingView}>
                         <View style={styles.textView}>
                              <Text style={styles.label}>Parcel Price</Text>
                              <TextInput 
                                   type='text'
                                   value={data.itemType}
                                   placeholder='800.00'
                                   placeholderTextColor='#555'
                                   placeholderStyle={{color: 'green'}}
                                   onChangeText={(text) => setData(prev => ({
                                        ...prev,
                                        itemType: text
                                   }))}
                                   style={[styles.input, {width: 150, flexGrow: 1}]}
                              />
                         </View>

                         <View style={styles.textView}>
                              <Text style={styles.label}>Delivery Fee</Text>
                              <TextInput 
                                   type='text'
                                   value={data.itemType}
                                   placeholder='200.00'
                                   placeholderTextColor='#555'
                                   onChangeText={(text) => setData(prev => ({
                                        ...prev,
                                        itemType: text
                                   }))}
                                   style={[styles.input, {width: 150, flexGrow: 1}]}
                              />
                         </View>
                    </View>


                    <View style={styles.textView}>
                         <Text style={styles.label}>Delivery Description</Text>
                         <TextInput 
                              type='text'
                              value={data.itemType}
                              placeholder='What happened at the point of delivery!'
                              placeholderTextColor='#555'
                              onChangeText={(text) => setData(prev => ({
                                   ...prev,
                                   itemType: text
                              }))}
                              style={[styles.input, {height: 130}]}
                         />
                    </View>
                    <TouchableOpacity
                         style={styles.submit}
                    >
                         <Text
                              style={styles.submitText}
                         >Submit</Text>
                    </TouchableOpacity>
               </View>
          </ScrollView>

     )
}


const styles  = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 80,
          gap: 30,
          paddingHorizontal: 20,
          paddingBottom: 100
          
     },

     backIcon: {
          position: 'absolute',
          marginTop: 30,
          marginLeft: 5
     },

     header: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 15
     },

     logo: {
          width: 120,
          height: 120,
          resizeMode: 'contain'
     },

     rider: {
          fontSize: 50,
          fontWeight: '900',
          color: '#555',
          fontFamily: 'sans-serif',

     },

     textView: {
          gap: 5,
          borderWidth: 0

     },
     label: {
          fontSize: 16,
          fontFamily: 'sans-serif',
          fontWeight: '800',
     },

     input: {
          backgroundColor: '#fff5f5',
          border: 'none',
          borderWidth: 1,
          borderColor: 'orange',
          padding: 5,
          borderTopLeftRadius: 15,          
          borderTopRightRadius: 15,          
          borderBottomLeftRadius: 15,          
          borderBottomRightRadius: 15,          
     },
     pricingView: {
          flexDirection: 'row',
          justifyContent: 'space-between',

     },

     submit: {
          backgroundColor: 'orange',
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 10
     },

     submitText: {
          textAlign: 'center',
          color: '#fff',
          fontWeight: '900',
          fontSize: 25,
          letterSpacing: 1,
     }


})


export default PaymentScreen