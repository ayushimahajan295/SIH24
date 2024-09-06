import React, { useState } from 'react';
import './Signup.css'; // Import the new CSS file
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Signup() {
  const { loginWithRedirect } = useAuth0();
  const [showPopup, setShowPopup] = useState(true); // State for showing popup

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-center mb-4">Sign Up</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm your password" />
            </Form.Group>
            <Button variant="primary" type="button" className="w-100" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>

      {showPopup && (
        <div className="signupPopup">
          <button className="popupCloseButton" onClick={handleClosePopup}>&times;</button>
          <h4>We are excited to have you here!</h4>
          <p>Join our community and start your journey today.</p>
          <p>Feel free to reach out if you have any questions.</p>
        </div>
      )}
    </Container>
  );
}

export default Signup;
