// PatientDashboard.js
import React from 'react';
import PatientDashboardNavbar from './PatientDashboardNavbar';
import PatientHeroSection from './PatientHeroSection';

const appointment = {
  date: '2024-09-10',
  time: '10:00 AM',
  therapistName: 'Dr. Smith',
  type: 'Online',
};

const progress = 40;

const PatientDashboard = () => {
  return (
    <div>
      <PatientDashboardNavbar />
      <PatientHeroSection
        patientName="John Doe"
        appointment={appointment}
        progress={progress}
      />
    </div>
  );
};

export default PatientDashboard;
