import React from 'react';
import { handle } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItineraryTest = () => {
  const {id} = useParams();
  return (
    <div>This is a test to see if a component will render! here are the params: {id}</div>
  )
};

export default ItineraryTest;