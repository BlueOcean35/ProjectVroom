import React from 'react';

const Example = ({count, increaseCount}) => {
  const incrementCounter = () => {
    increaseCount();
  }

  return (
    <button onClick={incrementCounter} id="counter">{count}</button>
  )
};

export default Example;