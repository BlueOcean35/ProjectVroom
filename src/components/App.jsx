import React, {Fragment} from "react";
import Example from '../containers/exampleCounterContainer.js';

const App = ({name}) => {
  return (
    <Fragment>
      <h1>How many times can you say "Big Bad Boston Bikers" fast?</h1>
      <Example />
    </Fragment>
  );
}

export default App;