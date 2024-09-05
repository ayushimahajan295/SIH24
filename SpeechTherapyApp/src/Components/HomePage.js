import React from 'react';
import './HomePage.css';
import ContactUs from './ContactUs';
import FAQs from './FAQs';
import backgroundImage from '../Assets/image.png';

function HomePage() {
  return (
    <div>
      <div className="heroSection">
        {/* Background image overlay */}
        <div className="heroBackgroundOverlay"></div> 
        <div className="container text-center heroContent">
          <h1 className="heroHeadline">Your Path to Better Communication Starts Here</h1>
          <p className="heroSubtext">Connect with expert speech therapists and achieve your goals.</p>
          <a href="/get-started" className="btn btn-primary heroButton">Get Started</a>
        </div>
      </div>
      <FAQs />
      <ContactUs />
    </div>
  );
}

export default HomePage;
