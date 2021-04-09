import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import LandingPageContainer from "../containers/LandingPageContainer";

import Dashboard from "./MainComponents/Trip-Planner/Dashboard";
import ItineraryTest from "./MainComponents/Itinerary/ItineraryTest";

const App = ({ name }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPageContainer />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>

          <Route exact path="/itinerary/:id">
            <ItineraryTest />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
