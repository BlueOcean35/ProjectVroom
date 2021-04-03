import React, { Fragment } from "react";
import Example from "../containers/exampleCounterContainer.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = ({ name }) => {
  return (
    <>
      <Router>
        <h1>How many times can you say "Big Bad Boston Bikers" fast?</h1>
        <Example />
      </Router>
    </>
  );
};

export default App;
