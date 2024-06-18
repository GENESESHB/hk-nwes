// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SportInfo from './pages/SportInfo';
import Meteo from './pages/Meteo';
import About from './pages/About';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login'; // Ensure this path is correct
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sportinfo" element={<SportInfo />} />
            <Route path="/meteo" element={<Meteo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

