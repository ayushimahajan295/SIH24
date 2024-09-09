import React, { useState } from 'react';
import PatientDashboardNavbar from './PatientDashboardNavbar';
import PDScrollable from './PDScrollable';
import DefaultMainContent from './DefaultMainContent';
import HeroSection from './PatientHeroSection';
import ScheduleCalendar from './PatientScheduleCalendar';
import ProgressReport from './ProgressReport'; // Import the new ProgressReport component
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showProgress, setShowProgress] = useState(false); // New state for progress report visibility

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

  // Handlers for showing the schedule and progress report
  const handleScheduleClick = () => {
    setShowSchedule(true);
    setShowProgress(false); // Hide progress when schedule is shown
  };

  const handleProgressClick = () => {
    setShowProgress(true);
    setShowSchedule(false); // Hide schedule when progress is shown
  };

  return (
    <div>
      <PatientDashboardNavbar />
      
      <div className="dashboard-container">
        <PDScrollable 
          onScheduleClick={handleScheduleClick} 
          onProgressClick={handleProgressClick} // Pass progress click handler
        /> 
        
        <div className="main-content">
          {/* Conditionally render based on state */}
          {showSchedule ? (
            <ScheduleCalendar />
          ) : showProgress ? (
            <ProgressReport /> // Render ProgressReport component
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
