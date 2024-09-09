import React from 'react';
import './CustomNavbar.css';  // Ensure the correct CSS file is imported
import logo from '../Assets/app-logo.png'; // Update the logo path as needed
import { Link } from 'react-router-dom';  // Assuming you're using React Router

function PatientDashboardNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" className="navbar-brand">
        <img 
          src={logo} 
          alt="Therapy Services Logo" 
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
            <Link to="/patient-dashboard" className="nav-link nav-link-custom">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/appointments" className="nav-link nav-link-custom">Appointments</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link nav-link-custom">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/payment" className="nav-link nav-link-custom">Payment</Link>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="btn btn-outline-primary btn-custom ml-2 dropdown-toggle" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle"></i> Profile
            </a>
            <div className="dropdown-menu" aria-labelledby="profileDropdown">
              <Link className="dropdown-item" to="/profile">View Profile</Link>
              <Link className="dropdown-item" to="/patient-dashboard">Dashboard</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/logout">Logout</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PatientDashboardNavbar;