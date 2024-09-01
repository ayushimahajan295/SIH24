import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <section className="heroSection">
      <Container className="text-center">
        <h1 className="heroHeadline">Your Path to Better Communication Starts Here</h1>
        <p className="heroSubtext">Connect with expert speech therapists and achieve your goals.</p>
        <Button href="/get-started" className="heroButton">Get Started</Button>
      </Container>

      {/* Custom CSS styles */}
      <style jsx>{`
        .heroSection {
          background-color: #f8f9fa; /* Light gray background */
          padding: 100px 0; /* Padding for top and bottom */
        }
        .heroHeadline {
          font-size: 2.5rem;
          color: #007bff; /* Speech Therapy brand color */
          margin-bottom: 20px;
          font-weight: bold;
        }
        .heroSubtext {
          font-size: 1.25rem;
          color: #6c757d; /* Muted color for subtext */
          margin-bottom: 40px;
        }
        .heroButton {
          font-size: 1.25rem;
          padding: 10px 30px;
          background-color: #007bff;
          border-color: #007bff;
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
