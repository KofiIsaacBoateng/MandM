import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserContextProvider } from './context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import Index from './navigation';

export default function App() {
  return (
    <UserContextProvider>
      <StatusBar backgroundColor='#0f0f0f'  />
      <NavigationContainer>
          <Index />
      </NavigationContainer>
      
    </UserContextProvider>
  );
}


