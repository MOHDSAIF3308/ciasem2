// src/components/NavBar.js

import React from 'react';
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
