import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Pressable } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppContext from './AppContext';
// import { auth } from '../firebase';

// SplashScreen.show();
export default function Login() {
  const { setUser } = useContext(AppContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState([])

  const navigation = useNavigation()

  function navigateToSignup() {
    navigation.replace("Signup")
  }

  const handleLogin = () => {
    const postBody = { username, password }
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postBody)
    }
    fetch(`http://localhost:3000/login`, postOptions)
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setUser(user)
          })
        } else {
          r.json().then(e => {
            console.log('error response', e.error)
            setLoginErrors(Object.values(e).flat())
          })
        }
      })
      .catch(e => console.error('ERROR is ', e))
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <View >
          <Text style={styles.title}>Login Page</Text>
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
        </View>
        <View style={styles.buttonContainer}>
          <Pressable title="Login" onPress={handleLogin}>
            <Text>Login</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable title="Sign Up" onPress={navigateToSignup}>
            <Text>Signup</Text>
          </Pressable>
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

