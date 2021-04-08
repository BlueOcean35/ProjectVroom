import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import theme from '../../theme';
import {ThemeProvider} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles ({
  button: {

  }
})

const SaveItinerary = ({start, end, waypoints}) => {
  const [id, setId] = useState(null);
	const classes = useStyles();
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
    <ThemeProvider theme={theme}>
   <Button  style={{height:"80px", width:"90%", textDecoration: "none", color: "black", margin: "10px auto",boxShadow: '0px 6px 8px 0px rgba(255,255,255,255.04)'}} variant="contained" color="secondary">{id ? <Link to={`/Itinerary/${id}`} >Save Itinerary</Link> : <div onClick={handleClick} style={{height:"100%", width:'600px'}}>Save Itinerary</div>}</Button>
    </ThemeProvider>

  )
};

export default SaveItinerary;
