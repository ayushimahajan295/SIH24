import React from 'react';
import './HomePage.css';
import logo from '../Assets/app-logo.png';
import './Footer.js';

function CustomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" className="navbar-brand">
        <img 
          src={logo} 
          alt="Speech Therapy Logo" 
          style={{ height: '40px', width: 'auto', marginRight: '10px' }} 
        />
        Speech Therapy
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link nav-link-custom">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link nav-link-custom">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/learn" className="nav-link nav-link-custom">Learn More</a>
          </li>
          <li className="nav-item">
            <a href="#contactus" className="nav-link nav-link-custom">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link nav-link-custom">Login</a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="btn btn-outline-primary btn-custom ml-2">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
