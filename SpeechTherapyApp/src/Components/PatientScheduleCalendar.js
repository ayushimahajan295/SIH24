import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PatientScheduleCalendar.css'; // Ensure the CSS file is correctly linked

const PatientScheduleCalendar = () => {
  // Example meeting data with additional details
  const meetings = {
    past: [
      { date: '2024-09-01', therapist: 'Dr. Emily Smith', topic: 'Speech Fluency Techniques' },
      { date: '2024-09-05', therapist: 'Dr. John Doe', topic: 'Voice Modulation' },
      { date: '2024-09-10', therapist: 'Dr. Emily Smith', topic: 'Articulation Therapy' },
    ],
    upcoming: [
      { date: '2024-09-20', therapist: 'Dr. John Doe', topic: 'Language Development Strategies' },
      { date: '2024-09-25', therapist: 'Dr. Emily Smith', topic: 'Phonological Awareness' },
    ],
    missed: [
      { date: '2024-09-15', therapist: 'Dr. Emily Smith', topic: 'Oral Motor Skills' },
    ],
  };

  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      if (meetings.past.some(meeting => meeting.date === dateStr)) {
        return 'past-meeting';
      }
      if (meetings.upcoming.some(meeting => meeting.date === dateStr)) {
        return 'upcoming-meeting';
      }
      if (meetings.missed.some(meeting => meeting.date === dateStr)) {
        return 'missed-meeting';
      }
    }
    return null;
  };

  const handleDateClick = (value) => {
    const dateStr = value.toISOString().split('T')[0];
    const meeting =
      meetings.past.find(meeting => meeting.date === dateStr) ||
      meetings.upcoming.find(meeting => meeting.date === dateStr) ||
      meetings.missed.find(meeting => meeting.date === dateStr);

    if (meeting) {
      setSelectedMeeting(meeting);
    } else {
      setSelectedMeeting(null); // Reset if no meeting found on the selected date
    }
  };

  const getSessionStatus = (dateStr) => {
    if (meetings.past.some(meeting => meeting.date === dateStr)) {
      return { status: 'Session conducted successfully', emoji: '✅' };
    }
    if (meetings.upcoming.some(meeting => meeting.date === dateStr)) {
      return { status: 'Upcoming session', emoji: '🚦' };
    }
    if (meetings.missed.some(meeting => meeting.date === dateStr)) {
      return { status: 'Missed session', emoji: '😞' };
    }
    return null;
  };

  return (
    <div className="schedule-calendar-container">
      <h2>Meeting Schedule</h2>
      <Calendar
        tileClassName={tileClassName}
        onClickDay={handleDateClick}
        className="large-calendar"
      />
      {selectedMeeting && (
        <div className="meeting-details">
          <h3>Session Details</h3>
          <p><strong>Date:</strong> {selectedMeeting.date}</p>
          <p><strong>Therapist:</strong> {selectedMeeting.therapist}</p>
          <p><strong>Topic:</strong> {selectedMeeting.topic}</p>
          <p>
            <strong>Status:</strong> {getSessionStatus(selectedMeeting.date).status} {getSessionStatus(selectedMeeting.date).emoji}
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientScheduleCalendar;
