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

// {
//   fromUnit = "from",
//   toUnit = "to",
//   fromValue = 0,
//   toValue = 0
// }
class Length extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromUnit: "meters",
      toUnit: "miles",
      fromValue: 0,
      toValue: 0,
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

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
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
                    <Col md={5}>
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
                    <Col md={2} />
                    <Col md={5}>
                      <InputGroup className="mb-3">
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
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={5}>
                      <select
                        name="fromUnit"
                        value={this.state.fromUnit}
                        onChange={this.handleChange}
                      >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </Col>
                    <Col md={2} />
                    <Col md={5}>
                      <select
                        name="toUnit"
                        value={this.state.toValue}
                        onChange={this.handleChange}
                      >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Button variant="outline-primary">Primary</Button>
                    </Col>
                    <Col md={6}>
                      <div>
                        <Badge variant="success">
                          {this.state.convertedValue}
                        </Badge>
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
// const Length = () => {
//   const getInitialState = () => {
//     return {
//       fromUnit: "from",
//       toUnit: "to",
//       fromValue: 0,
//       toValue: 0
//     };
//   };

//   const handleChange = e => {
//     this.setState({
//       selectValue: e.target.value
//     });
//   };

//   var selectedUnit = this.state.fromUnit;

//   return (
//     <Fragment>
//       <Row className="lengthFragment">
//         <Col md={1} />

//         <Col md={10}>
//           <Card>
//             <Card.Header>Length Converter</Card.Header>
//             <Card.Body>
//               {/* <Card.Title>Special title treatment</Card.Title> */}
//               <Row>
//                 <Col md={5}>
//                   <InputGroup className="mb-3">
//                     <DropdownButton
//                       as={InputGroup.Prepend}
//                       variant="outline-secondary"
//                       title={selectedUnit}
//                       id="input-group-dropdown-1"
//                       onChange={this.handleChange()}
//                     >
//                       <Dropdown.Item value="Meters">Meters</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Kilometers</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Centimeter </Dropdown.Item>
//                       <Dropdown.Item value="Meters">Millimeter</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Micrometer</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Nanometer</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Mile</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Yard</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Foot</Dropdown.Item>
//                       <Dropdown.Item value="Meters">Inch</Dropdown.Item>
//                     </DropdownButton>
//                     <FormControl
//                       aria-describedby="basic-addon1"
//                       placeholder={fromUnit}
//                       // value="fromValue"
//                       // name="fromValue"
//                       aria-label="From"
//                       onChange={this.handleChange}
//                     />
//                   </InputGroup>
//                 </Col>

//                 <Col md={2}>
//                   <h3>To</h3>
//                 </Col>

//                 <Col md={5}>
//                   <InputGroup>
//                     <FormControl
//                       placeholder={toUnit}
//                       aria-label="To"
//                       aria-describedby="basic-addon2"
//                     />

//                     <DropdownButton
//                       as={InputGroup.Append}
//                       variant="outline-secondary"
//                       title="To"
//                       id="input-group-dropdown-2"
//                     >
//                       <Dropdown.Item href="#">Meters</Dropdown.Item>
//                       <Dropdown.Item href="#">Kilometers</Dropdown.Item>
//                       <Dropdown.Item href="#">Centimeter </Dropdown.Item>
//                       <Dropdown.Item href="#">Millimeter</Dropdown.Item>
//                       <Dropdown.Item href="#">Micrometer</Dropdown.Item>
//                       <Dropdown.Item href="#">Nanometer</Dropdown.Item>
//                       <Dropdown.Item href="#">Mile</Dropdown.Item>
//                       <Dropdown.Item href="#">Yard</Dropdown.Item>
//                       <Dropdown.Item href="#">Foot</Dropdown.Item>
//                       <Dropdown.Item href="#">Inch</Dropdown.Item>
//                       {/* <Dropdown.Divider />
//                       <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
//                     </DropdownButton>
//                   </InputGroup>
//                 </Col>
//               </Row>

//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={1}> </Col>
//       </Row>
//     </Fragment>
//   );
// };

export default Length;
