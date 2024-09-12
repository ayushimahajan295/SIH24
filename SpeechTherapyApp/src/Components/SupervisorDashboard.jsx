import React, { useState, useEffect } from 'react';
import { User, Calendar, Menu, ChevronLeft, ChevronRight, Clock, Edit, MessageSquare, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/app-logo.png'; 
import "./SupervisorDashboard.css";

// Header Component
const Header = ({ supervisorName, toggleSidebar }) => (
  <header className="header">
    <div className="container">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          <Menu size={24} />
        </button>
        <img src={logo} alt="Logo" className="logo" />
        <h1>{supervisorName}'s Dashboard</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/therapists">Therapists</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// TherapistCard Component
const TherapistCard = ({ therapist, appointments, onAddRemark, onReschedule }) => {
  const [newRemark, setNewRemark] = useState('');
  const [showReschedule, setShowReschedule] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleAddRemark = () => {
    if (newRemark.trim()) {
      onAddRemark(therapist.id, newRemark);
      setNewRemark('');
    }
  };

  const handleReschedule = () => {
    if (newDate && newTime) {
      onReschedule(therapist.id, newDate, newTime);
      setShowReschedule(false);
      setNewDate('');
      setNewTime('');
    }
  };

  return (
    <div className="therapist-card">
      <div className="therapist-header">
        <User className="user-icon" size={24} />
        <h3>{therapist.name}</h3>
        <span>ID: {therapist.id}</span>
      </div>

      <div className="appointments">
        <h4>📅 Upcoming Appointments:</h4>
        {appointments.slice(0, 2).map((apt, index) => (
          <div key={index} className="appointment">
            <Calendar size={16} />
            <span>{apt.date}</span>
            <Clock size={16} />
            <span>{apt.time}</span>
          </div>
        ))}
      </div>

      <div className="actions">
        <button onClick={() => setShowReschedule(!showReschedule)} className="reschedule">
          <RefreshCw size={16} />
          Reschedule
        </button>
      </div>

      {showReschedule && (
        <div className="reschedule-form">
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
          <button onClick={handleReschedule} className="confirm">Confirm</button>
        </div>
      )}

      <div className="quick-actions">
        <input
          type="text"
          value={newRemark}
          onChange={(e) => setNewRemark(e.target.value)}
          placeholder="Add a quick remark..."
        />
        <button onClick={handleAddRemark} className="add-remark">
          <MessageSquare size={16} />
        </button>
      </div>
    </div>
  );
};

// MonthCalendar Component
const MonthCalendar = ({ appointments }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const calendarArray = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      calendarArray.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarArray.push(new Date(year, month, i));
    }

    setCalendarDays(calendarArray);
  }, [currentDate]);

  const hasAppointment = (date) => {
    return appointments.some(apt => {
      const aptDate = new Date(apt.date);
      return aptDate.getDate() === date.getDate() &&
             aptDate.getMonth() === date.getMonth() &&
             aptDate.getFullYear() === date.getFullYear();
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <div className="calendar bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} className="p-1"><ChevronLeft size={16} /></button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={nextMonth} className="p-1"><ChevronRight size={16} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {calendarDays.map((day, index) => (
          <div key={index} className="text-center p-1">
            {day && (
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto text-xs
                  ${hasAppointment(day) ? 'bg-blue-500 text-white' : ''}`}
              >
                {day.getDate()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen }) => (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard Home</Link></li>
        <li><Link to="/calendar">Calendar View</Link></li>
        <li><Link to="/therapists">Therapist List</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </nav>
    <div className="search">
      <input type="text" placeholder="Search therapists..." />
    </div>
  </div>
);

// Main SupervisorDashboard Component
const SupervisorDashboard = () => {
  const [therapists, setTherapists] = useState([
    {
      id: '001',
      name: 'Dr. John Doe',
      appointments: [
        { date: '2024-09-07', time: '10:00 AM' },
        { date: '2024-09-14', time: '11:00 AM' }
      ],
      remarks: [],
    },
    {
      id: '002',
      name: 'Dr. Jane Smith',
      appointments: [
        { date: '2024-09-08', time: '2:00 PM' }
      ],
      remarks: [],
    },
    {
      id: '003',
      name: 'Dr. Bob Johnson',
      appointments: [
        { date: '2024-09-09', time: '3:30 PM' },
        { date: '2024-09-16', time: '3:30 PM' }
      ],
      remarks: [],
    }
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddRemark = (therapistId, remark) => {
    setTherapists(prevTherapists => prevTherapists.map(therapist => 
      therapist.id === therapistId 
        ? { ...therapist, remarks: [...therapist.remarks, remark] }
        : therapist
    ));
  };

  const handleReschedule = (therapistId, newDate, newTime) => {
    console.log(`Rescheduling for ${therapistId} to ${newDate} at ${newTime}`);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="content">
        <Header supervisorName="Supervisor" toggleSidebar={toggleSidebar} />
        <main>
          <div className="therapists-section">
            <h2>Assigned Therapists</h2>
            <div className="therapists-grid">
              {therapists.map(therapist => (
                <TherapistCard
                  key={therapist.id}
                  therapist={therapist}
                  appointments={therapist.appointments}
                  onAddRemark={handleAddRemark}
                  onReschedule={handleReschedule}
                />
              ))}
            </div>
          </div>
          <div className="calendar-section">
            <MonthCalendar appointments={therapists.flatMap(therapist => therapist.appointments)} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
