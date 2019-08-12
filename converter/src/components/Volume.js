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
              case "US Quart":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0000010567
                });
                break;
              //TODO
              case "US Pint":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0000021134
                });
                break;
              case "US Cup":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000042268
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.000033814
                });
                break;
              case "US Table Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0000676281
                });
                break;
              case "US Tea Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0002028842
                });
                break;
              //TODO
              case "Imperial Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0000002199692482
                });
                break;
              case "Imperial Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000008798769931
                });
                break;
              case "Imperial Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000017598
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0000351951
                });
                break;
              //TODO
              case "Imperial Table Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0000563121
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0001689364
                });
                break;
              case "Cubic Mile":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000000000000000002399128636
                });
                break;
              case "Cubic Yard":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.000000001307950619
                });
                break;
              case "Cubic Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.00000003531466672
                });
                break;
              case "Cubic Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000610237
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Liter": //todo
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.001
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.000000000001
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 1000
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer

                this.setState({
                  toValue: startValue * 1000000
                });
                break;
              case "Milliliter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1000
                });
                break;
              case "US Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.2641721769
                });
                break;
                break;
              case "US Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 1.0566887074
                });
                break;
              case "US Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 2.1133774149
                });
                break;
              case "US Cup":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 4.2267548297
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 33.814038638
                });
                break;
              case "US Table Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 67.628077276
                });
                break;
              case "US Tea Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 202.88423183
                });
                break;
              case "Imperial Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.2199692483
                });
                break;
              case "Imperial Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.8798769932
                });
                break;
              case "Imperial Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 1.7597539864
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 35.195079728
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 56.312127565
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 168.93638269
                });
                break;
              case "Cubic Mile":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0000000000002399128636
                });
                break;
              case "Cubic Yard":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0013079506
                });
                break;
              case "Cubic Foot":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0353146667
                });
                break;
              case "Cubic Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 61.023744095
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "Milliliter":
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
                //todo
                break;
              case "US Quart":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0010566887
                });
                //todo
                break;
              case "US Pint":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0021133774
                });
                //todo
                break;
              case "US Cup":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0042267548
                });
                //todo
                break;
              case "US Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0338140386
                });
                //todo
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.0676280773
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.2028842318
                });
                //todo
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0002199692
                });
                //todo
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.000879877
                });
                //todo
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.001759754
                });
                //todo
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0351950797
                });
                //todo
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0563121276
                });
                //todo
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.1689363827
                });
                //todo
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000000000000002399128636
                });
                //todo
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.000001308
                });
                //todo
                break;
              case "Cubic Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000353147
                });
                //todo
                break;
              case "Cubic Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0610237441
                });
                break;
              default:
                console.log("default of toValue reached");
            }
            break;
          case "US Gallon":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.00378541
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000378541
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 3785.41
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 3785410
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1609350000000
                });
                break;
              case "Kilometer":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 3.78541
                });
                break;
              case "Milliliter":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 3785.41
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 4
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 8
                });
                break;
              case "US Cup":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 16
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 128
                });
                break;
              case "US Table Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 256
                });
                break;
              case "US Tea Spoon":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 768
                });
                break;
              case "Imperial Gallon":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.8326737922
                });
                break;
              case "Imperial Quart":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 3.3306951688
                });
                break;
              case "Imperial Pint":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 6.6613903376
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 133.22780675
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 213.1644908
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 639.49347241
                });
                break;
              case "Cubic Mile":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0000000000009081685531
                });
                break;
              case "Cubic Yard":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0049511294
                });
                break;
              case "Cubic Foot":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.1336804926
                });
                break;
              case "Cubic Inch":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 230.99989113
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "US Quart":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0009463525
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.0000000000009463525
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 946.3525
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 946352.5
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.9463525
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 946.3525
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.25
                });
                break;
              case "US Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 2
                });
                break;
              case "US Cup":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 4
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 32
                });
                break;
              case "US Table Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 64
                });
                break;
              case "US Tea Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 192
                });
                break;
              case "Imperial Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.2081684481
                });
                break;
              case "Imperial Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.8326737922
                });
                break;
              case "Imperial Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 1.6653475844
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 33.306951688
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 53.291122701
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 159.8733681
                });
                break;
              case "Cubic Mile":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000000000002270421382
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0012377823
                });
                break;
              case "Cubic Foot":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0334201231
                });
                break;
              case "Cubic Inch":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 57.749972783
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "US Pint":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0004731763
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000047317625
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 473.17625
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 473176.25
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.47317625
                });
                break;
              case "Millilter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 473.17625
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.125
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.5
                });
                break;
              case "US Cup":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 2
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 16
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 32
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 96
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.104084224
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.4163368961
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.8326737922
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 16.653475844
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 26.645561351
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 79.936684052
                });
                break;
              case "Cubic Mile":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0000000000001135210691
                });
                break;
              case "Cubic Yard":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0006188912
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0167100616
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 28.874986392
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "US Fluid Ounce":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0000295735
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000002957351562
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 29.573515625
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 29573.515625
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0295735156
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 29.573515625
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0078125
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.03125
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0625
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.125
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 2
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 6
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.006505264
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.026021056
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.052042112
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 1.0408422403
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 1.6653475844
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 4.9960427532
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.000000000000007095066821
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000386807
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0010443788
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1.8046866495
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "US Table Spoon":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0000147868
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000001478675781
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 14.786757812
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 14786.757812
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0147867578
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 14.786757812
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.00390625
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.015625
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.03125
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.0625
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.5
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 3
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.003252632
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.013010528
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.026021056
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.5204211201
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.8326737922
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 2.4980213766
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.00000000000000354753341
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000193403
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0005221894
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.9023433247
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "US Tea Spoon":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0000049289
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000000492891927
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 4.9289192708
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 4928.9192708
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0049289193
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 4.9289192708
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0013020833
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0052083333
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0104166667
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.0208333333
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.1666666667
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.3333333333
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.0010842107
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0043368427
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0086736853
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.1734737067
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.2775579307
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.8326737922
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.000000000000001182511136
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000064468
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0001740631
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.3007811082
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Imperial Gallon":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.00454609
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000454609
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 4546.09
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 4546090
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 4.54609
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 4546.09
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 1.2009504915
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 4.803801966
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 9.6076039319
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 19.215207864
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 153.72166291
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 307.44332582
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 922.32997747
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 4
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 8
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 160
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 256
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 768
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.00000000000109066547
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0059460612
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.1605436532
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 277.41943279
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Imperial Quart":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0011365225
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.0000000000011365225
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 1136.5225
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 1136522.5
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 1.1365225
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 1136.5225
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.3002376229
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1.2009504915
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 2.401900983
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 4.803801966
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 38.430415728
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 76.860831456
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 230.58249437
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.25
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 2
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 40
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 64
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 192
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000000000002726663675
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0014865153
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0401359133
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 69.354858198
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Imperial Pint":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0005682613
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000056826125
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 568.26125
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 568261.25
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.56826125
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 568.26125
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.1501188114
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.6004752457
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 1.2009504915
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 2.401900983
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 19.215207864
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 38.430415728
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 115.29124718
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.125
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.5
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 20
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 32
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 96
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000000000001363331837
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0007432577
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0200679567
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 34.677429099
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Imperial Fluid Ounce":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0000284131
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.0000000000000284130625
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 28.4130625
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 28413.0625
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0284130625
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 28.4130625
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0075059406
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0300237623
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0600475246
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.1200950491
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.9607603932
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 1.9215207864
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 5.7645623592
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.00625
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.025
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.05
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 1.6
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 4.8
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0000000000000068816659189
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000371629
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0010033978
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1.7338714549
                });
                break;
              default:
                console.log("Error");
            }
            break;
          case "Imperial Table Spoon":
            switch (endUnit) {
              case "Cubic Meter":
                //Kilometer to meter
                this.setState({
                  toValue: startValue * 0.0000177582
                });
                break;
              case "Cubic Kilometer":
                //Kilometer to centimeter
                this.setState({
                  toValue: startValue * 0.00000000000001775816406
                });
                break;
              case "Cubic Centimeter":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 17.758164063
                });
                break;
              case "Cubic Millimeter":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 17758.164063
                });
                break;
              case "Liter":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 0.0177581641
                });
                break;
              case "Milliliter":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 17.758164063
                });
                break;
              case "US Gallon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0046912129
                });
                break;
              case "US Quart":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.0187648514
                });
                break;
              case "US Pint":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0375297029
                });
                break;
              case "US Cup":
                //Kilometer to millimeter
                this.setState({
                  toValue: startValue * 0.0750594057
                });
                break;
              case "US Fluid Ounce":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 0.6004752457
                });
                break;
              case "US Table Spoon":
                //Kilometer to microoKilometer
                this.setState({
                  toValue: startValue * 1.2009504915
                });
                break;
              case "US Tea Spoon":
                //Kilometer to nanooKilometer
                this.setState({
                  toValue: startValue * 3.6028514745
                });
                break;
              case "Imperial Gallon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 0.00390625
                });
                break;
              case "Imperial Quart":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.015625
                });
                break;
              case "Imperial Pint":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.03125
                });
                break;
              case "Imperial Fluid Ounce":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.625
                });
                break;
              case "Imperial Table Spoon":
                //Kilometer to mile
                this.setState({
                  toValue: startValue * 1
                });
                break;
              case "Imperial Tea Spoon":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 3
                });
                break;
              case "Cubic Mile":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 0.000000000000004260411993
                });
                break;
              case "Cubic Yard":
                //Kilometer to Inch
                this.setState({
                  toValue: startValue * 0.0000232268
                });
                break;
              case "Cubic Foot":
                //Kilometer to Yard
                this.setState({
                  toValue: startValue * 0.0006271236
                });
                break;
              case "Cubic Inch":
                //Kilometer to foot
                this.setState({
                  toValue: startValue * 1.0836696593
                });
                break;
              default:
                console.log("Error");
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
