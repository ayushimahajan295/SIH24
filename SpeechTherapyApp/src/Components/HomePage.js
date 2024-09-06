import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HomePage.css';
import ContactUs from './ContactUs';
import FAQs from './FAQs';
import AboutUs from './AboutUs';

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    navigate('/signup'); // Use navigate to go to the signup page
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="heroSection">
        <div className="heroBackgroundOverlay"></div>
        <div className="container text-center heroContent">
          <h1 className="heroHeadline">Your Path to Better Communication Starts Here</h1>
          <p className="heroSubtext">Connect with expert speech therapists and achieve your goals.</p>
          <button onClick={handleGetStartedClick} className="btn btn-primary heroButton">Get Started</button>
        </div>
      </div>
      <br />
      <AboutUs />
      <FAQs />
      <ContactUs />
    </div>
  );
}

export default HomePage;
