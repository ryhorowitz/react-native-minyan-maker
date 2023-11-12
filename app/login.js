import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import { auth } from '../firebase';

// SplashScreen.show();
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const handleSignup = () => {
    auth
      .createUserWithEmailandPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(user.email)
      })
      .catch(err => alert(err.message))
  }
  const handleLogin = () => {
    const body = { email, password }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    fetch(`http://localhost:3000/login`, options)
      .then(() => {
        console.log('hit then block of login fetch')
        navigation.replace("Home")
      })
      .catch(e => console.error('ERROR is ', e))
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
      <View >
        <Text style={styles.title}>Login Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
});

