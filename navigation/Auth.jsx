import * as React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Register from '../screens/Register'
import Login  from '../screens/Login'



const AuthStack = createNativeStackNavigator()


const AuthNavigation = () => {
     return (
          <AuthStack.Navigator 
               initialRouteName='Login'
               screenOptions={({}) => ({
                    header:() => null
               })}
          >
               <AuthStack.Screen name='Register' component={Register} />
               <AuthStack.Screen name='Login' component={Login} />
          </AuthStack.Navigator>
     )
}


export default AuthNavigation