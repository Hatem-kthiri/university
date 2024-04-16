import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  // Définir l'état local pour chaque élément de la barre latérale
  const [showTeachers, setShowTeachers] = useState(false);
  const [showStudents, setShowStudents] = useState(false);
  const [showGroups, setShowGroups] = useState(false);

  // Fonction pour basculer l'état local des éléments de la barre latérale
  const toggleShowTeachers = () => {
    setShowTeachers(!showTeachers);
  };

  const toggleShowStudents = () => {
    setShowStudents(!showStudents);
  };

  const toggleShowGroups = () => {
    setShowGroups(!showGroups);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="Student"onClick={toggleShowStudents}>
          Students {showStudents ? "-" : "+"}
          {showStudents && (
            <ul>
              <li><Link to="/students/add">Add Students</Link></li>
              <li><Link to="/students/all">All Students</Link></li>
            </ul>
          )}
        </li>
        <li  className="Teachers" onClick={toggleShowTeachers}>
        Professors {showTeachers ? "-" : "+"}
          {showTeachers && (
            <ul>
              <li><Link to="/teachers/add">Add Professors</Link></li>
              <li><Link to="/teachers/all">All Professors</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/subjects">Subjects</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/timetable">Timetable</Link>
        </li>
        <li  className="groups" onClick={toggleShowGroups}>
          Groups {showGroups ? "-" : "+"}
          {showGroups && (
            <ul>
              <li><Link to="/groups/add">Add Groups</Link></li>
              <li><Link to="/groups/all">All Groups</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/absences">Absences</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
