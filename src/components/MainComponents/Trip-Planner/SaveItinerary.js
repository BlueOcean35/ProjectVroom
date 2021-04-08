import React, {useState} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import theme from '../../theme';
import {ThemeProvider} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles ({
  button: {

  }
})

axios.defaults.baseURL = `http://${process.env.IP_ADDRESS}:3000`;

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

      <Button  style={{ position: "fixed", left: "60px", bottom:" 10px", height:"65px", width:"500px", textDecoration: "none", color: "black", boxShadow: '0px 6px 8px 0px rgba(255,255,255,255.04)', margin: '3px auto'}} variant="contained" color="secondary">{id ? <Redirect to={`/Itinerary/${id}`} style={{height:"100%", width:"600px", textDecoration: "none", color: "white"}}/> : <div className="btn-itinerary" onClick={handleClick} style={{height:"100%", width:'100%', display: 'flex', justifyContent: "center", alignItems: "center"}}><h2>Save Itinerary</h2></div>}</Button>

    </ThemeProvider>

  )
};

export default SaveItinerary;
