import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './ProgressReport.css';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ProgressReport = () => {
  const sessionData = [
    { 
      session: 1, 
      task: 'Speech Fluency', 
      performance: 8, 
      tasksGiven: ['Reading Aloud', 'Pausing Techniques'],
      observations: 'Improved fluency and fewer pauses during reading.',
    },
    { 
      session: 2, 
      task: 'Voice Modulation', 
      performance: 7, 
      tasksGiven: ['Vocal Exercises', 'Pitch Variation'], 
      observations: 'Good pitch variation but needs to work on volume control.' 
    },
    { 
      session: 3, 
      task: 'Articulation', 
      performance: 6, 
      tasksGiven: ['Tongue Twisters', 'Pronunciation Drills'], 
      observations: 'Difficulty with certain consonants; practice recommended.' 
    },
    { 
      session: 4, 
      task: 'Language Development', 
      performance: 9, 
      tasksGiven: ['Sentence Formation', 'Vocabulary Building'], 
      observations: 'Excellent progress, shows creativity in sentence formation.' 
    },
    { 
      session: 5, 
      task: 'Phonological Awareness', 
      performance: 8, 
      tasksGiven: ['Rhyming Words', 'Sound Identification'], 
      observations: 'Consistent efforts, good understanding of rhyming patterns.' 
    },
  ];

  // Data for the bar chart
  const barData = {
    labels: sessionData.map((item) => `Session ${item.session}`),
    datasets: [
      {
        label: 'Performance Rating',
        data: sessionData.map((item) => item.performance),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: sessionData.map((item) => item.task),
    datasets: [
      {
        label: 'Task Completion',
        data: sessionData.map((item) => item.performance),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patient Progress Over Last 5 Sessions',
      },
    },
  };

  return (
    <div className="progress-report-container">
      <h2>Progress Report</h2>
      <div className="report-content">
        <div className="progress-report-details">
          {sessionData.map((item, index) => (
            <div key={index} className="session-detail">
              <h4>Session {item.session}: {item.task}</h4>
              <p><strong>Performance:</strong> {item.performance}/10</p>
              <p><strong>Tasks Given:</strong> {item.tasksGiven.join(', ')}</p>
              <p><strong>Observations:</strong> {item.observations}</p>
            </div>
          ))}
        </div>
        <div className="progress-charts">
          <div className="chart-container">
            <Bar data={barData} options={options} />
          </div>
          <div className="chart-container">
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'bottom' }}}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressReport;
