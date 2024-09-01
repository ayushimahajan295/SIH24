import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaStethoscope } from 'react-icons/fa';
import './CustomNavbar.css'; // Import the CSS file

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container fluid>
        {/* Brand aligned to the left */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FaStethoscope className="stethoscope-icon" />
          <span className="brand-name">Speech Therapy</span>
        </Navbar.Brand>

        {/* Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links and Buttons */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
          {/* Navigation Links centered */}
          <Nav className="nav-links">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link href="/learn-more" className="nav-link-custom">Learn More</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact Us</Nav.Link>
          </Nav>

          {/* Buttons aligned to the right */}
          <Nav className="button-links">
            <Nav.Link href="/login" className="btn btn-outline-primary btn-custom">Login</Nav.Link>
            <Nav.Link href="/signup" className="btn btn-primary btn-custom">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
