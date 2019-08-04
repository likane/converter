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
// import Select from "react-select";

import "../styles/length.css";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];

class Length extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "Meter",
      toUnit: "Mile",
      fromValue: 0,
      toValue: 0,
      errorTrigger: false,
      msg: "Error",
      convertedValue: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.convertValues = this.convertValues.bind(this);
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
      // console.log("handleChange Hit");
    });
  }

  convertValues() {
    console.log("convertValues hit");
    let startingUnit = this.state.fromUnit;
    let endUnit = this.state.toUnit;
    let startValue = this.state.fromValue;
    console.log("starting value = " + this.state.fromUnit);
    console.log("end unit = " + this.state.toUnit);
    console.log("start Value = " + this.state.fromValue);

    //if units are the same
    if (startingUnit === endUnit) {
      console.log("convertValues hit: same units");
      //send warning
      // errorTrigger = true;
      this.setState({
        errorTrigger: true,
        msg: "Please select different units."
      });
    } else {
      console.log("convertValues hit: different units");
      //units are different:
      //set cases
      switch (startingUnit) {
        case "Meter":
          switch (endUnit) {
            case "Kilometer":
              //meters to kilometers
              this.setState({
                toValue: this.state.fromValue * 0.001
              });
              console.log("toValue = " + this.state.toValue);
              break;
            case "Centimeter":
              //meters to centimeter

              this.setState({
                toValue: startValue * 100
              });
              break;
            case "Millimeter":
              //meters to millimeters

              this.setState({
                toValue: startValue * 1000
              });
              break;
            case "Micrometer":
              this.setState({
                toValue: startValue * 1000000
              });
              //meters to microometers
              break;
            case "Nanometer":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 1000000000
              });
              break;
            case "Mile":
              //meters to mile

              this.setState({
                toValue: startValue * 0.0006213689
              });
              break;
            case "Yard":
              //meters to Yard

              this.setState({
                toValue: startValue * 1.0936132983
              });
              break;
            case "Foot":
              //meters to foot

              this.setState({
                toValue: startValue * 3.280839895
              });
              break;
            case "Inch":
              //meters to Inch

              this.setState({
                toValue: startValue * 39.37007874
              });
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
    console.log("handlesubmit hit");
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
                <form>
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
                      </select>

                      {/* <Select
                        name="fromUnit"
                        defaultValue={options[1]}
                        value={this.state.fromUnit}
                        onChange={this.handleChange}
                        options={options}
                      /> */}
                    </Col>
                    <Col md={2}>
                      <h3>To</h3>
                    </Col>
                    <Col md={3}>
                      <select
                        name="toUnit"
                        value={this.state.toUnit}
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
                  </Row>

                  <Row className="calculateRow">
                    <Col md={6}>
                      <Button
                        variant="outline-primary"
                        onClick={this.handleSubmit}
                        className="calculateBtn"
                      >
                        Calculate
                      </Button>
                    </Col>
                    <Col md={6}>
                      <div className="result">
                        {this.state.errorTrigger ? (
                          <Badge variant="danger">
                            <h5>{this.state.msg}</h5>
                          </Badge>
                        ) : (
                          <Badge variant="success">
                            <h3>{this.state.toValue}</h3>
                          </Badge>
                        )}
                      </div>
                    </Col>
                  </Row>
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
