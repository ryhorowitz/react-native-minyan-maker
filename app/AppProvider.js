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
      signout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
