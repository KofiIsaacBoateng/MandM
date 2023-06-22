import { View,KeyboardAvoidingView, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useContext, useState } from "react";
import { userContext } from "../context/userContext";




const Register = ({navigation})  => {
     const {updateUser} = useContext(userContext)
 
     const [data, setData] = useState({
          name: '',
          email: '',
          password: '',
          photo: '',
          role: ''
     })

     return (
          <KeyboardAvoidingView  
               behavior='height' 
               style={styles.container}
          >

          <Image 
               source={require('../assets/logo.jpeg')}
               style={styles.logo}
          />

          <View style={styles.inputView}>
               <View style={styles.inputElementContainer}>
                    <FontAwesome5
                         name="user-alt" 
                         size={25} 
                         color='hsl(12, 98%, 59%)'
                    />

                    <TextInput
                         type='text'
                         value={data.name}
                         placeholder="Name"
                         placeholderTextColor='#555'
                         style={styles.inputElement}
                         onChangeText = {(text) => setData(prev => ({
                              ...prev,
                              name: text
                         }))}
                    />
               </View>
               
               

               
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

               

               <View style={styles.inputElementContainer}>
                    <MaterialIcons 
                         name="add-a-photo" 
                         size={25} 
                         color='hsl(12, 98%, 59%)'
                    />

                    <TextInput 
                         type='email'
                         value={data.photo}
                         placeholder="Photo"
                         placeholderTextColor='#555'
                         style={styles.inputElement}
                         onChangeText = {(text) => setData(prev => ({
                              ...prev,
                              photo: text
                         }))}
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
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>SIGN UP</Text>
               </TouchableOpacity>

               <TouchableOpacity
                    activeOpacity={0.5}
                    style={[styles.button, {backgroundColor: 'hsl(12, 98%, 59%)'}]} 
                    onPress={() => navigation.goBack()}
               >
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: '700'}}>LOGIN</Text>
               </TouchableOpacity>
          </View>
     

          <View style = {{height: 50}}></View>

     </KeyboardAvoidingView>
     )
}


const styles = StyleSheet.create({

     container: {
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: '#fff'
     },


     button: {
          width: 100,
          height: 50,
          backgroundColor: 'hsl(200, 88%, 59%)',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10
     },

     buttonView: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: 20
     },

     inputView: {
          width: '100%',
          paddingHorizontal: 50,
          marginTop: 20
     },

     inputElementContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: -20,
          borderBottomWidth: 3,
          borderBottomColor: 'hsl(200, 88%, 59%)',
          paddingBottom: 10,
          marginVertical: 20,
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




export default Register