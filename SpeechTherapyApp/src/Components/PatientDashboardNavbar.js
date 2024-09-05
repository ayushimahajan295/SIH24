import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PatientDashboardNavbar.css';
import logo from '../Assets/app-logo.png'; // Adjust the logo path as needed

function PatientDashboardNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto', marginRight: '10px' }} />
        Therapy Services
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link-custom" to="/patient-dashboard">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link-custom" to="/appointments">Appointments</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link-custom" to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link-custom" to="/payment">Payment</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link-custom nav-link-profile" to="/profile">
              <i className="fas fa-user-circle"></i> Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default PatientDashboardNavbar;
