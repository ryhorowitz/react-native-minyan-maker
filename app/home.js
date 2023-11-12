import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TextInput, Pressable, Button, StyleSheet, KeyboardAvoidi, PressablengView } from 'react-native';

export default function Home() {
  const navigation = useNavigation()
  const handleSignOut = () => {
    console.log('handleSignOut clicked')
    navigation.replace("Login")
  }
  return (
    <View style={styles.container}>
      <Text> Profile: </Text>
      <Pressable style={styles.button}
        title="Sign Out" onPress={handleSignOut}>
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
