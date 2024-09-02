import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-center mb-4">Log In</h1>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button variant="primary" type="button" className="w-100" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
