import React, { Fragment } from "react";
import Example from "../containers/exampleCounterContainer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Banner from "./MainComponents/Banner/Banner.jsx";
import LandingPage from "./MainComponents/LandingPage_Components/LandingPage";
import Dashboard from './MainComponents/Trip-Planner/Dashboard';
import Itinerary from "./MainComponents/Itinerary_Components/Itinerary.jsx";

const App = ({ name }) => {
  return (
    <>
      <Router>
        <h1>How many times can you say "Big Bad Boston Bikers" fast?</h1>
        {/* component={ LandingPage }  */}

        <Switch>
          <Route path="/" exact>
            <Banner />
            <LandingPage />
          </Route>

          <Route path="/map" exact>
            {/* <Banner /> */}
            <Dashboard />
          </Route>

          <Route path="/itinerary/:id" exact>
            <Itinerary exampleProps={{ example: true }} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
