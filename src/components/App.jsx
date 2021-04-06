import React, { Fragment } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import LandingPage from "./MainComponents/LandingPage_Components/LandingPage";
import Dashboard from "./MainComponents/Trip-Planner/Dashboard";
import Itinerary from "./MainComponents/Itinerary_Components/Itinerary.jsx";

const App = ({ name }) => {
  return (
    <>
      <Router>
        {/* <h1>How many times can you say "Big Bad Boston Bikers" fast?</h1> */}
        {/* component={ LandingPage }  */}

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>

          <Route exact path="/itinerary/:id">
            <Itinerary exampleProps={{ example: true }} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
