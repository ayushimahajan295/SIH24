import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Edit, UploadCloud, MessageSquare, RefreshCw, ChevronLeft, ChevronRight, Search, BarChart2, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../Assets/app-logo.png'; 

// Header Component
const Header = ({ therapistName }) => (
  <header className="bg-blue-600 text-white p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto mr-3"
        />
        <h1 className="text-2xl font-bold">
          {therapistName}'s Dashboard
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/therapy-dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/appointments" className="hover:underline">
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:underline">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/payment" className="hover:underline">
              Payment
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline flex items-center">
              <i className="fas fa-user-circle mr-1"></i> Profile
            </Link>
          </li>
          <li>
            <Link to="/logout" className="hover:underline">
              Logout
            </Link>
          </li>
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
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <User className="mr-2" size={24} />
          {patient.name}
        </h3>
        <span className="text-sm text-gray-500">ID: {patient.id}</span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Upcoming Appointments:</h4>
        {appointments.map((apt, index) => (
          <div key={index} className="flex items-center text-gray-600 mb-2">
            <Calendar className="mr-2" size={16} />
            <span>{apt.date}</span>
            <Clock className="ml-4 mr-2" size={16} />
            <span>{apt.time}</span>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Add Remark:</h4>
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="2"
          value={newRemark}
          onChange={(e) => setNewRemark(e.target.value)}
          placeholder="Enter your remark here..."
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleAddRemark}
        >
          <MessageSquare className="inline-block mr-2" size={16} />
          Add Remark
        </button>
      </div>

      <div className="mb-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 mr-2"
          onClick={() => setShowReschedule(!showReschedule)}
        >
          <RefreshCw className="inline-block mr-2" size={16} />
          Reschedule
        </button>
        {showReschedule && (
          <div className="mt-2">
            <input
              type="date"
              className="border rounded p-2 mr-2"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            <input
              type="time"
              className="border rounded p-2 mr-2"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={handleReschedule}
            >
              Confirm
            </button>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Upload Resource:</h4>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          value={newResource}
          onChange={(e) => setNewResource(e.target.value)}
          placeholder="Enter resource URL or description"
        />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
          onClick={handleUploadResource}
        >
          <UploadCloud className="inline-block mr-2" size={16} />
          Upload Resource
        </button>
      </div>

      <div>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
          onClick={() => setShowEditSession(!showEditSession)}
        >
          <Edit className="inline-block mr-2" size={16} />
          Edit Session
        </button>
        {showEditSession && (
          <div className="mt-2">
            <textarea
              className="w-full p-2 border rounded mb-2"
              rows="3"
              value={sessionNotes}
              onChange={(e) => setSessionNotes(e.target.value)}
              placeholder="Enter session notes or modifications..."
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={handleEditSession}
            >
              Save Changes
            </button>
          </div>
        )}
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
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-2"><ChevronLeft /></button>
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={nextMonth} className="p-2"><ChevronRight /></button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {calendarDays.map((day, index) => (
          <div key={index} className="text-center p-2">
            {day && (
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto
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
const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen py-6 px-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="flex items-center space-x-2 hover:text-blue-300">
              <BarChart2 size={20} />
              <span>Dashboard Home</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="flex items-center space-x-2 hover:text-blue-300">
              <Calendar size={20} />
              <span>Calendar View</span>
            </Link>
          </li>
          <li>
            <Link to="/patients" className="flex items-center space-x-2 hover:text-blue-300">
              <User size={20} />
              <span>Patient List</span>
            </Link>
          </li>
          <li>
            <Link to="/appointments" className="flex items-center space-x-2 hover:text-blue-300">
              <Clock size={20} />
              <span>Appointments</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full bg-gray-700 text-white rounded-md py-2 px-4 pl-10"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Reports and Analytics</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/reports" className="flex items-center space-x-2 hover:text-blue-300">
              <BarChart2 size={18} />
              <span>Generate Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="flex items-center space-x-2 hover:text-blue-300">
              <BarChart2 size={18} />
              <span>Analytics Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Link to="/profile" className="flex items-center space-x-2 hover:text-blue-300">
          <Settings size={18} />
          <span>Profile Settings</span>
        </Link>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Help and Support</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/faq" className="flex items-center space-x-2 hover:text-blue-300">
              <HelpCircle size={18} />
              <span>FAQ</span>
            </Link>
          </li>
          <li>
            <Link to="/support" className="flex items-center space-x-2 hover:text-blue-300">
              <MessageSquare size={18} />
              <span>Support Ticket</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
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
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex-1">
          <Header therapistName="Dr. Smith" />
          <main className="container mx-auto py-8 px-4">
            <MonthCalendar appointments={patients.flatMap(patient => patient.appointments)} />
            <h2 className="text-2xl font-bold mb-6">Patient Appointments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patients.map(patient => (
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
          </main>
        </div>
      </div>
  );
};

export default TherapistDashboard;