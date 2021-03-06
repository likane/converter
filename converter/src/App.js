import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

//import logo from "./logo.svg";
import Sidebar from "./components/layout/Sidebar";
import Landing from "./components/layout/Landing";
import Length from "./components/Length";
import Temperature from "./components/Temperature";
import Volume from "./components/Volume";
import Area from "./components/Area";
import Weight from "./components/Weight";

// import "./App.css";
// import "./styles/length.css";
// import "./styles/landing.css";
import "./styles/app.css";
//import { Row, Col } from "react-bootstrap";

const trackingId = "UA-146619496-1";

ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  // initializeReactGA() {
  //   ReactGA.initialize("UA-146619496-1");
  //   ReactGA.pageview("/index");
  // }

  return (
    <Router>
      <Fragment>
        {/* <Container> */}
        {/* <Row className="dashboardBody"> */}
        <Sidebar />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/length" component={Length} />
          <Route exact path="/Temperature" component={Temperature} />
          <Route exact path="/volume" component={Volume} />
          <Route exact path="/Area" component={Area} />
          <Route exact path="/weight" component={Weight} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
