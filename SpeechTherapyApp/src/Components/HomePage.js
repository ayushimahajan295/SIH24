import React from 'react';

function HomePage() {
  return (
    <div className="heroSection">
      <div className="container text-center">
        <h1 className="heroHeadline">Your Path to Better Communication Starts Here</h1>
        <p className="heroSubtext">Connect with expert speech therapists and achieve your goals.</p>
        <a href="/get-started" className="btn btn-primary heroButton">Get Started</a>
      </div>
    </div>
  );
}

export default HomePage;
