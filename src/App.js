import React from 'react';
import About from './About'
import Resume from './Resume';
import Skills from './Skills';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';


function App() {
var Nav = require('react-bootstrap/Nav');
var Navbar = require("react-bootstrap/Navbar");
var NavDropdown = require("react-bootstrap/NavDropdown");

  return (
    <Router>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">AZ the Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/repos">PROJECT.NAME</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/anthony-zardis-660696114/">LinkedIn</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/Instgram">
              InstaGram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/about" render = { () => <About /> } />
      <Route exact path="/resume" render = { () => <Resume /> } />
      <Route exact path="/skills" render = { () => <Skills /> } />
    </Router>
  );
}

export default App;
