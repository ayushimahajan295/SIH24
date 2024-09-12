import React from 'react';
import './PDScrollable.css';

const PDScrollable = ({ onScheduleClick, onProgressClick, onTherapistClick, onFeedbackClick }) => { // Accept new onFeedbackClick prop
  return (
    <div className="pd-scrollable">
      <ul className="pd-scrollable-list">
        <li className="pd-scrollable-item" onClick={onScheduleClick}>Schedule</li>
        <li className="pd-scrollable-item" onClick={onProgressClick}>Progress</li>
        <li className="pd-scrollable-item" onClick={onTherapistClick}>Therapist Info</li>
        <li className="pd-scrollable-item">Resources</li>
        <li className="pd-scrollable-item">Payment</li>
        <li className="pd-scrollable-item" onClick={onFeedbackClick}>Feedback</li> {/* Trigger feedback click */}
        <li className="pd-scrollable-item">Help</li>
      </ul>
    </div>
  );
};

export default PDScrollable;


