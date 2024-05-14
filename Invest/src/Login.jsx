import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

import './App.css';
const Login = ({ onLogin }) => {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Login successful, notify the parent component
        onLogin();
        // Redirect to the payment page
        alert('logged in');
      } else {
        // Login failed, show an error message
        const data = await response.json();
        console.log(data.details)
        alert(data.details);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <>
    <div className="Login">

        <div className="LoginPage">
        <h2>Login</h2>
        <label>
            Name:
        </label>
            <input type="text" value={username} onChange={(e) => setuserName(e.target.value)} />
        
        <label>
            Password:
        </label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button onClick={handleLogin} className="Loginbutton">Login</button>
        </div>
    
    <p>Dont have an account: <Link to="/register" className='link'>SignIn</Link>
</p>
    </div>
    </>
  );
};

export default Login;