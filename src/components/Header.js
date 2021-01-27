import React from 'react';
import logo from '../img/logoZazen.svg';
import Link from 'react-router-dom/Link';
import Resume from '../files/resume.pdf'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

//TODO Refactor Navbar
const Header = (props) => {

  return (<Navbar bg="light" className="zen-nav" expand="lg">
    <Navbar.Brand as="span">
      <Link to="/" className="text-decoration-none">
        <img
          src={logo}
          width="72"
          height="30"
          className="d-inline-block align-top"
          alt="logo" />
        <span>Zazen Code</span>
      </Link>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="col-lg-4 mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/front">Front End</Link>
          </NavDropdown.Item>
          <NavDropdown.Item >
            <Link to="/esss">Web Projects</Link>
          </NavDropdown.Item>
          <NavDropdown.Item >
            <a href="https://github.com/Zenb0t/">Backend</a>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/stack">Stack</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={Resume} target="_blank">Resume</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}


export default Header;
