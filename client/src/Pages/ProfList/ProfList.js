import React, { useState } from "react";

const Professors = () => {
  // État local pour la liste des professeurs
  const [professors, setProfessors] = useState([
    { id: 1, name: "John Doe", subject: "Mathematics" },
    { id: 2, name: "Jane Smith", subject: "Science" },
    { id: 3, name: "Michael Johnson", subject: "History" },
  ]);

  // État local pour les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
  });

  // Fonction pour mettre à jour les données du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour ajouter un professeur
  const addProfessor = () => {
    const newProfessor = {
      id: professors.length + 1,
      name: formData.name,
      subject: formData.subject,
    };
    setProfessors([...professors, newProfessor]);
    setFormData({ name: "", subject: "" });
  };

  // Fonction pour supprimer un professeur
  const deleteProfessor = (id) => {
    setProfessors(professors.filter((professor) => professor.id !== id));
  };

  return (
    <div>
      <h1>Professors</h1>
      <div>
        <h2>Add Professor</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <button onClick={addProfessor}>Add</button>
      </div>
      <div>
        <h2>Professor List</h2>
        <ul>
          {professors.map((professor) => (
            <li key={professor.id}>
              {professor.name} - {professor.subject}
              <button onClick={() => deleteProfessor(professor.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Professors;
