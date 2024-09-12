import React from 'react';
import './CustomNavbar.css';  // Ensure the correct CSS file is imported
import logo from '../Assets/app-logo.png';

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
            <a href="/" className="nav-link nav-link-custom text-red-700">Home</a>
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
            <a href="/login" className="btn btn-outline-primary btn-custom ml-2">Patient Login</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="btn btn-outline-primary btn-custom ml-2 dropdown-toggle" id="staffLoginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Staff Login
            </a>
            <div className="dropdown-menu" aria-labelledby="staffLoginDropdown">
              <a className="dropdown-item" href="/therapist-login">Therapist Login</a>
              <a className="dropdown-item" href="/supervisor-login">Supervisor Login</a>
              <a className="dropdown-item" href="/admin-login">Admin Login</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
