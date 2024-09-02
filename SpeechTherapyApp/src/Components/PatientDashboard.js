import React, { useState } from 'react';
import TherapistCard from './TherapistCard';

const therapists = [
  { name: 'Dr. Smith', specialty: 'Speech Therapy', rating: 4.8 },
  { name: 'Dr. Jones', specialty: 'Pediatric Speech Therapy', rating: 4.5 },
];

function PatientDashboard() {
  const [search, setSearch] = useState('');

  const filteredTherapists = therapists.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>Your Therapists</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Search Therapists..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-4">
        {filteredTherapists.map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>
    </div>
  );
}

export default PatientDashboard;
