import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">Rafael León</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
        <Nav.Link as={Link} to="/experiences">Experiences</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
