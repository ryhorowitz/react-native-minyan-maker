import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidi, PressablengView } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import AppContext from './AppContext';

export default function Home() {
  const { user, setUser, signout } = useContext(AppContext)
  const navigation = useNavigation()

  const handleSignOut = () => {
    signout()
  }

  // const upcomingServices = user.user_services.filter(s => Date.parse(s.datetime) < Date.now() ? false : s)

  return (<>
    <Appbar.Header style={styles.header}>
      {/* <Appbar.BackAction onPress={() => { }} /> */}
      <Appbar.Content title="Home" />
    </Appbar.Header>
    <View style={styles.container}>
      <Avatar.Text size={86} label={user.username.slice(0, 1).toUpperCase()} />
      <Text>{user.username}</Text>
      <View style={styles.minyans}>
        <Text>Next Minyan:</Text>

      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}
          title="Edit Profile" onPress={() => { }}>
          <Text style={styles.username}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.button}
          title="Sign Out" onPress={handleSignOut}>
          <Text>Signout</Text>
        </Pressable>
      </View>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: 'tomato'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 20,
    // alignItems: 'center',
  },
  profile: {

  },
  minyans: {
    flex: 4,
    marginTop: 10,
  },
  username: {
    alignSelf: 'center',
    textAlign: 'center',
    // paddingTop: 10,
    // justifyContent: 'flex-end',
  },
  buttonsContainer: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'space-around', // You can use 'space-between', 'center', etc.
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
})
