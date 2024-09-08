import React from 'react';
import PatientDashboardNavbar from './PatientDashboardNavbar';
import PDScrollable from './PDScrollable'; // Scrollable Sidebar
import DefaultMainContent from './DefaultMainContent'; // Main Content Component
import './PatientDashboard.css'; // Optional if needed for common styles

const PatientDashboard = () => {
  // Sample patient data
  const patientData = {
    name: 'John Doe',
    appointment: {
      date: 'September 20, 2024',
      time: '2:00 PM',
    },
    therapist: {
      name: 'Dr. Emily Smith',
      qualifications: 'PhD in Speech-Language Pathology',
      experience: 12,
    },
    sessionsAttended: 10,
    progressRating: '8.5/10',
  };

  return (
    <div>
      <PatientDashboardNavbar />
      
      <div className="dashboard-container">
        {/* Scrollable Sidebar */}
        <PDScrollable /> 
        
        {/* Main Content Section */}
        <DefaultMainContent 
          patientName={patientData.name} 
          appointment={patientData.appointment} 
          therapist={patientData.therapist}
          sessionsAttended={patientData.sessionsAttended}
          progressRating={patientData.progressRating}
        />
      </div>
    </div>
  );
};

export default PatientDashboard;
