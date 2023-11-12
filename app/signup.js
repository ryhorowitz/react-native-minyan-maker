import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import { auth } from '../firebase';

// SplashScreen.show();
export default function Signup() {
  // const { setUser } = useContext(AppContext)
  // const [signupErrors, setSignupErrors] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfrimPassword] = useState('')

  const navigation = useNavigation()

  // const signupOptions = 

  const handleSignup = () => {
    const signupBody = {
      username: username.slice(),
      email: email.slice(),
      password: password.slice(),
      confirmPassword: confirmPassword.slice()
    }
    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupBody)
    })
      .then(r => r.json())
      .then(res => {
        console.log('res is', res)
        navigation.replace("Home")
      })
      // r.json().then(newUser => {
      //   console.log('user created successfully', newUser)
      //   setUser(newUser)
      //   navigate('/home')
      .catch(e => console.error('ERROR is ', e))
  }
  const handleLogin = () => {
    navigation.replace('Login')
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <View >
          <Text style={styles.title}>Signup</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) => setConfrimPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={handleSignup} />
        </View>
      </KeyboardAvoidingView>
    </>
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

