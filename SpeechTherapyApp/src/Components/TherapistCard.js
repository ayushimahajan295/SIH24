import React from 'react';

function TherapistCard({ therapist }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{therapist.name}</h5>
        <p className="card-text">Specialty: {therapist.specialty}</p>
        <p className="card-text">Rating: {therapist.rating}</p>
      </div>
    </div>
  );
}

export default TherapistCard;
