import React, { Fragment } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  InputGroup,
  Badge,
  FormControl
} from "react-bootstrap";
import "../styles/length.css";

class Length extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "meters",
      toUnit: "miles",
      fromValue: 0,
      toValue: 0,
      errorTrigger: false,
      msg: "Error",
      convertedValue: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      // fromUnit: event.target.value,
      // toUnit: event.target.value,
      // fromValue: event.target.value,
      // toValue: event.target.value
      [name]: value
    });
  }

  convertValues() {
    let startingUnit = this.state.fromUnit;
    let endUnit = this.state.toUnit;
    let startValue = this.state.fromValue;
    // let endValue = this.state.toValue;
    //if units are the same
    if (startingUnit === endUnit) {
      //send warning
      // errorTrigger = true;
      this.setState({
        errorTrigger: true,
        msg: "Please select different units."
      });
    } else {
      //units are different
      //set cases
      switch (startingUnit) {
        case "Meter":
          switch (endUnit) {
            case "Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.001
              });
              // endValue = startValue * 0.001;
              break;
            case "Centimeter":
              //meters to centimeter
              //endValue = startValue * 100;
              this.setState({
                toValue: startValue * 100
              });
              break;
            case "Millimeter":
              //meters to millimeters
              //endValue = startValue * 1000;
              this.setState({
                toValue: startValue * 1000
              });
              break;
            case "Micrometer":
              //endValue = startValue * 1000000;
              this.setState({
                toValue: startValue * 1000000
              });
              //meters to microometers
              break;
            case "Nanometer":
              //meters to nanoometers
              //endValue = startValue * 1000000000;
              this.setState({
                toValue: startValue * 1000000000
              });
              break;
            case "Mile":
              //meters to mile
              //endValue = startValue * 0.0006213689;
              this.setState({
                toValue: startValue * 0.0006213689
              });
              break;
            case "Yard":
              //meters to Yard
              //endValue = startValue * 1.0936132983;
              this.setState({
                toValue: startValue * 1.0936132983
              });
              break;
            case "Foot":
              //meters to foot
              // endValue = startValue * 3.280839895;
              this.setState({
                toValue: startValue * 3.280839895
              });
              break;
            case "Inch":
              //meters to Inch
              //endValue = startValue * 39.37007874;
              this.setState({
                toValue: startValue * 39.37007874
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Kilometer":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              // endValue = startValue * 1000;
              break;
            case "Centimeter":
              //Kilometer to centimeter
              // endValue = startValue * 100000;
              break;
            case "Millimeter":
              //Kilometer to millimeter
              // endValue = startValue * 1000000;
              break;
            case "Micrometer":
              //Kilometer to microoKilometer
              // endValue = startValue * 10000000000;
              break;
            case "Nanometer":
              //Kilometer to nanooKilometer
              // endValue = startValue * 10000000000000;
              break;
            case "Mile":
              //Kilometer to mile
              // endValue = startValue * 0.6213688756;
              break;
            case "Yard":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Centimeter":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              break;
            case "Kilometer":
              //Kilometer to centimeter
              break;
            case "Millimeter":
              //Kilometer to millimeter
              break;
            case "Micrometer":
              //Kilometer to microoKilometer
              break;
            case "Nanometer":
              //Kilometer to nanooKilometer
              break;
            case "Mile":
              //Kilometer to mile
              break;
            case "Yard":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Millimeter":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              break;
            case "Centimeter":
              //Kilometer to centimeter
              break;
            case "Kilometer":
              //Kilometer to millimeter
              break;
            case "Micrometer":
              //Kilometer to microoKilometer
              break;
            case "Nanometer":
              //Kilometer to nanooKilometer
              break;
            case "Mile":
              //Kilometer to mile
              break;
            case "Yard":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Micrometer":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              break;
            case "Centimeter":
              //Kilometer to centimeter
              break;
            case "Millimeter":
              //Kilometer to millimeter
              break;
            case "Kilometer":
              //Kilometer to microoKilometer
              break;
            case "Nanometer":
              //Kilometer to nanooKilometer
              break;
            case "Mile":
              //Kilometer to mile
              break;
            case "Yard":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Nanometer":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              break;
            case "Centimeter":
              //Kilometer to centimeter
              break;
            case "Millimeter":
              //Kilometer to millimeter
              break;
            case "Micrometer":
              //Kilometer to microoKilometer
              break;
            case "Kilometer":
              //Kilometer to nanooKilometer
              break;
            case "Mile":
              //Kilometer to mile
              break;
            case "Yard":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Mile":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              break;
            case "Centimeter":
              //Kilometer to centimeter
              break;
            case "Millimeter":
              //Kilometer to millimeter
              break;
            case "Micrometer":
              //Kilometer to microoKilometer
              break;
            case "Nanometer":
              //Kilometer to nanooKilometer
              break;
            case "Kilometer":
              //Kilometer to mile
              break;
            case "Yard":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Yard":
          switch (endUnit) {
            case "Meter":
              //Kilometer to meter
              break;
            case "Centimeter":
              //Kilometer to centimeter
              break;
            case "Millimeter":
              //Kilometer to millimeter
              break;
            case "Micrometer":
              //Kilometer to microoKilometer
              break;
            case "Nanometer":
              //Kilometer to nanooKilometer
              break;
            case "Mile":
              //Kilometer to mile
              break;
            case "Kilometer":
              //Kilometer to Yard
              break;
            case "Foot":
              //Kilometer to foot
              break;
            case "Inch":
              //Kilometer to Inch
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        default:
          console.log("default of fromValue reached");
      }
    }
  }

  handleSubmit(event) {
    // alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();

    //add user input checks

    //calculate conversions
    this.convertValues();
  }

  render() {
    return (
      <Fragment>
        <Row className="lengthFragment">
          <Col md={1} />
          <Col md={10}>
            <Card>
              <Card.Header>Length Converter</Card.Header>

              <Card.Body>
                <form onSubmit={this.handleSubmit}>
                  {/* <Card.Title>Special title treatment</Card.Title> */}
                  <Row>
                    <Col md={4}>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-default">
                            From
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          name="fromValue"
                          value={this.state.fromValue}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                    <Col md={3}>
                      <select
                        name="fromUnit"
                        value={this.state.fromUnit}
                        onChange={this.handleChange}
                      >
                        <option value="Meter">Meter</option>
                        <option value="Kilometer">Kilometer</option>
                        <option value="Centimeter">Centimeter</option>
                        <option value="Millimeter">Millimeter</option>
                        <option value="Micrometer">Micrometer</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Mile">Mile</option>
                        <option value="Yard">Yard</option>
                        <option value="Foot">Foot</option>
                        <option value="Inch">Inch</option>
                        {/* <option value="Centimeter">Centimeter</option>
                        <option value="Millimeter">Millimeter</option> */}
                      </select>
                    </Col>
                    <Col md={2}>
                      <h3>To</h3>
                    </Col>
                    <Col md={3}>
                      <select
                        name="toUnit"
                        value={this.state.toValue}
                        onChange={this.handleChange}
                      >
                        <option value="Meter">Meter</option>
                        <option value="Kilometer">Kilometer</option>
                        <option value="Centimeter">Centimeter</option>
                        <option value="Millimeter">Millimeter</option>
                        <option value="Micrometer">Micrometer</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Mile">Mile</option>
                        <option value="Yard">Yard</option>
                        <option value="Foot">Foot</option>
                        <option value="Inch">Inch</option>
                      </select>
                      {/* <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-default">
                            To
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                          name="toValue"
                          value={this.state.toValue}
                          onChange={this.handleChange}
                        />
                      </InputGroup> */}
                    </Col>
                    {/* <Col md={4}>
                    {errorTrigger ? (
                          <Badge variant="danger"> {this.state.msg} </Badge>
                        ) : (
                          <Badge variant="success">
                            {this.state.convertedValue}
                          </Badge>
                        )}
                    </Col> */}
                  </Row>

                  {/* <Row>
                    <Col md={5}>
                      <select
                        name="fromUnit"
                        value={this.state.fromUnit}
                        onChange={this.handleChange}
                      >
                        <option value="Meter">Meter</option>
                        <option value="Kilometer">Kilometer</option>
                        <option value="Centimeter">Centimeter</option>
                        <option value="Millimeter">Millimeter</option>
                        <option value="Micrometer">Micrometer</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Mile">Mile</option>
                        <option value="Yard">Yard</option>
                        <option value="Foot">Foot</option>
                        <option value="Inch">Inch</option>
                        {/* <option value="Centimeter">Centimeter</option>
                        <option value="Millimeter">Millimeter</option> */}
                  {/* </select>
                    </Col>
                    <Col md={2} />
                    <Col md={5}>
                      <select
                        name="toUnit"
                        value={this.state.toValue}
                        onChange={this.handleChange}
                      >
                        <option value="Meter">Meter</option>
                        <option value="Kilometer">Kilometer</option>
                        <option value="Centimeter">Centimeter</option>
                        <option value="Millimeter">Millimeter</option>
                        <option value="Micrometer">Micrometer</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Mile">Mile</option>
                        <option value="Yard">Yard</option>
                        <option value="Foot">Foot</option>
                        <option value="Inch">Inch</option>
                      </select>
                    </Col>
                  </Row> */}

                  <Row className="calculateRow">
                    <Col md={6}>
                      <Button
                        variant="outline-primary"
                        onClick={this.submitChange}
                      >
                        Calculate
                      </Button>
                    </Col>
                    <Col md={6}>
                      <div>
                        {this.state.errorTrigger ? (
                          <Badge variant="danger"> {this.state.msg} </Badge>
                        ) : (
                          <Badge variant="success">
                            {this.state.convertedValue}
                          </Badge>
                        )}
                      </div>
                    </Col>
                  </Row>

                  {/* </Row> */}
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} />
        </Row>
      </Fragment>
    );
  }
}

export default Length;
