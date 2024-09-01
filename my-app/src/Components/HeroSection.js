import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import the CSS file

export default function HeroSection() {
  return (
    <section className="heroSection">
      <Container className="text-center">
        <h1 className="heroHeadline">Your Path to Better Communication Starts Here</h1>
        <p className="heroSubtext">Connect with expert speech therapists and achieve your goals.</p>
        <Button href="/get-started" className="heroButton">Get Started</Button>
      </Container>
    </section>
  );
}
