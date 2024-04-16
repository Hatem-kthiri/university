import React, { useState } from "react";

const CourseInterface = () => {
  const [subject, setSubject] = useState("");
  const [group, setGroup] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseTime, setCourseTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrer le cours dans la base de données ou effectuer d'autres actions
    console.log("Cours ajouté :", { subject, group, courseName, courseTime });
    // Réinitialiser les champs du formulaire après la soumission
    setSubject("");
    setGroup("");
    setCourseName("");
    setCourseTime("");
  };

  return (
    <div>
      <h2>Ajouter un nouveau cours</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Matière :</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="group">Groupe :</label>
          <input
            type="text"
            id="group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseName">Nom du cours :</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseTime">Heure du cours :</label>
          <input
            type="text"
            id="courseTime"
            value={courseTime}
            onChange={(e) => setCourseTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter le cours</button>
      </form>
    </div>
  );
};

export default CourseInterface;
