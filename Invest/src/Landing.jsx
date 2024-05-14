import React from 'react';
import Login from './Login';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

const Landing = ({ onLogin }) => {
  return (
    <>
    <div className='Homepage'> 
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sed pariatur, illum qui nihil ipsam consequatur ratione amet, hic eaque obcaecati
         repudiandae doloremque at quod veritatis iusto ipsa doloribus earum aspernatur laudantium molestiae. 
        Odit dolorem unde possimus nobis recusandae maxime consequuntur!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae iure velit, 
          qui vel maiores. Ipsa deserunt totam molestias minus dolores qui aliquid in a inventore unde,
           suscipit quibusdam ad cumque officia doloremque dicta deleniti saepe magni distinctio assumenda quis. 
           Praesentium, quisquam vitae adipisci, 
          nulla repellat nobis ipsum quaerat animi porro eligendi similique 
          nostrum libero ea cum et aliquid veritatis?</p>


    </div>
    </>
      
  );
}

export default Landing;