import React from 'react';
import axios from 'axios';

const SaveItinerary = ({start, end, waypoints}) => {

  const handleClick = () => {
    axios.post('/db', {
      start,
      end,
      waypoints
    })
      .then(({data}) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <span onClick={handleClick} style={{height:"100%", width:"100%"}}>Save Itinerary</span>
  )
};

export default SaveItinerary;