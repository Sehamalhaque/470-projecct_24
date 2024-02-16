// App.js
import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Perform authentication logic here (e.g., send credentials to server)
    // For simplicity, let's assume authentication is successful if the fields are not empty
    if (username && password) {
      // Perform verification (e.g., 2FA) here if needed
      setIsLoggedIn(true);
    } else {
      alert('Please enter valid username and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;


