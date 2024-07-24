import React, { useState } from 'react';
import '../styles/Navbar.css'; // Adjust the path according to your project structure

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="name">Kreet<span>Rout</span></a>
      <i className="dropboxMenu" id="menu-icon" onClick={toggleMenu}>☰</i>
      <ul id="nav-links" className={isMenuOpen ? 'show' : ''}>
        <li className="list"><a href="#">Home</a></li>
        <li className="list"><a href="#projects">Projects</a></li>
        <li className="list"><a href="#experience">Experience</a></li>
        <li className="list"><a href="#skills">Proficiency</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
