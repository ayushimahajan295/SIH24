import React from 'react';
import './PDScrollable.css';

const PDScrollable = ({ onScheduleClick }) => {
  return (
    <div className="pd-scrollable">
      <ul className="pd-scrollable-list">
        <li className="pd-scrollable-item" onClick={onScheduleClick}>Schedule</li>
        <li className="pd-scrollable-item">Progress</li>
        <li className="pd-scrollable-item">Therapist Info</li>
        <li className="pd-scrollable-item">Resources</li>
        <li className="pd-scrollable-item">Payment</li>
        <li className="pd-scrollable-item">Feedback</li>
        <li className="pd-scrollable-item">Help</li>
      </ul>
    </div>
  );
};

export default PDScrollable;