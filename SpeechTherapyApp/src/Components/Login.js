import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // Perform login logic here (simplified for now)
    console.log('User logged in');
    
    // Redirect to Patient Dashboard after login
    navigate('/patient-dashboard');
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" className="form-control mb-3" placeholder="Enter your username" />
      <input type="password" className="form-control mb-3" placeholder="Enter your password" />
      <button className="btn btn-primary" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}

export default Login;
