import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
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
<button type="button" class="btn btn-raised btn-primary btn-block m-t-0" data-toggle="modal" href="#cal-new-event" fdprocessedid="v39k2f"> <i class="zmdi zmdi-plus"></i> Events</button>
export default NavBar;
