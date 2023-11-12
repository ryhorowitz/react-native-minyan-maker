import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import { auth } from '../firebase';

// SplashScreen.show();
export default function Login() {
  // const { setUser } = useContext(AppContext)
  // const [signupErrors, setSignupErrors] = useState([])
  const [signupFormData, setSignupFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const navigation = useNavigation()

  function handleSignupFormData(e) {
    const { name, value } = e.target
    setSignupFormData({ ...signupFormData, [name]: value })
  }



  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signupFormData)
  }

  const handleSignup = () => {
    fetch(`http://localhost:3000/signup`, postOptions)
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
          <Text style={styles.title}>Signup Page</Text>
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
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

