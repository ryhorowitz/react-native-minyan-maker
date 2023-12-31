import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from "expo-secure-store"
import AppContext from './AppContext'
import Login from './login'
import Signup from './signup'
import TabNav from './bottombar'
const Stack = createNativeStackNavigator()


function App() {
  const { user, setUser, baseAPI } = useContext(AppContext)
  // console.log('user', !user)

  const saveSecureValue = async () => {
    await SecureStore.setItemAsync(key, value)
  }
  useEffect(() => {
    fetch(`${baseAPI}/auth`)
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        }
      })
      .catch(e => console.log('/auth fetch error is', e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )
  }

  return (
    // Logged in main component with 
    <TabNav />
  )
}

export default App