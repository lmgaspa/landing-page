import React from 'react';
import './NavBar.css';
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className='logo'>LOGO</h1>
      <div className="navbar-center">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">About us</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-right">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      <AiOutlineMenu className='invisivel' />
    </nav>
  );
}

export default NavBar