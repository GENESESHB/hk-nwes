import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faFutbol, faCloudSun, faGlobe, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/hklg-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}><FontAwesomeIcon icon={faHome} /> الصفحة الرئيسية</Link></li>
          <li><Link to="/sportinfo" onClick={closeMenu}><FontAwesomeIcon icon={faFutbol} /> معلومات الرياضة</Link></li>
          <li><Link to="/meteo" onClick={closeMenu}><FontAwesomeIcon icon={faCloudSun} /> حالة الطقس</Link></li>
          <li><Link to="/about" onClick={closeMenu}><FontAwesomeIcon icon={faInfoCircle} /> حول</Link></li>
          <li><Link to="/contactus" onClick={closeMenu}><FontAwesomeIcon icon={faEnvelope} /> اتصل بنا</Link></li>
          <li><Link to="/login" onClick={closeMenu}><FontAwesomeIcon icon={faUserShield} /> الوصول إلى الإدارة</Link></li>
          <li className="dropdown">
            <a href="#" className="dropbtn" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faGlobe} /> اللغة</a>
            <div className="dropdown-content">
              <a href="#english" onClick={closeMenu}>English</a>
              <a href="#french" onClick={closeMenu}>French</a>
              <a href="#spanish" onClick={closeMenu}>Spanish</a>
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
