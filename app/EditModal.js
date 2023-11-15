import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import {
  View,
  Pressable,
  StyleSheet,
  KeyboardAvoidi,
  PressablengView
} from 'react-native'
import {
  Appbar,
  Avatar,
  Button,
  Modal,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper'
import AppContext from './AppContext'

function EditModal({ visible, setVisible }) {
  const { user, setUser, baseAPI } = useContext(AppContext)
  const [email, setEmail] = useState(user.email)
  const [username, setUsername] = useState(user.username)
  const hideModal = () => setVisible(false)

  function handleUpdateProfile() {
    const updateBody = { email, username }
    const updateOptions = {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBody)
    }
    fetch(`${baseAPI}/users/${user.id}`, updateOptions)
      .then(r => {
        if (r.ok) {
          r.json()
            .then(updatedProfile => {
              console.log('updated profile', updatedProfile)
              const { email, username } = updatedProfile
              setUser({
                ...user,
                username,
                email
              })
              hideModal()
            })
        } else {
          r.json()
            .then(e => {
              console.log(Object.values(e).flat())
              // setProfileUpdateErrors(Object.values(e).flat())
            })
            .then(() => {
              // reset inputs to 
              setEmail(user.email)
              setUserName(user.username)
            })
        }
      })
  }


  return (

    <Portal>
      <Modal
        // style={styles.modalContainer}
        visible={visible}
        onDismiss={hideModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalView}>

          <Text variant='headlineMedium'>Edit Modal</Text>
          <TextInput
            style={styles.modalTextInput}
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          ></TextInput>
          <TextInput
            style={styles.modalTextInput}
            label="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          ></TextInput>
          <View style={styles.buttonContainer}>

            <Button style={styles.button}
              title="Edit Profile"
              mode="contained"
              onPress={handleUpdateProfile}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </Button>
            <Button style={styles.button}
              title="Cancel"
              mode="contained"
              onPress={() => { }}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    height: '90%',
    // width: '80%',
    borderRadius: 10,
  },
  modalTextInput: {
    marginTop: 10,
    padding: 5
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    color: 'white'
  }
})
export default EditModal