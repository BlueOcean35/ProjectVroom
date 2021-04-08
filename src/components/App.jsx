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
import ItineraryTest from "./Itinerary/ItineraryTest.js";


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
           {/* a component will be here when ready */}
           <ItineraryTest/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
