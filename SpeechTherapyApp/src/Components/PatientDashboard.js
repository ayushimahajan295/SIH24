import React, { useState } from 'react';
import PatientDashboardNavbar from './PatientDashboardNavbar';
import PDScrollable from './PDScrollable';
import DefaultMainContent from './DefaultMainContent';
import HeroSection from './PatientHeroSection'; // Assuming the hero section is imported here
import ScheduleCalendar from './PatientScheduleCalendar'; // Import the calendar component
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [showSchedule, setShowSchedule] = useState(false); // State to manage calendar visibility

  const patientData = {
    name: 'Aastha Arora',
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

  // Handler for showing the schedule
  const handleScheduleClick = () => {
    setShowSchedule(true); // Show the calendar when Schedule button is clicked
  };

  return (
    <div>
      <PatientDashboardNavbar />
      
      <div className="dashboard-container">
        <PDScrollable onScheduleClick={handleScheduleClick} /> 
        
        <div className="main-content">
          {/* Conditionally render HeroSection or ScheduleCalendar based on state */}
          {showSchedule ? (
            <ScheduleCalendar />
          ) : (
            <DefaultMainContent 
              patientName={patientData.name} 
              appointment={patientData.appointment} 
              therapist={patientData.therapist}
              sessionsAttended={patientData.sessionsAttended}
              progressRating={patientData.progressRating}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;