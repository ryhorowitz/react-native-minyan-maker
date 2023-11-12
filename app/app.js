import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from './AppContext'
import Login from './login';
import Home from './home';
import Signup from './signup'
const Stack = createNativeStackNavigator()

function App() {
  const { user, setUser } = useContext(AppContext)
  // console.log('user', !user)
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default App