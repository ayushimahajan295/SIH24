import React from 'react';
import PatientDashboardNavbar from './PatientDashboardNavbar';
import PDScrollable from './PDScrollable'; // Import the new scrollable component
//import './PatientDashboard.css'; // Keep your main dashboard CSS

const PatientDashboard = () => {
  return (
    <div>
      <PatientDashboardNavbar />
      
      <div className="dashboard-container">
        {/* Sidebar with functionalities */}
        <PDScrollable /> {/* Replaced the old sidebar with the new component */}
        
        {/* Main content section */}
        <div className="main-content">
          <h2>Welcome to Your Dashboard</h2>
          {/* Add the main content here based on the selected option */}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
