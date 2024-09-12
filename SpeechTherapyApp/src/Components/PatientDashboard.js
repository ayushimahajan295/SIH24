import React, { useState } from 'react';
import PatientDashboardNavbar from './PatientDashboardNavbar';
import PDScrollable from './PDScrollable';
import DefaultMainContent from './DefaultMainContent';
import HeroSection from './PatientHeroSection';
import ScheduleCalendar from './PatientScheduleCalendar';
import ProgressReport from './ProgressReport';
import TherapistInfo from './TherapistInfo';
import FeedbackForm from './FeedbackPatient'; // Import the new FeedbackForm component
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showTherapistInfo, setShowTherapistInfo] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false); // New state for feedback form

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

  // Handlers for showing different components
  const handleScheduleClick = () => {
    setShowSchedule(true);
    setShowProgress(false);
    setShowTherapistInfo(false);
    setShowFeedback(false); // Hide feedback form when schedule is shown
  };

  const handleProgressClick = () => {
    setShowProgress(true);
    setShowSchedule(false);
    setShowTherapistInfo(false);
    setShowFeedback(false); // Hide feedback form when progress is shown
  };

  const handleTherapistClick = () => {
    setShowTherapistInfo(true);
    setShowSchedule(false);
    setShowProgress(false);
    setShowFeedback(false); // Hide feedback form when therapist info is shown
  };

  const handleFeedbackClick = () => {
    setShowFeedback(true);
    setShowSchedule(false);
    setShowProgress(false);
    setShowTherapistInfo(false); // Hide other sections when feedback is shown
  };

  return (
    <div>
      <PatientDashboardNavbar />
      
      <div className="dashboard-container">
        <PDScrollable 
          onScheduleClick={handleScheduleClick} 
          onProgressClick={handleProgressClick}
          onTherapistClick={handleTherapistClick}
          onFeedbackClick={handleFeedbackClick} // Pass feedback click handler
        /> 
        
        <div className="main-content">
          {/* Conditionally render based on state */}
          {showSchedule ? (
            <ScheduleCalendar />
          ) : showProgress ? (
            <ProgressReport />
          ) : showTherapistInfo ? (
            <TherapistInfo therapist={patientData.therapist} />
          ) : showFeedback ? (
            <FeedbackForm /> // Render the FeedbackForm component
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
