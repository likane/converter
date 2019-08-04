import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";
import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      <Nav defaultActiveKey="/home" className="flex-column sideBarNav">
        <Nav.Link href="/" className="menuOption">
          Home
        </Nav.Link>
        <Nav.Link href="/length" className="menuOption">
          Length
        </Nav.Link>
        <Nav.Link href="/temperature" className="menuOption">
          Temperature
        </Nav.Link>
        <Nav.Link href="/weight" className="menuOption">
          Weight
        </Nav.Link>
        <Nav.Link href="/volume" className="menuOption">
          Volume
        </Nav.Link>
      </Nav>

      {/* <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </Fragment>
  );
};

export default Sidebar;
