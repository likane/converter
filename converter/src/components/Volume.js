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

import "../styles/form.css";

// const unitOptions = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" }
// ];

class Volume extends React.Component {
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
      try {
        switch (startingUnit) {
          case "Cubic Meter":
            switch (endUnit) {
              case "Cubic Kilometer":
                //meters to kilometers
                this.setState({
                  toValue: startValue * 0.000000001
                });
                // console.log("toValue = " + this.state.toValue);
                break;
              case "Cubic Centimeter":
                //meters to centimeter

                this.setState({
                  toValue: startValue * 1000000
                });
                break;
              case "Cubic Millimeter":
                //meters to millimeters

                this.setState({
                  toValue: startValue * 1000000000
                });
                break;
              case "Liter":
                this.setState({
                  toValue: startValue * 1000
                });
                //meters to microometers
                break;
              case "Milliliter":
                //meters to nanoometers
                this.setState({
                  toValue: startValue * 1000000
                });
                break;
              case "US Gallon":
                //meters to mile

                this.setState({
                  toValue: startValue * 264.17217686
                });
                break;
              case "US Quart":
                //meters to Yard

                this.setState({
                  toValue: startValue * 1056.6887074
                });
                break;
              case "US Pint":
                //meters to foot

                this.setState({
                  toValue: startValue * 2113.3774149
                });
                break;
              case "US Cup":
                //meters to Inch
                this.setState({
                  toValue: startValue * 4226.7548297
                });
                break;
              case "US Fluid Ounce":
                //meters to foot
                this.setState({
                  toValue: startValue * 33814.038638
                });
                break;
              case "US Table Spoon":
                //meters to Inch
                this.setState({
                  toValue: startValue * 67628.077276
                });
                break;
              case "US Tea Spoon":
                //meters to mile

                this.setState({
                  toValue: startValue * 202884.23183
                });
                break;
              case "Imperial Gallon":
                //meters to Yard
                this.setState({
                  toValue: startValue * 219.9692483
                });
                break;
              case "Imperial Quart":
                //meters to foot

                this.setState({
                  toValue: startValue * 879.8769932
                });
                break;
              case "Imperial Pint":
                //meters to Inch
                this.setState({
                  toValue: startValue * 1759.7539864
                });
                break;
              case "Imperial Fluid Ounce":
                //meters to foot
                this.setState({
                  toValue: startValue * 35195.079728
                });
                break;
              case "Imperial Table Spoon":
                //meters to Inch
                this.setState({
                  toValue: startValue * 56312.127565
                });
                break;
              case "Imperial Tea Spoon":
                //meters to Inch
                this.setState({
                  toValue: startValue * 168936.38269
                });
                break;
              case "Cubic Mile":
                //meters to foot
                this.setState({
                  toValue: startValue * 0.0000000002399128636
                });
                break;
              case "Cubic Yard":
                //meters to Inch
                this.setState({
                  toValue: startValue * 1.3079506193
                });
                break;
              case "Cubic Foot":
                //meters to foot
                this.setState({
                  toValue: startValue * 35.314666721
                });
                break;
              case "Cubic Inch":
                //meters to Inch
                this.setState({
                  toValue: startValue * 61023.744095
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Cubic Kilometer":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 1000000000
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 1000000000000000
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 1000000000000000000
                });
                break;
              case "Liter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 1000000000000
                });
                break;
              case "Milliliter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1000000000000000
                });
                break;
              case "US Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 264172176858
                });
                break;
              case "US Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 1056688707432
                });
                break;
              case "US Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 2113377414864
                });
                break;
              case "US Cup":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 4226754829728
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 33814038637823
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 67628077275645
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 202884231826936
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 219969248299
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 879876993196
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1759753986393
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 35195079727854
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 56312127564566
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 168936382693699
                });
                break;
              case "Cubic Mile":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.2399128636
                });
                break;
              case "Cubic Yard":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1307950619.3
                });
                break;
              case "Cubic Foot":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 35314666721
                });
                break;
              case "Cubic Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 61023744094732
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Cubic Centimeter":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.000001
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.0000000000000009999999999
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 1000
                });
                break;
              case "Liter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.001
                });
                break;
              case "US Gallon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0002641722
                });
                break;
              case "US Quart":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0010566887
                });
                break;
              case "US Pint":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0021133774
                });
                break;
              case "US Cup":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0042267548
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0338140386
                });
                break;
              case "US Table Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0676280773
                });
                break;
              case "US Tea Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.2028842318
                });
                break;
              case "Imperial Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0002199692
                });
                break;
              case "Imperial Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.000879877
                });
                break;
              case "Imperial Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.001759754
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0351950797
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0563121276
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.1689363827
                });
                break;
              case "Cubic Mile":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0000000000000002399128636
                });
                break;
              case "Cubic Yard":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.000001308
                });
                break;
              case "Imperial Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000353147
                });
                break;
              case "Imperial Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0610237441
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Cubic Millimeter":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.000000001
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.000000000000000001
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.001
                });
                break;
              case "Liter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.000001
                });
                break;
              case "US Gallon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0000002641721768
                });
                break;
              case "Mile":
                //Kilometer to mile
                // this.setState({
                //   toValue: startValue * 1000000
                // });
                break;
              //TODO
              case "Yard":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0010936133
                });
                break;
              case "Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0032808399
                });
                break;
              case "Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0393700787
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Micrometer":
            switch (endUnit) {
              case "Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.000001
                });
                break;
              case "Centimeter":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.0001
                });
                break;
              case "Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.001
                });
                break;
              case "Kilometer":
                //Kilometer to microoKilometer
                //todo
                // this.setState({
                //   toValue: startValue *
                // });
                break;
              case "Nanometer":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1000
                });
                break;
              case "Mile":
                //Kilometer to mile
                //todo
                break;
              case "Yard":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0000010936
                });
                break;
              case "Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000032808
                });
                break;
              case "Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000393701
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Nanometer":
            switch (endUnit) {
              case "Meter":
                //Kilometer to meter
                //todo
                break;
              case "Centimeter":
                //Kilometer to centimeter
                //todo
                break;
              case "Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.000001
                });
                break;
              case "Micrometer":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.001
                });
                break;
              case "Kilometer":
                //Kilometer to nanooKilometer
                //todo
                break;
              case "Mile":
                //Kilometer to mile
                //todo
                break;
              case "Yard":
                //Kilometer to Yard
                //todo
                break;
              case "Foot":
                //Kilometer to foot
                //todo
                break;
              case "Inch":
                //Kilometer to Inch
                //todo
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Mile":
            switch (endUnit) {
              case "Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 1609.35
                });
                break;
              case "Centimeter":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 160935
                });
                break;
              case "Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 1609350
                });
                break;
              case "Micrometer":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 1609350000
                });
                break;
              case "Nanometer":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1609350000000
                });
                break;
              case "Kilometer":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 1.60935
                });
                break;
              case "Yard":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 1760.0065617
                });
                break;
              case "Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 5280.019685
                });
                break;
              case "Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 63360.23622
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Yard":
            switch (endUnit) {
              case "Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.9144
                });
                break;
              case "Centimeter":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 91.44
                });
                break;
              case "Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 914.4
                });
                break;
              case "Micrometer":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 914400
                });
                break;
              case "Nanometer":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 914400000
                });
                break;
              case "Mile":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0005681797
                });
                break;
              case "Kilometer":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0009144
                });
                break;
              case "Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 3
                });
                break;
              case "Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 36
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Foot":
            switch (endUnit) {
              case "Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.3048
                });
                break;
              case "Centimeter":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 30.48
                });
                break;
              case "Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 304.8
                });
                break;
              case "Micrometer":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 3048000
                });
                break;
              case "Nanometer":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 304800000
                });
                break;
              case "Mile":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0001893932
                });
                break;
              case "Kilometer":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0003048
                });
                break;
              // case "Foot":
              //   //Kilometer to foot
              //   this.setState({
              //     toValue: startValue * 3
              //   });
              //   break;
              case "Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 12
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Inch":
            switch (endUnit) {
              case "Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0254
                });
                break;
              case "Centimeter":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 2.54
                });
                break;
              case "Millimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 25.4
                });
                break;
              case "Micrometer":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 25400
                });
                break;
              case "Nanometer":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 25400000
                });
                break;
              case "Mile":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0000157828
                });
                break;
              case "Kilometer":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0000254
                });
                break;
              case "Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.083333333
                });
                break;
              // case "Inch":
              //   //Kilometer to Inch
              //   this.setState({
              //     toValue: startValue * 36
              //   });
              //   break;
              default:
                console.log("default of toValue reached");
            }
            break;

          default:
            console.log("default of fromValue reached");
        }
      } catch {
        this.setState({
          errorTrigger: true,
          msg: "Error: unit conversion was not possible"
        });
      }
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
                        className="select-css"
                        name="fromUnit"
                        value={this.state.fromUnit}
                        onChange={this.handleChange}
                      >
                        <option value="Cubic Meter">Cubic Meter</option>
                        <option value="Cubic Kilometer">Cubic Kilometer</option>
                        <option value="Cubic Centimeter">
                          Cubic Centimeter
                        </option>
                        <option value="Cubic Millimeter">
                          Cubic Millimeter
                        </option>
                        <option value="Liter">Liter</option>
                        <option value="Milliliter">Milliliter</option>
                        <option value="US Gallon">US Gallon</option>
                        <option value="US Quart">US Quart</option>
                        <option value="US Pint">US Pint</option>
                        <option value="US Cup">US Cup</option>
                        <option value="US Fluid Ounce">US Fluid Ounce</option>
                        <option value="US Table Spoon">US Table Spoon</option>
                        <option value="US Tea Spoon">US Tea Spoon</option>
                        <option value="Imperial Gallon">Imperial Gallon</option>
                        <option value="Imperial Quart">Imperial Quart</option>
                        <option value="Imperial Pint">Imperial Pint</option>
                        <option value="Imperial Fluid Ounce">
                          Imperial Fluid Ounce
                        </option>
                        <option value="Imperial Table Spoon">
                          Imperial Table Spoon
                        </option>
                        <option value="Imperial Tea Spoon">
                          Imperial Tea Spoon
                        </option>
                        <option value="Cubic Mile">Cubic Mile</option>
                        <option value="Cubic Yard">Cubic Yard</option>
                        <option value="Cubic Foot">Cubic Foot</option>
                        <option value="Cubic Inch">Cubic Inch</option>
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
                        <option value="Cubic Meter">Cubic Meter</option>
                        <option value="Cubic Kilometer">Cubic Kilometer</option>
                        <option value="Cubic Centimeter">
                          Cubic Centimeter
                        </option>
                        <option value="Cubic Millimeter">
                          Cubic Millimeter
                        </option>
                        <option value="Liter">Liter</option>
                        <option value="Milliliter">Milliliter</option>
                        <option value="US Gallon">US Gallon</option>
                        <option value="US Quart">US Quart</option>
                        <option value="US Pint">US Pint</option>
                        <option value="US Cup">US Cup</option>
                        <option value="US Fluid Ounce">US Fluid Ounce</option>
                        <option value="US Table Spoon">US Table Spoon</option>
                        <option value="US Tea Spoon">US Tea Spoon</option>
                        <option value="Imperial Gallon">Imperial Gallon</option>
                        <option value="Imperial Quart">Imperial Quart</option>
                        <option value="Imperial Pint">Imperial Pint</option>
                        <option value="Imperial Fluid Ounce">
                          Imperial Fluid Ounce
                        </option>
                        <option value="Imperial Table Spoon">
                          Imperial Table Spoon
                        </option>
                        <option value="Imperial Tea Spoon">
                          Imperial Tea Spoon
                        </option>
                        <option value="Cubic Mile">Cubic Mile</option>
                        <option value="Cubic Yard">Cubic Yard</option>
                        <option value="Cubic Foot">Cubic Foot</option>
                        <option value="Cubic Inch">Cubic Inch</option>
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
          </Col>
          <Col md={1} />
        </Row>
      </Fragment>
    );
  }
}

export default Volume;
