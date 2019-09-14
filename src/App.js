import React from 'react';
import Home from './Home';
import About from './About'
import Resume from './Resume';
import Skills from './Skills';
import Contact from './Contact';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom';
import Connect4 from './Connect4.png';
import marvel from './marvel.png';

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
            <Nav.Link href="https://www.linkedin.com/in/anthony-zardis-660696114/">LinkedIn</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/Instgram">
              InstaGram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/home" render = { () => <Home /> } />
      <Route exact path="/about" render = { () => <About /> } />
      <Route exact path="/resume" render = { () => <Resume /> } />
      <Route exact path="/skills" render = { () => <Skills /> } />
      <Route exact path="/contact" render = { () => <Contact /> } />
    <div className="home-page-projects">
      <div className="connect-4">
        <a href="https://aqueous-dawn-50169.herokuapp.com/">Connect 4</a><br/>
        <img src={Connect4} alt="connect4" 
                  style={{width: 600,
                          height: 350 }} />
      </div>
      <div className="marvel">
        <a href="https://mighty-forest-98512.herokuapp.com/">Hero Collection</a><br/>
        <img src={marvel} alt="marvel-app" 
                  style={{width: 600,
                          height: 350 }} />
      </div>
    </div>
    </Router>
  );
}

export default App;
