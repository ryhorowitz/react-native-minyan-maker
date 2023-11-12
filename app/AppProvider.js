import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shuls, setShuls] = useState([])

  // useEffect(() => {
  //   fetch(`/shuls`)
  //     .then(r => r.json())
  //     .then(shuls => setShuls(shuls))
  // }, [user])

  function signout() {
    fetch('http://localhost:3000/signout', { method: 'DELETE' })
      .then(r => {
        if (r.ok) {
          r.json()
            .then(() => {
              console.log('message', r.message)
              setUser(null)
            })
            .then(() => setShuls([]))
        }
        else {
          r.json().then(e => {
            console.log('error response', e)
            // setSignupErrors(Object.values(e))
          })
        }
      })
      .catch(e => console.error('ERROR is ', e))
  }

  return (
    <AppContext.Provider value={{
      user, setUser,
      shuls, setShuls,
      signout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
