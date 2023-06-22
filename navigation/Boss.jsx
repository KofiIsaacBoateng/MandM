import * as React from 'react' 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home  from '../screens/Home';
import Library from '../screens/Library'
import Live from '../screens/LiveEves';
import Contacts from '../screens/Contacts';

import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createMaterialBottomTabNavigator();

function BossTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options= {({route}) => ({
            tabBarIcon: () => <Octicons name='home' size={30} />,
        })}
      />
      <Tab.Screen 
        name="Live" 
        component={Live} 
        options= {({route}) => ({
          tabBarIcon: () => <MaterialIcons name='online-prediction' size={30} />
      })}
      />
      <Tab.Screen 
        name="Cust. Service" 
        component={Contacts} 
        options= {({route}) => ({
          tabBarIcon: () => <AntDesign name='customerservice' size={30} />
      })}
      />
      <Tab.Screen 
        name="Library" 
        component={Library} 
        options= {({route}) => ({
          tabBarIcon: () => <MaterialCommunityIcons name='library' size={30} />
      })}
      />
    </Tab.Navigator>
  );
}



export default BossTabs