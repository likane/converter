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
//import Select from "react-select";

import Ad from "./Ad.js";
import "../styles/form.css";

// const unitOptions = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "Celsius",
      toUnit: "Kelvin",
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

  validateInput() {
    //isNaN(123) ->false
    //isNaN('hello') -> true
    if (isNaN(this.state.fromValue)) {
      //send error msg
      //set errorTrigger to true
      this.setState({
        errorTrigger: true,
        msg: "Please input a number"
      });
    }
  }

  convertValues() {
    console.log("convertValues hit");
    let startingUnit = this.state.fromUnit;
    let endUnit = this.state.toUnit;
    let startValue = this.state.fromValue;
    // console.log("starting value = " + this.state.fromUnit);
    // console.log("end unit = " + this.state.toUnit);
    // console.log("start Value = " + this.state.fromValue);
    console.log("starting unit: " + startingUnit);
    console.log("end unit: " + endUnit);
    //if units are the same
    if (startingUnit === endUnit) {
      //console.log("convertValues hit: same units");
      //send warning
      // errorTrigger = true;
      this.setState({
        errorTrigger: true,
        msg: "Please select different units."
      });
    } else {
      //console.log("convertValues hit: different units");
      //units are different:
      //set cases
      // try {
      switch (startingUnit) {
        case "Celsius":
          switch (endUnit) {
            case "Kelvin":
              //meters to kilometers
              this.setState({
                toValue: startValue * 274.15
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Fahrenheit":
              //meters to centimeter
              this.setState({
                toValue: startValue * 33.8
              });
              break;
            default:
              console.log("default of Value reached");
          }
          break;
        case "Kelvin":
          switch (endUnit) {
            case "Celsius":
              //Kilometer to meter
              this.setState({
                toValue: startValue * -272.15
              });
              break;
            case "Fahrenheit":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * -457.87
              });
              break;

            default:
              console.log("Error");
          }
          break;
        case "Fahrenheit":
          switch (endUnit) {
            case "Celsius":
              //Kilometer to meter
              this.setState({
                toValue: startValue * -17.222222222
              });
              break;
            case "Kelvin":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 255.92777778
              });
              break;

            default:
              console.log("default of toValue reached");
          }
          break;

        default:
          console.log("default of fromValue reached");
      }
      // } catch {
      //   this.setState({
      //     errorTrigger: true,
      //     msg: "Error: unit conversion was not possible"
      //   });
      // }
    }
  }

  handleSubmit(event) {
    // alert("Your favorite flavor is: " + this.state.value);
    //console.log("handlesubmit hit");
    //event.preventDefault();

    //add user input checks
    this.validateInput();
    if (!this.state.errorTrigger) {
      //calculate conversions
      this.convertValues();
    }
  }

  render() {
    return (
      <Fragment>
        <Row className="lengthFragment">
          <Col md={1} />
          <Col md={10}>
            <Card>
              <Card.Header>Temperature Converter</Card.Header>

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
                        className="select-css"
                        name="fromUnit"
                        value={this.state.fromUnit}
                        onChange={this.handleChange}
                      >
                        <option value="Celsius">Celsius</option>
                        <option value="Kelvin">Kelvin</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        {/* <option value="Millimeter">Millimeter</option>
                        <option value="Micrometer">Micrometer</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Mile">Mile</option>
                        <option value="Yard">Yard</option>
                        <option value="Foot">Foot</option>
                        <option value="Inch">Inch</option> */}
                      </select>
                      {/* 
                      <Select
                        valueName="fromUnit"
                        defaultValue={unitOptions[1]}
                        unitValue={this.state.fromUnit}
                        onChange={this.handleChange}
                        placeholder={unitOptions[1]}
                        options={unitOptions}
                      /> */}
                    </Col>
                    <Col md={2} className="toDiv">
                      <h3>To</h3>
                    </Col>
                    <Col md={3}>
                      <select
                        className="select-css"
                        name="toUnit"
                        value={this.state.toUnit}
                        onChange={this.handleChange}
                      >
                        <option value="Celsius">Celsius</option>
                        <option value="Kelvin">Kelvin</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        {/* <option value="Millimeter">Millimeter</option>
                        <option value="Micrometer">Micrometer</option>
                        <option value="Nanometer">Nanometer</option>
                        <option value="Mile">Mile</option>
                        <option value="Yard">Yard</option>
                        <option value="Foot">Foot</option>
                        <option value="Inch">Inch</option> */}
                      </select>
                    </Col>
                  </Row>

                  <Row className="calculateRow">
                    <Col md={3} />
                    <Col sm={12} md={6} lg={6}>
                      <Button
                        variant="outline-primary"
                        onClick={this.handleSubmit}
                        className="calculateBtn"
                      >
                        Calculate
                      </Button>
                    </Col>
                    <Col md={3} />
                  </Row>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <div className="result">
                        {this.state.errorTrigger ? (
                          <Badge variant="danger">
                            <h5>{this.state.msg}</h5>
                          </Badge>
                        ) : (
                          <Badge variant="primary">
                            <h4>{this.state.toValue}</h4>
                          </Badge>
                        )}
                      </div>
                    </Col>
                  </Row>
                </form>
              </Card.Body>
            </Card>
            <Ad />
          </Col>
          <Col md={1} />
        </Row>
      </Fragment>
    );
  }
}

export default Temperature;
