import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './AppProvider';
import App from './app';
// import SplashScreen from 'react-native-splash-screen';

export default function Index() {

  return (
    <AppProvider>
      <NavigationContainer independent={true}>
        <App />
      </NavigationContainer>
    </AppProvider>
  );
}