import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Obaidul Nasir</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/project" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
          <Nav>
          <button className="btn btn-success"><a className="nav-link" rel="noopener noreferrer" href="https://drive.google.com/file/d/1ANCrAAzJK3eoxDYlu03xCaKmNtluT8d5/view?usp=sharing" target="_blank">Resume</a></button>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;