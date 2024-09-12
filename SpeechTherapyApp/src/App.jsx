import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar"; // Regular homepage navbar
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutUs from "./Components/AboutUs";
import LearnMore from "./Components/LearnMore";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PatientDashboard from "./Components/PatientDashboard"; // Ensure this import is correct
import TherapistLogin from "./Components/TherapistLogin";
import "./App.css";
import TherapistDashboard from "./Components/TherapistDashboard";
import SupervisorDashboard from "./Components/SupervisorDashboard";
import SupervisorLogin from "./Components/SupervisorLogin";
import AdminDashboard from "./Components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* For Home and other general pages, include the CustomNavbar */}
        <Route
          path="/"
          element={
            <>
              <CustomNavbar />
              <HomePage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <CustomNavbar />
              <AboutUs />
            </>
          }
        />
        <Route
          path="/learn"
          element={
            <>
              <CustomNavbar />
              <LearnMore />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <CustomNavbar />
              <ContactUs />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <CustomNavbar />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <CustomNavbar />
              <Signup />
            </>
          }
        />

        <Route
          path="/therapist-login"
          element={
            <>
              <CustomNavbar />
              <TherapistLogin />
            </>
          }
        />

        <Route
          path="/therapist-dashboard"
          element={
            <>
              {/* <CustomNavbar /> */}
              <TherapistDashboard />
            </>
          }
        />

        <Route
          path="/supervisor-login"
          element={
            <>
              <CustomNavbar />
              <SupervisorLogin />
            </>
          }
        />

        <Route
          path="/supervisor-dashboard"
          element={
            <>
              {/* <CustomNavbar /> */}
              <SupervisorDashboard />
            </>
          }
        />

        {/* For the patient dashboard, only render PatientDashboardNavbar */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
