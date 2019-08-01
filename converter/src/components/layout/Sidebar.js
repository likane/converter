import React, { Fragment } from "react";
import { Button, Nav, Col } from "react-bootstrap";
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
    </Fragment>
  );
};

export default Sidebar;
