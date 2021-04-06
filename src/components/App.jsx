import React, {Fragment} from "react";
import Example from './exampleCounterContainer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import LandingPage from "./MainComponents/LandingPage_Components/LandingPage";
import Dashboard from "./MainComponents/Trip-Planner/Dashboard";

const App = ({ name }) => {
  return (
    <>
      <Router>
        {/* <h1>How many times can you say "Big Bad Boston Bikers" fast?</h1> */}
        {/* component={ LandingPage }  */}

        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>

          <Route exact path="/itinerary/:id">
           {/* a component will be here when ready */}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
