import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SaveItinerary = ({start, end, waypoints}) => {
  const [id, setId] = useState(null);

  const handleClick = () => {
    axios.post('/db', {
      start,
      end,
      waypoints
    })
      .then(({data}) => {
        console.log(data);
        setId(data._id);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <div style={{height: "100%", width: "600px"}}>
   <Button variant="contained" color="secondary">{id ? <Link to={`/Itinerary/${id}`} style={{height:"100%", width:"600px", textDecoration: "none", color: "white"}}>Save Itinerary</Link> : <div onClick={handleClick} style={{height:"100%", width:'600px'}}>Save Itinerary</div>}</Button>
    </div>

  )
};

export default SaveItinerary;
