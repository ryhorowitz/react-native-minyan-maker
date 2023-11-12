import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidi, PressablengView } from 'react-native';
import AppContext from './AppContext';

export default function Home() {
  const { user, signout } = useContext(AppContext)
  const navigation = useNavigation()

  const handleSignOut = () => {
    signout()
  }
  return (
    <View style={styles.container}>
      <Text> Profile: {user.username}</Text>
      <Pressable style={styles.button}
        title="Sign Out" onPress={handleSignOut}>
        <Text>Signout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
