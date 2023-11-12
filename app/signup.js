import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppContext from './AppContext';

// SplashScreen.show();
export default function Signup() {
  const { setUser } = useContext(AppContext)
  const [signupErrors, setSignupErrors] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')

  const navigation = useNavigation()

  const handleSignup = () => {
    const signupBody = {
      username,
      email,
      password,
      password_confirmation
    }

    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupBody)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(newUser => {
            console.log('new user is', newUser)
            setUser(newUser)
          })
        }
        else {
          r.json().then(e => {
            console.log('error response', e)
            setSignupErrors(Object.values(e))
          })
        }
      })
      .catch(e => console.error('ERROR is ', e))
  }
  const navigateToLogin = () => {
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
            onChangeText={(text) => setPassword_confirmation(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable title="Sign Up" onPress={handleSignup}>
            <Text>Signup</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable title="Login" onPress={navigateToLogin}>
            <Text>Login Page</Text></Pressable>
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

