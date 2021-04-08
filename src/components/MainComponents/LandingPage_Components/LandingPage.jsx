import React, {useState, useEffect} from 'react';
import clsx from "clsx";
import { Input, InputLabel, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, CssBaseline, Button, Tooltip, ThemeProvider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import axios from 'axios';
import theme from '../../theme';
import { Link } from "react-router-dom";



function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const drawerWidth = 600;

const useStyles = makeStyles((theme) => ({


	title: {
    flexGrow: 1,
    fontSize: "20px"

	},

	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 240,
  },

  link: {
    textDecoration: 'none',
    width: '100%',
    height: "100%",
    color: "#DB1200",
    '&:hover': {
      color: '#fff',
    },

  },
  buttonContainer: {
    height: '75px',
    width: `200px`,
  },
}));


let LandingPage = ({storeFrom, storeTo, submitAddressFrom, submitAddressTo, submitCoordinatesFrom, submitCoordinatesTo}) => {
  const classes = useStyles();

  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = (useState(''))

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleSelectFrom(from) {
      geocodeByAddress(from)
      .then((results) => {
        setAddressFrom(results[0].formatted_address)
        submitAddressFrom(results)
        return getLatLng(results[0])})
      .then((latLng) => {
        submitCoordinatesFrom(latLng)
    })
      .catch(error => console.error('Error', error));
  };

  function handleSelectTo(To) {
      geocodeByAddress(To)
      .then((results) => {
        setAddressTo(results[0].formatted_address)
        submitAddressTo(results)
        return getLatLng(results[0])
      })
      .then((latLng) => {
        submitCoordinatesTo(latLng)
        console.log(latLng)
    })
      .catch(error => console.error('Error', error));
  };

  function getCurrLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( function(position) {
        console.log(position)
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
         axios.get(`/maps/api/geocode/json?latlng=${lat},${lng}&sensor-false`).then(({data}) => {
          console.log(data)
          handleSelectFrom(data[0].formatted_address)
          setAddressFrom(data[0].formatted_address)})
      })
    }
  }


  return(
    <ThemeProvider theme={theme}>

      <div className="landingPage">
            <AppBar
            position="relative"
            style={{height: '80px', background:`linear-gradient(to right, #8e0e00, #1f1c18)`}}
            >
            <Toolbar >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                noWrap
                className={classes.title}
              >
              <a href="https://fontmeme.com/old-english-fonts/"><img src="https://fontmeme.com/permalink/210408/c4d47cc99a98e48ed869f59f25d94dbc.png" alt="old-english-fonts" border="0" /></a>

              </Typography>
              <div> Logo </div>
            </Toolbar>
          </AppBar>

        <div className="landing-page-interactions">

          <form id="landing-form" onSubmit={handleSubmit} className="landing-page-inputs" >
            <Tooltip title="use current location">
            <IconButton onClick={getCurrLocation} aria-label="current location"> <LocationOnIcon /> </IconButton>
            </Tooltip>

            <PlacesAutocomplete
              value={addressFrom}
              onChange={setAddressFrom}
              onSelect={handleSelectFrom}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <InputLabel  >From:
                      <Input className={classes.input}  {...getInputProps({
                            placeholder: "NYC",
                            required: true
                          })} />
                    </InputLabel>
                      <div className="autocomplete-dropdown-container">
                        {loading ? <div>Loading...</div> : null}
                        {suggestions.map((suggestion, i) => {
                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                          const style = suggestion.active
                            ? { backgroundColor: "#911E0B",cursor: 'pointer', color: "white",  }
                            : { backgroundColor: "#211C17", cursor: 'pointer', color: "white", };
                          return (
                            <div onClick={() => setAddressFrom(suggestion.description)} key={`from-${suggestion}-${i}`}
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                  </div>
                )}
            </PlacesAutocomplete>



            <PlacesAutocomplete
              value={addressTo}
              onChange={setAddressTo}
              onSelect={handleSelectTo}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <InputLabel  >To:
                    <Input  {...getInputProps({
                      placeholder: "LA",
                      required: true
                    })} />
                  </InputLabel>

                  <div className="autocomplete-dropdown-container">
                    {loading ? <div>Loading...</div> : null}
                    {suggestions.map((suggestion, i) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      const style = suggestion.active
                      ? { backgroundColor: "#911E0B",cursor: 'pointer', color: "white"}
                        : { backgroundColor: "#211C17", cursor: 'pointer', color: "white"};
                      return (
                        <div  onClick={() => setAddressTo(suggestion.description)} key={`to-${suggestion}-${i}`}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                )}
              </PlacesAutocomplete>
      </form>
      <Button style={{padding: 0}} form="landing-form" type="submit"  > {(storeFrom.formatted_address && storeTo.formatted_address) ? <Link to='/Dashboard' className={classes.link} >Let's Ride </Link> : <span>Let's Ride</span>}</Button>
      </div>

    </div>
    </ThemeProvider>
  )
}

export default LandingPage;