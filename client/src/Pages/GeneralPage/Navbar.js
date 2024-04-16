import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav.Link href="#about-us">About us</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <NavDropdown href ="#Departments" title="Departments" id="basic-nav-dropdown">
          <NavDropdown.Item href="#computer-science">
          computer-science
          </NavDropdown.Item>
          <NavDropdown.Item href="#english-for-business">
          english-for-business
          </NavDropdown.Item>
          <NavDropdown.Item href="#something">something</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
