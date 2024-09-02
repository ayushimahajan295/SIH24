import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/CustomNavbar';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Components/AboutUs';
import LearnMore from './Components/LearnMore';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PatientDashboard from './Components/PatientDashboard';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
