import React, {Fragment} from "react";
import Example from './exampleCounterContainer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import LandingPageContainer from "../containers/LandingPageContainer";
import Dashboard from "./MainComponents/Trip-Planner/Dashboard";
import ItineraryContainer from "./MainComponents/Itinerary/itinerary.jsx"

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

          <Route path="/itinerary/:id" exact >
            <ItineraryContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
