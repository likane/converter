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

class Weight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "Kilograms",
      toUnit: "Kilograms",
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
    console.log("Starting Unit: " + startingUnit);
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
        case "Kilograms":
          switch (endUnit) {
            case "Grams":
              //meters to kilometers
              this.setState({
                toValue: startValue * 1000
              });
              // console.log("toValue = " + this.state.toValue);
              break;
            case "Milligrams":
              //meters to centimeter

              this.setState({
                toValue: startValue * 1000000
              });
              break;
            case "Metric Ton":
              //meters to millimeters
              this.setState({
                toValue: startValue * 0.001
              });
              break;
            case "Long Ton":
              this.setState({
                toValue: startValue * 0.009842073
              });
              //meters to microometers
              break;
            case "Short Ton":
              //meters to nanoometers
              this.setState({
                toValue: startValue * 0.0011023122
              });
              break;
            case "Pound":
              //meters to mile

              this.setState({
                toValue: startValue * 2.2046244202
              });
              break;
            case "Ounce":
              //meters to Yard

              this.setState({
                toValue: startValue * 35.273990723
              });
              break;
            case "Carrat":
              //meters to foot

              this.setState({
                toValue: startValue * 5000
              });
              break;
            case "Atomic Mass Unit":
              //meters to Inch
              this.setState({
                toValue: startValue * 602213665200000128728320792
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Grams":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 0.001
              });
              break;
            case "Milligrams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 1000
              });
              break;
            case "Metric Ton":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 0.000001
              });
              break;
            case "Long Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.0000009842073304
              });
              break;
            case "Short Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 0.0000011023
              });
              break;
            case "Pound":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 0.0022046244
              });
              break;
            case "Ounce":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 0.0352739907
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 5
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 602213665200000128728320
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Milligrams":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 0.000001
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 0.001
              });
              break;
            case "Metric Ton":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 0.000000000999999999
              });
              break;
            case "Long Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.0000000009842073304
              });
              break;
            case "Short Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 0.00000000110231221
              });
              break;
            case "Pound":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 0.0000022046
              });
              break;
            case "Ounce":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 0.000035274
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 0.005
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 602213665200000000000
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Metric Ton":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 1000
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 1000000
              });
              break;
            case "Milligrams":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 1000000000
              });
              break;
            case "Long Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.9842073304
              });
              break;
            case "Short Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 1.1023122101
              });
              break;
            case "Pound":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 2204.6244202
              });
              break;
            case "Ounce":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 35273.990723
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 5000000
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 602213665200000128728320792664
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Long Ton":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 1016.04608
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 1016046.08
              });
              break;
            case "Milligrams":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 1016046080
              });
              break;
            case "Metric Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 1.01604608
              });
              break;
            case "Short Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 1.12
              });
              break;
            case "Pound":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 2240
              });
              break;
            case "Ounce":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 35840
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 5080230.4
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 611876833800000000520248168392
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Short Ton":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 907.184
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 907184
              });
              break;
            case "Metric Ton":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 0.907184
              });
              break;
            case "Long Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.8928571429
              });
              break;
            case "Pound":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 2000
              });
              break;
            case "Ounce":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 32000
              });
              break;
            case "Carrat":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 4535920
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 546318601600000000000832528200
              });
              break;
            case "Milligrams":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 907184000
              });
              break;
            default:
              console.log("Error");
          }
          break;
        case "Pound":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 0.453592
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 453.592
              });
              break;
            case "Milligrams":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 453592
              });
              break;
            case "Metric Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.000453592
              });
              break;
            case "Long Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 0.0004464286
              });
              break;
            case "Short Ton":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 16
              });
              break;
            case "Ounce":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 2267.96
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 5280.019685
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 273159300800000000000416264
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Ounce":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 0.0283495
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 28.3495
              });
              break;
            case "Milligrams":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 28349.5
              });
              break;
            case "Metric Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.0000283495
              });
              break;
            case "Long Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 0.0000279018
              });
              break;
            case "Short Ton":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 0.00003125
              });
              break;
            case "Pound":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 0.0625
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 141.7475
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Inch
              this.setState({
                toValue: startValue * 17072456300000000000776704
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Carrat":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 0.0002
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 0.2
              });
              break;
            case "Milligrams":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 200
              });
              break;
            case "Metric Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.0000002
              });
              break;
            case "Long Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 0.000000196841466
              });
              break;
            case "Short Ton":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 0.000000220462442
              });
              break;
            case "Pound":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 0.0004409249
              });
              break;
            case "Ounce":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 0.0070547981
              });
              break;
            case "Atomic Mass Unit":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 120442733000000000904088
              });
              break;
            default:
              console.log("default of toValue reached");
          }
          break;
        case "Atomic Mass Unit":
          switch (endUnit) {
            case "Kilograms":
              //Kilometer to meter
              this.setState({
                toValue: startValue * 0.000000000000000000000000001660540199
              });
              break;
            case "Grams":
              //Kilometer to centimeter
              this.setState({
                toValue: startValue * 0.000000000000000000000001660540199
              });
              break;
            case "Milligrams":
              //Kilometer to millimeter
              this.setState({
                toValue: startValue * 0.000000000000000000001660540199
              });
              break;
            case "Metric Ton":
              //Kilometer to microoKilometer
              this.setState({
                toValue: startValue * 0.000000000000000000000000000001660540199
              });
              break;
            case "Long Ton":
              //Kilometer to nanooKilometer
              this.setState({
                toValue: startValue * 0.000000000000000000000000000001634315837
              });
              break;
            case "Short Ton":
              //Kilometer to mile
              this.setState({
                toValue: startValue * 0.000000000000000000000000000001830433737
              });
              break;
            case "Pound":
              //Kilometer to Yard
              this.setState({
                toValue: startValue * 0.000000000000000000000000003660867475
              });
              break;
            case "Ounce":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 0.0000000000000000000000000585738796
              });
              break;
            case "Carrat":
              //Kilometer to foot
              this.setState({
                toValue: startValue * 0.000000000000000000000008302700999
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
              <Card.Header>Weight Converter</Card.Header>

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
                        <option value="Kilograms">Kilograms</option>
                        <option value="Grams">Grams</option>
                        <option value="Milligrams">Milligrams</option>
                        <option value="Metric Ton">Metric Ton</option>
                        <option value="Long Ton">Long Ton</option>
                        <option value="Short Ton">Short Ton</option>
                        <option value="Pound">Pound</option>
                        <option value="Ounce">Ounce</option>
                        <option value="Carrat">Carrat</option>
                        <option value="Atomic Mass Unit">
                          Atomic Mass Unit
                        </option>
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
                        <option value="Kilograms">Kilograms</option>
                        <option value="Grams">Grams</option>
                        <option value="Milligrams">Milligrams</option>
                        <option value="Metric Ton">Metric Ton</option>
                        <option value="Long Ton">Long Ton</option>
                        <option value="Short Ton">Short Ton</option>
                        <option value="Pound">Pound</option>
                        <option value="Ounce">Ounce</option>
                        <option value="Carrat">Carrat</option>
                        <option value="Atomic Mass Unit">
                          Atomic Mass Unit
                        </option>
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

export default Weight;
