import React, { Component } from 'react';
import logo from '../img/logoZazen.svg';
import Link from 'react-router-dom/Link';


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="72"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          Zazen Code</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-lg-4 ml-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
              </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/about">About</Link>
              </Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/react">React</Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/websites">Websites</Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/github">Github</Link>
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Link to="/stack">Stack</Link>
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> );
    }
}
 
export default Header;
