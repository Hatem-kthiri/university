import React, { useState } from 'react';

// Component for displaying student grades
const StudentGrades = ({ grades }) => {
  return (
    <div>
      <h2>Notes des étudiants :</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            {grade.studentName} : {grade.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main component for the school management app
const SchoolManagementApp = () => {
  const [department, setDepartment] = useState('');
  const [group, setGroup] = useState('');
  const [subject, setSubject] = useState('');
  const [grades, setGrades] = useState([]);

  // Function to handle adding grades
  const handleAddGrade = () => {
    // Assuming grades are added from backend API
    // Here we'll just update the grades state for demonstration
    const newGrade = {
      studentName: 'John Doe', // Sample student name
      grade: 85, // Sample grade
    };
    setGrades([...grades, newGrade]);
  };

  return (
    <div>
      <h1>Gestion Scolaire</h1>
      <div>
        <label>
          Département :
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Groupe :
          <input
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Matière :
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Notes:
          <input
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleAddGrade}>Ajouter Note</button>
      <StudentGrades grades={grades} />
    </div>
  );
};

export default SchoolManagementApp;
