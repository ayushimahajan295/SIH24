import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import "./Login.css";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const loginWithEmail = async () => {
    if (!validateEmail(loginEmail)) {
      setError("Invalid email format");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/patient-dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        className="login-input"
        placeholder="Enter your email"
        onChange={(event) => setLoginEmail(event.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Enter your password"
        onChange={(event) => setLoginPassword(event.target.value)}
      />
      <button className="login-button" onClick={loginWithEmail}>
        Log In with Email
      </button>
    </div>
  );
}

export default Login;
