import React, { useState } from 'react';
import './NavBar.css';
import { AiOutlineMenu } from 'react-icons/ai'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <h1 className='logo'>LOGO</h1>
      <div className={"menu-dropdown " + (showMenu ? "visible" : "invisible")}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">About us</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-center" onClick={() => setShowMenu(false)}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">About us</a>
        <a href="#">Contact</a>
      </div>
      <AiOutlineMenu className='menu-icon' onClick={() => setShowMenu(!showMenu)} />
      <div className="navbar-right">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default NavBar;