import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaStethoscope } from 'react-icons/fa';

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="font-weight-bold text-primary d-flex align-items-center">
          <FaStethoscope className="mr-2" /> {/* Medical symbol */}
          Speech Therapy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-dark mx-3 nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-dark mx-3 nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link href="/learn-more" className="text-dark mx-3 nav-link-custom">
              Learn More
            </Nav.Link>
            <Nav.Link href="/contact" className="text-dark mx-3 nav-link-custom">
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

      {/* Custom CSS styles */}
      <style jsx>{`
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
      `}</style>
    </Navbar>
  );
}
