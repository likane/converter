import React, { Fragment } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
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
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
                        />
                      </InputGroup>
                    </Col>
                    <Col md={2}>
                      <select
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>

                      <h3> To </h3>

                      <select
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </Col>
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
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1} />
        </Row>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* Pick your favorite flavor: */}
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
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
