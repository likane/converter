import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Sidebar from "./components/layout/Sidebar";
import Landing from "./components/layout/Landing";

import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Fragment>
      <Router>
        <Container>
          <Row>
            <Sidebar />
            <Route exact path="/" component={Landing} />
          </Row>
        </Container>
      </Router>
    </Fragment>
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
