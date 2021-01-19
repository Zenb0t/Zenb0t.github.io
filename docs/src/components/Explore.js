import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Collapse } from 'react-bootstrap';

import SearchBar from "./SearchBar"


///Example links and resources:
///https://en.wikipedia.org/wiki/Bahia
///https://dribbble.com/shots/10474951-Creative-Travel-Website-Design
///https://dribbble.com/shots/12003517-Ecotourism-Website-Interactions
const Explore = (props) => {

    return (<div>
        <ExpNavBar />
        <h1>This is the explore section</h1>
    </div>);
}


export default Explore;

// Navbar

const ExpNavBar = (props) => {
    const [keyword,setKeyword] = useState("");
    return <Navbar bg="white" expand="md">
        <Navbar.Brand href="#home" className="explore-brand">Explore Bahia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <SearchBar setKeyword={setKeyword} keyword={keyword} />
            <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#english">English</NavDropdown.Item>
                <NavDropdown.Item href="#portugues">Portuguese</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
    </Navbar>
}

function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Collapse in={open}>
                <div id="collapse-search">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
          </div>
            </Collapse>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-search"
                aria-expanded={open}
            >
                click
        </Button>

        </>
    );
}

//Main content with hero

//