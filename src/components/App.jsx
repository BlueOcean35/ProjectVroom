import React, { Fragment } from "react";
import Example from "../containers/exampleCounterContainer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./MainComponents/LandingPage_Components/LandingPage.jsx";
import Map from "./MainComponents/Map_Components/Map.jsx";
import Itinerary from "./MainComponents/Itinerary_Components/Itinerary.jsx";
import Banner from "./Banner/Banner.jsx";

const App = ({ name }) => {
  return (
    <>
      <Router>
        <h1>How many times can you say "Big Bad Boston Bikers" fast?</h1>
        {/* component={ LandingPage }  */}

        <Switch>
          <Route path="/" exact>
            <Banner />
            <LandingPage exampleProps={{ example: true }} />
            {/* ^ this is v5 react router way to pass props without a cb */}
          </Route>

          <Route path="/map" exact>
            <Banner />
            <Map exampleProps={{ example: true }} />
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
