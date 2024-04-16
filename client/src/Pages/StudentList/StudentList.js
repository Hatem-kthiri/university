import React, { useState } from "react";
import "./style.css"

const Students = () => {
  // State pour stocker la liste des étudiants
  const [students, setStudents] = useState([
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", dob: "1998-05-15" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", dob: "1999-07-20" },
    // Ajoutez plus d'étudiants si nécessaire
  ]);

  // State pour gérer le formulaire d'ajout d'étudiant
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  // Fonction pour ajouter un nouvel étudiant
  const addStudent = () => {
    // Générer un ID unique pour le nouvel étudiant
    const id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    // Ajouter le nouvel étudiant à la liste
    setStudents([...students, { id, ...newStudent }]);
    // Réinitialiser le formulaire
    setNewStudent({ firstName: "", lastName: "", email: "", dob: "" });
  };

  // Fonction pour supprimer un étudiant
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h2>Students List</h2>
      {/* Formulaire d'ajout d'étudiant */}
      <form onSubmit={(e) => { e.preventDefault(); addStudent(); }}>
        <input type="text" placeholder="First Name" value={newStudent.firstName} onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })} />
        <input type="text" placeholder="Last Name" value={newStudent.lastName} onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })} />
        <input type="email" placeholder="Email" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
        <input type="date" placeholder="Date of Birth" value={newStudent.dob} onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })} />
        <button type="submit">Add Student</button>
      </form>
      
      {/* Liste des étudiants */}
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} - {student.email} - {student.dob}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
