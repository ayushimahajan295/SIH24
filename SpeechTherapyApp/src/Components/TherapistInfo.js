import React from 'react';
import './TherapistInfo.css'; // Create a new CSS file for styling

const TherapistInfo = ({ therapist }) => {
  return (
    <div className="therapist-info">
      <h2>{therapist.name}</h2>
      <p><strong>Qualifications:</strong> {therapist.qualifications}</p>
      <p><strong>Experience:</strong> {therapist.experience} years</p>
      <p><strong>Specialization:</strong> Speech-Language Pathology</p>
      <p><strong>Contact:</strong> 8271998795 | emilytherapist@example.com</p>
      <p><strong>About:</strong> Dr. Emily Smith is an experienced Speech-Language Pathologist specializing in helping individuals improve their communication skills. She has over a decade of experience and is passionate about making a difference in her patients' lives.</p>
    </div>
  );
};

export default TherapistInfo;
