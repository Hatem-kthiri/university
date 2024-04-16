import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./style.css";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <header>
          <h1>App Name</h1>
          <p>
            Bienvenue sur notre plateforme de gestion scolaire, dédiée à
            simplifier et optimiser l'expérience académique pour les étudiants,
            les enseignants et l'administration.
          </p>
        </header>
        <section id="about-us" className="about-us">
          <h1>About us </h1>
          <p>
            Nous sommes dévoués à fournir une plateforme intuitive et efficace
            qui répond aux besoins spécifiques de notre communauté
            universitaire. Avec notre application, vous pouvez gérer tous les
            aspects de votre parcours académique de manière simple et
            centralisée.
          </p>
        </section>
        <section id="features" className="features">
          <h1>Features </h1>
          <ul>
            <li>Gestion des cours et des horaires</li>
            <li>Suivi des notes et des performances académiques</li>
            <li>
              Communication facilitée entre les étudiants, les enseignants et
              l'administration
            </li>
            <li>Accès rapide aux ressources pédagogiques et administratives</li>
            <li>
              Tableaux de bord personnalisés pour les différents utilisateurs
            </li>
          </ul>
        </section>

        <section id="Departments" className="Departments">
            <h1>Departments</h1>
          <h4>Département Informatique</h4>
          <p>
            Nous sommes dévoués à fournir une plateforme intuitive et efficace
            qui répond aux besoins spécifiques de notre communauté
            universitaire. Avec notre application, vous pouvez gérer tous les
            aspects de votre parcours académique de manière simple et
            centralisée.
          </p>
          <h4>Département Anglais d'affaire</h4>
          <p>
            Nous sommes dévoués à fournir une plateforme intuitive et efficace
            qui répond aux besoins spécifiques de notre communauté
            universitaire. Avec notre application, vous pouvez gérer tous les
            aspects de votre parcours académique de manière simple et
            centralisée.
          </p>
          <h4>Département Multimédia</h4>
          <p>
            Nous sommes dévoués à fournir une plateforme intuitive et efficace
            qui répond aux besoins spécifiques de notre communauté
            universitaire. Avec notre application, vous pouvez gérer tous les
            aspects de votre parcours académique de manière simple et
            centralisée.
          </p>
        </section>
        <section className="get-started">
          <h2>Commencez dès maintenant :</h2>
          <p>
            Rejoignez-nous dès aujourd'hui et découvrez comment notre solution
            de gestion scolaire peut vous aider à atteindre vos objectifs
            académiques avec succès.
          </p>
          <Link to={`/login?profile=Admin`} className="get-started-button">Créer un compte</Link>
        </section>
        <footer>
          <p>
            Gestion Scolaire de l'Université &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
