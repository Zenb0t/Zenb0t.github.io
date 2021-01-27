import React from 'react';
import logo from '../img/logoZazen.svg';
import Link from 'react-router-dom/Link';

const Navbar = (props) => {


    return (
        <nav className="zen-nav navbar navbar-light navbar-expand-lg">
            <Link to="/" className="navbar text-decoration-none">
                <img
                    src={logo}
                    width="72"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                    loading="lazy" />
                <span>Zazen Code</span>
            </Link>
            
        </nav>
    );
}

export default Navbar;