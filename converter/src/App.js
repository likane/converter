import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Sidebar from "./components/layout/Sidebar";
import Landing from "./components/layout/Landing";
import Length from "./components/Length";
import Temperature from "./components/Temperature";
import Volume from "./components/Volume";
import Weight from "./components/Weight";

import "./App.css";
import "./styles/length.css";
import "./styles/landing.css";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Fragment>
        {/* <Container> */}
        <Row className="dashboardBody">
          <Col md={2} className="menuLanding">
            <Sidebar />
          </Col>
          <Col md={10}>
            <Route exact path="/" component={Landing} />
            <switch>
              <Route exact path="/length" component={Length} />
              <Route exact path="/Temperature" component={Temperature} />
              <Route exact path="/volume" component={Volume} />
              <Route exact path="/weight" component={Weight} />
            </switch>
          </Col>
        </Row>
        {/* </Container> */}
      </Fragment>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
