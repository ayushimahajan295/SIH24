import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";


function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Google Provider
  const provider = new GoogleAuthProvider();

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

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("Google user:", user);
      navigate("/patient-dashboard");
    } catch (error) {
      console.log("Google login error:", error.message);
      setError("An error occurred during Google login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="">Login</h1>
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
      <button className="login-button google-button" onClick={loginWithGoogle}>
        Log In with Google
      </button>
    </div>
  );
}

export default Login;
