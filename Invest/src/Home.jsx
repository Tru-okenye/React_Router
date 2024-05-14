import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
const Home = () => {
  return (
    <>
    <nav>
 
 
<Link to="/" className='link'>Home </Link>
<Link to="/about" className='navlogin'>About </Link>
<Link to="/contact" className='navlogin'>Contact </Link>
<Link to="/packages" className='navlogin'>Packages </Link>

<Link to="/login" className='navlogin'>LogIn </Link>

    </nav>
    
  
    <Outlet/>
    </>
  );
};

export default Home;