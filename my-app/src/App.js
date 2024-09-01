import React from 'react';
import CustomNavbar from './Components/Navbar'; // Import the Navbar
import HomePage from './Components/HomePage'; // Import the HomePage

function App() {
  return (
    <div>
      <CustomNavbar /> {/* Navbar is rendered here independently */}
      <HomePage /> {/* Home page content, including Hero section, is rendered here */}

      {/* Global Custom CSS styles */}
      <style jsx global>{`
        .nav-link-custom {
          color: #343a40; /* Default text color */
          margin-right: 15px;
        }
        .nav-link-custom:hover {
          color: #007bff !important; /* Change color to match Speech Therapy brand on hover */
        }
        .nav-link-custom.active {
          color: #007bff !important; /* Keep the active link in brand color */
        }
        .btn-custom {
          color: #007bff !important; /* Text color on button */
          border-color: #007bff !important; /* Border color of the outline button */
        }
        .btn-custom:hover {
          background-color: #007bff !important; /* Background color on hover */
          color: #fff !important; /* Text color on hover */
        }
        .navbar-brand {
          flex-grow: 1; /* Make the brand take up space */
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
