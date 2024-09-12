import React, { useState, useEffect } from 'react';
import { User, Calendar,Menu,ChevronLeft,ChevronRight, Clock, Edit, UploadCloud, MessageSquare, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/app-logo.png'; 
import "./TherapistDashboard.css"

// Header Component
const Header = ({ therapistName, toggleSidebar }) => (
  <header className="header">
    <div className="container">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          <Menu size={24} />
        </button>
        <img src={logo} alt="Logo" className="logo" />
        <h1>{therapistName}'s Dashboard</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);




// PatientAppointmentCard Component

const PatientAppointmentCard = ({ 
  patient, 
  appointments, 
  onAddRemark, 
  onReschedule, 
  onUploadResource, 
  onEditSession 
}) => {
  const [newRemark, setNewRemark] = useState('');
  const [showReschedule, setShowReschedule] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newResource, setNewResource] = useState('');
  const [showEditSession, setShowEditSession] = useState(false);
  const [sessionNotes, setSessionNotes] = useState('');

  const handleAddRemark = () => {
    if (newRemark.trim()) {
      onAddRemark(patient.id, newRemark);
      setNewRemark('');
    }
  };

  const handleReschedule = () => {
    if (newDate && newTime) {
      onReschedule(patient.id, newDate, newTime);
      setShowReschedule(false);
      setNewDate('');
      setNewTime('');
    }
  };

  const handleUploadResource = () => {
    if (newResource.trim()) {
      onUploadResource(patient.id, newResource);
      setNewResource('');
    }
  };

  const handleEditSession = () => {
    if (sessionNotes.trim()) {
      onEditSession(patient.id, sessionNotes);
      setShowEditSession(false);
      setSessionNotes('');
    }
  };

  return (
    <div className="patient-card">
      <div className="patient-header">
        <User className="user-icon" size={24} />
        <h3>{patient.name}</h3>
        <span>ID: {patient.id}</span>
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
        <button onClick={() => setShowEditSession(!showEditSession)} className="edit-session">
          <Edit size={16} />
          Edit Session
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

      {showEditSession && (
        <div className="edit-session-form">
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            placeholder="Enter session notes..."
          ></textarea>
          <button onClick={handleEditSession} className="save">Save Changes</button>
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
        <li><Link to="/patients">Patient List</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </nav>
    <div className="search">
      <input type="text" placeholder="Search patients..." />
    </div>
  </div>
);
// Main TherapistDashboard Component
const TherapistDashboard = () => {
  const [patients, setPatients] = useState([
    {
      id: '001',
      name: 'John Doe',
      appointments: [
        { date: '2024-09-07', time: '10:00 AM' },
        { date: '2024-09-14', time: '11:00 AM' }
      ],
      remarks: [],
      resources: []
    },
    {
      id: '002',
      name: 'Jane Smith',
      appointments: [
        { date: '2024-09-08', time: '2:00 PM' }
      ],
      remarks: [],
      resources: []
    },
    {
      id: '003',
      name: 'Bob Johnson',
      appointments: [
        { date: '2024-09-09', time: '3:30 PM' },
        { date: '2024-09-16', time: '3:30 PM' }
      ],
      remarks: [],
      resources: []
    }
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Flatten all appointments into a single array for the calendar
  const allAppointments = patients.flatMap(patient => patient.appointments);


  const handleAddRemark = (patientId, remark) => {
    setPatients(prevPatients => prevPatients.map(patient => 
      patient.id === patientId 
        ? { ...patient, remarks: [...patient.remarks, remark] }
        : patient
    ));
  };

  const handleReschedule = (patientId, newDate, newTime) => {
    setPatients(prevPatients => prevPatients.map(patient => 
      patient.id === patientId 
        ? { 
            ...patient, 
            appointments: [
              ...patient.appointments.slice(1),
              { date: newDate, time: newTime }
            ]
          }
        : patient
    ));
  };

  const handleUploadResource = (patientId, resource) => {
    setPatients(prevPatients => prevPatients.map(patient => 
      patient.id === patientId 
        ? { ...patient, resources: [...patient.resources, resource] }
        : patient
    ));
  };

  const handleEditSession = (patientId, sessionNotes) => {
    // For this example, we'll just add the session notes to the remarks
    // In a real application, you might want to handle this differently
    setPatients(prevPatients => prevPatients.map(patient => 
      patient.id === patientId 
        ? { ...patient, remarks: [...patient.remarks, `Session notes: ${sessionNotes}`] }
        : patient
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header therapistName="Dr. Smith" toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/4 lg:pr-4">
                <h2 className="text-2xl font-bold mb-6">Patient Appointments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {patients.slice(0, 4).map(patient => (
                    <PatientAppointmentCard
                      key={patient.id}
                      patient={patient}
                      appointments={patient.appointments}
                      onAddRemark={handleAddRemark}
                      onReschedule={handleReschedule}
                      onUploadResource={handleUploadResource}
                      onEditSession={handleEditSession}
                    />
                  ))}
                </div>
              </div>
              <div className="lg:w-1/4 mt-6 lg:mt-0">
                <MonthCalendar appointments={patients.flatMap(patient => patient.appointments)} />
              </div>
            </div>
            {patients.length > 4 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">More Patients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                  {patients.slice(4).map(patient => (
                    <PatientAppointmentCard
                      key={patient.id}
                      patient={patient}
                      appointments={patient.appointments}
                      onAddRemark={handleAddRemark}
                      onReschedule={handleReschedule}
                      onUploadResource={handleUploadResource}
                      onEditSession={handleEditSession}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};


export default TherapistDashboard;