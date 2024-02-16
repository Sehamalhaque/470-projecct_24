// Login.jsx

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerificationRequired, setIsVerificationRequired] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (isVerificationRequired) {
      // Perform verification logic
      if (verificationCode === '123456') { // Mock verification code
        setIsLoggedIn(true);
        alert('Login successful!');
      } else {
        alert('Invalid verification code. Please try again.');
      }
    } else {
      // Perform initial login logic
      if (isSignUpMode) {
        // Handle sign up
        alert('Sign up logic here'); // Implement sign-up logic
      } else {
        // Perform initial login logic
        if (username && password) {
          setIsVerificationRequired(true); // Set to true to prompt for verification code
          alert('Please enter the verification code sent to your email or phone.');
        } else {
          alert('Please enter valid username and password');
        }
      }
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>{isSignUpMode ? 'Sign Up' : 'Login'}</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isVerificationRequired && (
            <div>
              <label>Verification Code:</label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit">{isSignUpMode ? 'Sign Up' : 'Login'}</button>
          <button type="button" onClick={() => setIsSignUpMode(!isSignUpMode)}>
            {isSignUpMode ? 'Switch to Login' : 'Switch to Sign Up'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
