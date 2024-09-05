import React from 'react';
import './PatientHeroSection.css'; // Link to your CSS

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-welcome">Welcome Back, Aastha Arora</h1>
          <p className="hero-subtext">We’re here to support your journey toward well-being. Let’s continue making progress together.</p>
          
          {/* Search Therapist Section */}
          <div className="search-therapist">
            <input type="text" className="search-input" placeholder="Search by therapist name..." />
            <button className="btn btn-search">Search</button>
            <p className="recommendation-text">
              Need personalized recommendations? 
              <button className="btn-recommendation">Click here</button>
            </p>
          </div>
          
          {/* Track Progress and Attendance Buttons */}
          <div className="hero-actions">
            <button className="btn btn-track">Track Your Progress</button>
            <button className="btn btn-attendance">See Your Attendance</button>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="resources">
        <h2 className="resources-title">Helpful Resources</h2>
        <div className="resources-grid">
          <iframe width="360" height="215" src="https://www.youtube.com/embed/DmTbdR2BC6s?si=qt43vZX8voe0YqPd" title="YouTube video player" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/mUrl8EtFxUs?si=sTQwVBNc9B6RcYIw" title="YouTube video player" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/DOtGK0odCYg?si=Ft7pCsTpuW5CFXGD" title="YouTube video player" allowFullScreen></iframe>
        </div>
        <div className="show-more">
          <a href="/resources" className="btn-show-more">Show More</a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
