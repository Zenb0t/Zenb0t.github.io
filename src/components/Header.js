import React from 'react';
import logo from '../img/logoZazen.svg';
import Link from 'react-router-dom/Link';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

//TODO Make it collapsible
const Header = (props) => {

  return (<Navbar bg="light" className="zen-nav" expand="lg">
    <Navbar.Brand href="#home">
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
        <Nav.Link href="#home">
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link to="/about">About</Link>
        </Nav.Link>
        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <Link to="/front">Front End</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            <Link to="/websites">Websites</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            <a href="https://github.com/Zenb0t/">Github</a>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <Link to="/stack">Stack</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}


export default Header;
