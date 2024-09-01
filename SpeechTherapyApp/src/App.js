import React from 'react';
import CustomNavbar from './Components/CustomNavbar';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <style jsx global>{`
        .nav-link-custom {
          color: #343a40;
          margin-right: 15px;
        }
        .nav-link-custom:hover {
          color: #007bff !important;
        }
        .nav-link-custom.active {
          color: #007bff !important;
        }
        .btn-custom {
          color: #007bff !important;
          border-color: #007bff !important;
        }
        .btn-custom:hover {
          background-color: #007bff !important;
          color: #fff !important;
        }
        .navbar-brand {
          flex-grow: 1;
        }
        .navbar-brand .mr-2 {
          margin-right: 0.5rem;
        }
        .navbar-nav.ml-auto {
          margin-left: auto;
        }
        .navbar {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .heroSection {
          background-color: #f8f9fa;
          padding: 100px 0;
        }
        .heroHeadline {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .heroSubtext {
          font-size: 1.25rem;
          color: #6c757d;
          margin-bottom: 40px;
        }
        .heroButton {
          font-size: 1.25rem;
          padding: 10px 30px;
          background-color: #007bff;
          border-color: #007bff;
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default App;
