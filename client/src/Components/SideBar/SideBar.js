import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './style.css'; // Importer le fichier CSS


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/professors">Professors</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/timetable">Timetable</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/absences">Absences</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
