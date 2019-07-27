import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl
} from "react-bootstrap";
import "../styles/length.css";

const Length = () => {
  return (
    <Fragment>
      {/* <Col md={2}>
        {" "}
        <h1>Length</h1>{" "}
      </Col> */}

      <Col md={6}>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Default
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Default
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* <Col md={2}> </Col> */}
    </Fragment>
  );
};

export default Length;
