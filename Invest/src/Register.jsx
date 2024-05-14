import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './App.css';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // Pass username, email, and password in the request body
      });

      if (response.ok) {
   
        // Redirect to the login page
        navigate('/login');
        alert('Registration successful. You can now login.');
      } else {
        // Registration failed, show an error message
        // alert(errorMessage);
        const data = await response.json();
        const errorMessage = data.username[0];

        console.log(errorMessage)
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className="Login">
        <div className="LoginPage">
          <h2>Register</h2>
          <label>
            Name:
          </label>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
          <label>
            Email:
          </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>
            Password:
          </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={handleRegister} className="Loginbutton">Register</button>
        </div>
        <p>Already have an account? <Link to="/login" className="link">LogIn</Link></p>
      </div>
    </>
  );
};

export default Register;
