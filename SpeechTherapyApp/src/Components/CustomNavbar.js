import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/" className="navbar-brand">
        <img src="/path-to-logo/logo.png" alt="Speech Therapy Logo" className="mr-2" />
        Speech Therapy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="/about" className="nav-link-custom">About Us</Nav.Link>
          <Nav.Link href="/learn" className="nav-link-custom">Learn More</Nav.Link>
          <Nav.Link href="/contact" className="nav-link-custom">Contact Us</Nav.Link>
          <Nav.Link href="/login" className="nav-link-custom">Login</Nav.Link>
          <Button variant="outline-primary" className="btn-custom ml-2">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
