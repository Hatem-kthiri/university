import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";

const NavBar = () => {
  return (
   // Modifiez le code du Navbar en ajoutant la classe "NavbarContainer"
<Navbar className="Navbar" color="white">
  <Container className="NavbarContainer"> {/* Ajoutez la classe "NavbarContainer" */}
    <Navbar.Brand href="#home">Page's name</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#notifications">Notifications</Nav.Link>
    </Nav>
  </Container>
</Navbar>

  );
};

export default NavBar;
