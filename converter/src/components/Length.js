import React, { Fragment, useState } from "react";
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
import { Formik } from "formik";

// {
//   fromUnit = "from",
//   toUnit = "to",
//   fromValue = 0,
//   toValue = 0
// }
const Length = () => {
  return (
    <Fragment>
      <Row className="lengthFragment">
        <Col md={1} />

        <Col md={10}>
          <Card>
            <Card.Header>Length Converter</Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Row>
                <Col md={5} />

                <Col md={2}>
                  <h3>To</h3>
                </Col>

                <Col md={5} />
              </Row>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={1}> </Col>
      </Row>
    </Fragment>
  );
};

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
