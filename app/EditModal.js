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
  const { user, setUser, signout } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const hideModal = () => setVisible(false)
  return (

    <Portal>
      <Modal visible={visible}
        onDismiss={hideModal}
        style={styles.modalContainer}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalView}>

          <Text variant='headlineMedium'>Edit Modal. more wordssdfssdfs</Text>
          <TextInput
            style={styles.modalTextInput}
            label="Email"
            value={user.email}
            onChangeText={text => setEmail(text)}
          ></TextInput>
          <TextInput
            style={styles.modalTextInput}
            label="Username"
            value={user.username}
            onChangeText={text => setUsername(text)}
          ></TextInput>
          <View style={styles.buttonContainer}>

            <Button style={styles.button}
              title="Edit Profile"
              mode="contained"
              onPress={() => { }}>
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
    padding: 15,
    // width: '90%',
    height: '90%',
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