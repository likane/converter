import React, { Fragment } from "react";
import { Button, Nav, Col } from "react-bootstrap";
import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      {/* <!-- Sidebar --> */}
      <Col md={2}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </Col>
    </Fragment>
  );
};

export default Sidebar;
