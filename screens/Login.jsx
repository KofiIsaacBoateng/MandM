import { View,KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useContext, useState } from "react";
import {userContext} from '../context/userContext'


export default function Login({navigation, route}) {
     const [data, setData] = useState({
          email: '',
          password: ''
     })

     const {updateUser} = useContext(userContext)


     return( 
          <KeyboardAvoidingView  
               style={styles.container}
          >
          
          <Image 
               source={require('../assets/logo.jpeg')}
               style={styles.logo}
          />

          <View style={styles.inputView}>
               <View style={styles.inputElementContainer}>
                    <MaterialCommunityIcons 
                         name="email-fast" 
                         size={30} 
                         color='hsl(12, 98%, 59%)'
                    />
                    <TextInput 
                         type='email'
                         value={data.email}
                         placeholder="Email"
                         placeholderTextColor='#555'
                         style={styles.inputElement}
                         onChangeText = {(text) => setData(prev => ({
                              ...prev,
                              email: text
                         }))}
                    />

               </View>
               
               <View style={styles.inputElementContainer}>
                    <FontAwesome5 
                         name="user-lock" 
                         size={25} 
                         color='hsl(12, 98%, 59%)'
                    />
                    <TextInput 
                         type='password'
                         value={data.password}
                         placeholder="Password"
                         placeholderTextColor='#555'
                         style={styles.inputElement}
                         onChangeText = {(text) => setData(prev => ({
                              ...prev,
                              password: text
                         }))}
                         secureTextEntry
                    />
               </View>
          </View>
          <View style={styles.buttonView}>
               <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button} 
                    onPress={() => updateUser({
                         ...data,
                         role: 'admin'
                    })}
               >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>LOGIN</Text>
               </TouchableOpacity>

               <TouchableOpacity 
                    activeOpacity={0.5}
                    style={[styles.button, {backgroundColor: 'hsl(12, 98%, 59%)'}]}
                    onPress = {() => navigation.navigate('Register')}
               >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>SIGN UP</Text>
               </TouchableOpacity>
          </View>
     </KeyboardAvoidingView>
)}


const styles = StyleSheet.create({

     container: {
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: -100
     },

     buttonView: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: 30
     },

     button: {
          width: 100,
          height: 50,
          backgroundColor: 'hsl(200, 88%, 59%)',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center'
     },

     inputView: {
          width: '100%',
          paddingHorizontal: 50,
          marginTop: 30
     },


     inputElementContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: -20,
          borderBottomWidth: 3,
          borderBottomColor: 'hsl(200, 88%, 59%)',
          paddingBottom: 10,
          marginVertical: 30,
     },

     inputElement: {
          fontSize: 18,
          color: '#555',
          width: '90%',
          paddingLeft: 35
     },

     logo: {
          height: 150,
          resizeMode: 'contain'
     }
})