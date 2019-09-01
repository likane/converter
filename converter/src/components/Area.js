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

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "Square Meter",
      toUnit: "Square Mile",
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
    console.log("end Unit: " + endUnit);
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
        case "Square Meter":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 1
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.000001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter

              this.setState({
                toValue: startValue * 10000
              });
              break;
            case "Square Millimeter":
              //meters to millimeters

              this.setState({
                toValue: startValue * 1000000
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 1000000000000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.0001
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0000003861018768
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 1.1959900463
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 10.763910417
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 1550.0031
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0002471054
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Square Kilometer":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 1000000
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 1
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 10000000000
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 1000000000000
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 1000000000000000000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 100
              });
              break;
            case "Square Mile":
              //meters to mile

              this.setState({
                toValue: startValue * 0.3861018768
              });
              break;
            case "Square Yard":
              //meters to Yard

              this.setState({
                toValue: startValue * 1195990.0463
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 10763910.417
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 1550003100
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 247.10538147
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Square Centimeter":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.0001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.0000000001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 100
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 100000000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.00000001
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.00000000003861018768
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 0.000119599
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 0.001076391
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.15500031
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.00000002471053814
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Square Millimeter":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.000001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.000000000001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 0.01
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 1000000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.00000000009999999999
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0000000000003861018768
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 0.000001196
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 0.0000107639
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0015500031
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0000000002471053814
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Square Micrometer":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.000000000001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.000000000000000001
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 0.000000009999999999
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 0.000001
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 1
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.0000000000000001
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0000000000000000003861018768
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 0.000000000001195990046
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 0.00000000001076391041
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0000000015500031
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0000000000000002471053814
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Hectar":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 10000
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.01
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 100000000
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 10000000000
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 10000000000000000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0038610188
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 11959.900463
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 107639.10417
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 15500031
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 2.4710538147
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Square Mile":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 2589990
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 2.58999
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 25899900000
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 2589990000000
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 2589990000000000000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 258.999
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 3097602.26
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 27878420.34
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 4014492529
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 640.00046695
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Square Yard":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.83612736
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.00000083612736
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 8361.2736
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 836127.36
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 836127360000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.0000836127
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0000003228303429
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 9
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 1296
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0002066116
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Square Foot":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.09290304
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.00000009290304
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 929.0304
              });
              break;
            case "Square Millimeter":
              //meters to millimeters

              this.setState({
                toValue: startValue * 92903.04
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 92903040000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.0000092903
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0000000358700381
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 0.1111111111
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 144
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0000229568
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Square Inch":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.00064516
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.000000000654516
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 6.4516
              });
              break;
            case "Square Millimeter":
              //meters to millimeters
              this.setState({
                toValue: startValue * 645.16
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 645160000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.000000064516
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0000000002490974868
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 0.0007716049
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 0.0069444444
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 1
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 0.0000001594225079
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Acre":
          switch (endUnit) {
            case "Square Meter":
              //meters to kilometers
              this.setState({
                toValue: startValue * 4046.8564224
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Kilometer":
              //meters to kilometers
              this.setState({
                toValue: startValue * 0.0040468564
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Square Centimeter":
              //meters to centimeter
              this.setState({
                toValue: startValue * 40468564.224
              });
              break;
            case "Square Millimeter":
              //meters to millimeters

              this.setState({
                toValue: startValue * 4046856422.4
              });
              break;
            case "Square Micrometer":
              this.setState({
                toValue: startValue * 4046856422400000
              });
              //meters to microometers
              break;
            case "Hectar":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.4046856422
              });
              break;
            case "Square Mile":
              //meters to mile
              this.setState({
                toValue: startValue * 0.0015624989
              });
              break;
            case "Square Yard":
              //meters to Yard
              this.setState({
                toValue: startValue * 4840
              });
              break;
            case "Square Foot":
              //meters to foot
              this.setState({
                toValue: startValue * 43560
              });
              break;
            case "Square Inch":
              //meters to Inch
              this.setState({
                toValue: startValue * 6272640
              });
              break;
            case "Acre":
              //meters to Inch
              this.setState({
                toValue: startValue * 1
              });
              break;
            default:
              console.log("Error");
          }
          break;

        default:
          console.log("Error: internal");
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
              <Card.Header>Area Converter</Card.Header>

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
                        <option value="Square Meter">Square Meter</option>
                        <option value="Square Kilometer">
                          Square Kilometer
                        </option>
                        <option value="Square Centimeter">
                          Square Centimeter
                        </option>
                        <option value="Square Millimeter">
                          Square Millimeter
                        </option>
                        <option value="Square Micrometer">
                          Square Micrometer
                        </option>
                        <option value="Hectar">Hectar</option>
                        <option value="Square Mile">Square Mile</option>
                        <option value="Square Yard">Square Yard</option>
                        <option value="Square Foot">Square Foot</option>
                        <option value="Square Inch">Square Inch</option>
                        <option value="Acre">Acre</option>
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
                        <option value="Square Meter">Square Meter</option>
                        <option value="Square Kilometer">
                          Square Kilometer
                        </option>
                        <option value="Square Centimeter">
                          Square Centimeter
                        </option>
                        <option value="Square Millimeter">
                          Square Millimeter
                        </option>
                        <option value="Square Micrometer">
                          Square Micrometer
                        </option>
                        <option value="Hectar">Hectar</option>
                        <option value="Square Mile">Square Mile</option>
                        <option value="Square Yard">Square Yard</option>
                        <option value="Square Foot">Square Foot</option>
                        <option value="Square Inch">Square Inch</option>
                        <option value="Acre">Acre</option>
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

export default Area;
