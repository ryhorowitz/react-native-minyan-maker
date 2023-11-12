import React, { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shuls, setShuls] = useState([])

  useEffect(() => {
    fetch(`/shuls`)
      .then(r => r.json())
      .then(shuls => setShuls(shuls))
  }, [user])

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      .then(() => setUser(null))
      .then(() => setShuls([]))
  }

  return (
    <AppContext.Provider value={{
      user, setUser,
      shuls, setShuls,
      handleLogout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
