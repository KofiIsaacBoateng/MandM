import * as React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import ActiveDeliveries from '../screens/ActiveDeliveries'
import PaymentScreen from '../screens/PaymentScreen'



const RiderStack = createNativeStackNavigator()


const RiderNavigation = () => {
     return (
          <RiderStack.Navigator
               screenOptions={() => ({
                    header: () => null
               })}
          >
               <RiderStack.Screen name='Active Deliveries' component={ActiveDeliveries} />
               <RiderStack.Screen name='Payment Screen' component={PaymentScreen} />
          </RiderStack.Navigator>
     )
}


export default RiderNavigation