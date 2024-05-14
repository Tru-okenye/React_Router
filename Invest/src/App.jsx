import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Packages from './Packages';
import PaymentDetails from './PaymentDetails';
import Mpesa from './Mpesa';
import Receipt from './Receipt';

function App() {
  const handleLogin = () => {
    // Your login logic here
    console.log('Logged in!');
  };

  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home onLogin={handleLogin} />}
          >
            <Route index element={<Landing onLogin={handleLogin} />} />

            <Route path='login' element={<Login />} />
             <Route path="register" element={<Register />} />
             <Route path="about" element={<About />} />
             <Route path="contact" element={<Contact />} />
             <Route path="packages" element={<Packages />} />
             <Route path="payment" element={<PaymentDetails />} />
             <Route path="mpesa" element={<Mpesa />} />
             <Route path="receipt" element={<Receipt />} />

           
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;