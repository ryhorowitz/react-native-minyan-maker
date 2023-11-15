import React, { useState, useEffect } from 'react'
import AppContext from './AppContext'
import Constants from 'expo-constants'

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shuls, setShuls] = useState([])
  const [baseAPI] = useState(Constants.expoConfig.api)
  // console.log('expo constants', Constants.expoConfig.api)
  // const baseAPI = Constants.expoConfig.api
  useEffect(() => {
    fetch(`${baseAPI}/shuls`)
      .then(r => r.json())
      .then(shuls => setShuls(shuls))
  }, [user])

  function signout() {
    fetch(`${baseAPI}/signout`, { method: 'DELETE' })
      .then(r => {
        if (r.ok) {
          console.log('in the sighnout r.ok block')
          console.log('message', r.message)
          setUser(null)
          setShuls([])
        }
        else {
          console.error('ERROR is ', r)
        }
      })
      .catch(e => console.error('ERROR is ', e))
  }

  return (
    <AppContext.Provider value={{
      user, setUser,
      shuls, setShuls,
      signout, baseAPI
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
