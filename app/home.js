import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default function Home() {
  const navigation = useNavigation()
  const handleSignOut = () => {
    console.log('handleSignOut clicked')
    navigation.replace("Login")
  }
  return (
    <View style={styles.container}>
      <Text> Profile: </Text>
      <TouchableOpacity style={styles.button}>

        <Button title="Sign Out" onPress={handleSignOut} />
      </TouchableOpacity>
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
