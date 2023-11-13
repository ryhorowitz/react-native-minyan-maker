import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Platform, AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './AppProvider';
import App from './app';
import { Fragment } from 'react';
// import SplashScreen from 'react-native-splash-screen';

export default function Index() {

  return (
    <AppProvider>
      <PaperProvider>
        <NavigationContainer independent={true}>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </AppProvider>
  );
}

AppRegistry.registerComponent('Minyan', () => Index);