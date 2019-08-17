import React, { Fragment } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import "../../styles/landing.css";

const Landing = () => {
  return (
    <Fragment>
      {/* <!-- landing --> */}
      <div className="landingBody">
        <Col md={12}>
          <Row className="landingRow">
            <Col md={6}>
              <Card className="landingCard">
                <Card.Body>
                  <Button variant="primary" href="/Volume">
                    <h4>Volume Conversion</h4>
                  </Button>

                  <Card.Subtitle className="mb-2 text-muted">
                    Example: Liter to Milliliter
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="landingCard">
                <Card.Body>
                  <Button variant="primary" href="/Weight">
                    <h4>Weight Conversion</h4>
                  </Button>
                  {/* <Card.Title>Weigth Conversion</Card.Title> */}
                  <Card.Subtitle className="mb-2 text-muted">
                    Example: Kilograms to Grams
                  </Card.Subtitle>
                  {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="landingRow">
            <Col md={4}>
              <Card className="landingCard">
                <Card.Body>
                  <Button variant="primary" href="/Area">
                    <h4>Area Conversion</h4>
                  </Button>
                  {/* <Card.Title>Area Conversion</Card.Title> */}
                  <Card.Subtitle className="mb-2 text-muted">
                    Example: Acre to Hectar
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="landingCard">
                <Card.Body>
                  <Button variant="primary" href="/Length">
                    <h4>Length Conversion</h4>
                  </Button>
                  {/* <Card.Title>Length Conversion</Card.Title> */}
                  <Card.Subtitle className="mb-2 text-muted">
                    Example: Meter to Yard
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="landingCard">
                <Card.Body>
                  <Button variant="primary" href="/Temperature">
                    <h4>Temperature Conversion</h4>
                  </Button>
                  {/* <Card.Title>Temperature Conversion</Card.Title> */}
                  <Card.Subtitle className="mb-2 text-muted">
                    Example: Fahrenheit to Celsius
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    </Fragment>
  );
};

export default Landing;
