import React from 'react';
import Home from './Home';
import About from './About'
import Resume from './Resume';
import Skills from './Skills';
import Contact from './Contact';
//import axios from 'axios';
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

// componentDidMount = () => {
//   axios.get('https://github.com/206Tony?tab=repositories')
//     .then((res) => {
//       const themes = res.data.results
//       this.setState({themes}); 
//     console.log("Running this many times...")
//     })
//   }

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
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/repos">PROJECT.NAME</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/anthony-zardis/">LinkedIn</Nav.Link>
            <Nav.Link href="https://www.github.com/206tony/">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" render = { () => <Home /> } />
      <Route exact path="/about" render = { () => <About /> } />
      <Route exact path="/resume" render = { () => <Resume /> } />
      <Route exact path="/skills" render = { () => <Skills /> } />
      <Route exact path="/contact" render = { () => <Contact /> } />
    </Router>
  );
}

export default App;
