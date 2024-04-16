import React, { useState, useEffect } from 'react';

const StudentCourses = () => {
  // State pour stocker la liste des cours
  const [courses, setCourses] = useState([]);

  // Fonction pour charger les cours depuis une API (simulée ici)
  const fetchCourses = async () => {
    // Ici, vous pouvez remplacer cette fonction par un appel à une API réelle
    // qui renvoie la liste des cours de l'étudiant
    const fakeApiResponse = [
      { id: 1, title: 'Mathématiques' },
      { id: 2, title: 'Histoire' },
      { id: 3, title: 'Sciences' },
      // Ajoutez d'autres cours ici
    ];

    setCourses(fakeApiResponse);
  };

  // Utilise useEffect pour charger les cours au chargement du composant
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCourses;
