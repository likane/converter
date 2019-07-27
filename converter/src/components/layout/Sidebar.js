import React, { Fragment } from "react";
import { Button, Nav, Col } from "react-bootstrap";
import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      {/* <!-- Sidebar --> */}
      <Col md={2}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/length">Length</Nav.Link>
          <Nav.Link href="/temperature">temperature</Nav.Link>
          <Nav.Link href="/weight">Weight</Nav.Link>
          <Nav.Link href="/volume">Volume</Nav.Link>
          {/* <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link> */}
        </Nav>
      </Col>
    </Fragment>
  );
};

export default Sidebar;
