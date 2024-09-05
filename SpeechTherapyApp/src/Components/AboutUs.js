import React, { useState } from 'react';
import './AboutUs.css';
import aboutus_therapy from '../Assets/aboutus_therapy.jpg'; // Ensure the path is correct

function AboutUs() {
  const [showDetails, setShowDetails] = useState(false);

  const handleArrowClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="aboutus-section">
      {!showDetails ? (
        <div className="aboutus-content">
          <div className="aboutus-text">
            <h3 className="aboutus-heading">About Us</h3>
            <p>
            Our Speech and Language Department provides comprehensive solutions for communication-related challenges. Our skilled team caters to issues with speech, language, and basic skills. We specialize in treating speech and language delays in children and adults, helping them improve confidence and communication abilities. Our approach is rooted in evidence-based practices and personalized care, ensuring that each individual receives the attention they need. We work closely with families and caregivers, offering guidance and support throughout the therapeutic process. Our services encompass a wide range of conditions, including speech disorders, language delays, and cognitive-communication difficulties. By fostering a supportive and collaborative environment, we empower our clients to reach their fullest potential and enhance their quality of life through improved communication skills.
            </p>
          </div>
          <div className="aboutus-image">
            <img src={aboutus_therapy} alt="Speech Therapy" />
          </div>
          <div className="arrow arrow-right" onClick={handleArrowClick}>&#9654;</div> {/* Right arrow */}
        </div>
      ) : (
        <div className="details-content">
          <div className="arrow arrow-left" onClick={handleArrowClick}>&#9664;</div> {/* Left arrow */}
          <h3 className="aboutus-heading">How We Provide Care</h3>
          <div className="care-details">
            <div className="care-for-children">
              <h4>For Children</h4>
              <ul>
                <li>Delay in the acquisition of speech and language</li>
                <li>Unclear and unintelligible speech</li>
                <li>Fluency-related aspects such as hesitancy and stammering</li>
                <li>Special needs including hearing challenges, autism, cerebral palsy, and developmental delays</li>
                <li>Neurological conditions and learning differences</li>
                <li>Cleft lip and/or palate, voice-related issues</li>
              </ul>
            </div>
            <div className="care-for-adults">
              <h4>For Adults</h4>
              <ul>
                <li>Unclear and unintelligible speech</li>
                <li>Fluency-related disorders like stammering and cluttering</li>
                <li>Neurological conditions such as Parkinson’s, Myasthenia Gravis, Multiple Sclerosis</li>
                <li>Individuals affected by strokes and road accidents</li>
                <li>Special needs and swallowing-related disorders</li>
              </ul>
            </div>
            <p>In essence, our Speech and Language Department offers expert care for anyone seeking to address and overcome their communication challenges.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;

