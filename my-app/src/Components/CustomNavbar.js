import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaStethoscope } from 'react-icons/fa';

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FaStethoscope className="mr-2" style={{ fontSize: '1.5rem' }} /> {/* Medical symbol */}
          <span className="font-weight-bold text-primary">Speech Therapy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link href="/learn-more" className="nav-link-custom">
              Learn More
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/login" className="btn btn-outline-primary mx-2 btn-custom">
              Login
            </Nav.Link>
            <Nav.Link href="/signup" className="btn btn-primary mx-2 btn-custom">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Global Custom CSS styles */}
      <style jsx global>{`
        .nav-link-custom {
          color: #343a40; /* Default text color */
          margin-right: 15px;
        }
        .nav-link-custom:hover {
          color: #007bff !important; /* Change color to match Speech Therapy brand on hover */
        }
        .nav-link-custom.active {
          color: #007bff !important; /* Keep the active link in brand color */
        }
        .btn-custom {
          color: #007bff !important; /* Text color on button */
          border-color: #007bff !important; /* Border color of the outline button */
        }
        .btn-custom:hover {
          background-color: #007bff !important; /* Background color on hover */
          color: #fff !important; /* Text color on hover */
        }
        .navbar-brand {
          flex-grow: 1; /* Make the brand take up space */
        }
        .navbar-brand .mr-2 {
          margin-right: 0.5rem;
        }
        .navbar-nav.ml-auto {
          margin-left: auto;
        }
        .navbar {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      `}</style>
    </Navbar>
  );
}
