// DefaultMainContent.js
import React from 'react';
import './DefaultMainContent.css'; // Import the CSS for styling

const DefaultMainContent = ({ patientName, appointment, therapist, sessionsAttended, progressRating }) => {
  return (
    <div className="main-content">
      <h2>👋 Welcome Back, {patientName}!</h2>
      <p>We're thrilled to see you back on your journey towards better communication. Let's keep the momentum going!</p>

      <div className="upcoming-appointment">
        <h3>📅 Upcoming Appointment</h3>
        <p>
          Your next session is scheduled on <strong>{appointment.date}</strong> at <strong>{appointment.time}</strong>  
           with <strong>{therapist.name}</strong>.
        </p>
        <p>
          <strong>About {therapist.name}:</strong> {therapist.qualifications}, with over 
          <strong>{therapist.experience} years</strong> of experience in speech therapy. Get ready to make more progress!
        </p>
        <button className="btn-primary">Reschedule</button>
        <button className="btn-secondary">View Details</button>
      </div>

      <div className="therapy-progress">
        <h3>📈 Your Therapy Progress</h3>
        <p>You've successfully completed <strong>{sessionsAttended}</strong> sessions.</p>
        <p>Your progress rating is currently <strong>{progressRating}</strong> – you're doing great!</p>
        <button className="progress-details-btn">View Detailed Report</button>
      </div>

      <div className="resources-section">
        <h3>📚 Explore Resources</h3>
        <p>Check out the latest resources curated for your therapy plan:</p>
        <ul className="resource-list">
          <li>📝 Speech Exercises for Home</li>
          <li>🎧 Guided Speech Therapy Podcasts</li>
          <li>📕 Latest Research in Speech Therapy</li>
        </ul>
        <button className="btn-primary">Explore All Resources</button>
      </div>

      <div className="feedback-section">
        <h3>💬 Share Your Feedback</h3>
        <p>We value your opinion! How was your last session? Help us improve by leaving feedback:</p>
        <button className="btn-feedback">Give Feedback</button>
      </div>

      <div className="support-section">
        <h3>📞 Need Help?</h3>
        <p>If you have any questions, don't hesitate to reach out to our support team for assistance.</p>
        <button className="btn-support">Contact Support</button>
      </div>
    </div>
  );
};

export default DefaultMainContent;
