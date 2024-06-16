// src/components/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faFutbol, faCloudSun, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../assets/hklg-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /> الصفحة الرئيسية</a></li>
          <li><a href="#sportinfo"><FontAwesomeIcon icon={faFutbol} /> معلومات الرياضة</a></li>
          <li><a href="#meteo"><FontAwesomeIcon icon={faCloudSun} /> حالة الطقس</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> حول</a></li>
          <li><a href="#contactus"><FontAwesomeIcon icon={faEnvelope} /> اتصل بنا</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn"><FontAwesomeIcon icon={faGlobe} /> اللغة</a>
            <div className="dropdown-content">
              <a href="#english">English</a>
              <a href="#french">French</a>
              <a href="#spanish">Spanish</a>
            </div>
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

