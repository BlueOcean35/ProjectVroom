import React, {useState, useEffect} from 'react';
import clsx from "clsx";
import { Input, InputLabel, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, CssBaseline, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
// import MapContainer from "./Map.js";
// import GoogleMaps from "./Map-Pure-JS";
import { store } from '../../store';
import axios from 'axios';


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
	root: {
		display: "flex",
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	appBar: {
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: "10px",
    background: `linear-gradient(to right, #8e0e00, #1f1c18)`
	},

	rideButton: {
    marginTop: '15px',
    height: '75px',
    width: `35%`,
    fontSize: "30px",
    backgroundColor: "#8e0e00",
    color: '#fff',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#211C17',
      backgroundColor: "#DB1200"
    },
    transition: "all 0.5s"


  },
  Tooltip: {
    marginRight: '10px',
    color: 'white',
    backgroundColor: "#8e0e00",
    '&:hover': {
      opacity: `0.9`,
      color: '#211C17',
      backgroundColor: "#DB1200"
    },
    transition: "all 0.4s",
  },
	title: {
    flexGrow: 1,
    fontFamily: 'Metal Mania'
	},

	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto",
  },
  inputLabel: {
    marginRight: '10px',
    background: '#211C17',
    color:'#fff',
    paddingLeft: '10px',
    fontSize: '20px',
    boxShadow: '2px 10px -14px 14px #FFF'
  },
  input: {
    marginRight: '10px',
    marginLeft: '10px',
    color:'#fff',
    height: '55px',
    fontSize: '20px',
    '&:after': {
      borderBottom: '2px solid #DB1200',
    },
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
}));

// to format the names of the cities
// x = x.split(', ')
// x[0] = x[0].split(' ')
// [0] = x[0].join('+')
//x = `${x[0]},${x[1]}`

let LandingPage = ({submitAddressFrom, submitAddressTo, submitCoordinatesFrom, submitCoordinatesTo}) => {
  const classes = useStyles();

  const [addressFrom, setAddressFrom] = useState('');
  const [addressTo, setAddressTo] = (useState(''))

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleSelectFrom(from) {
      geocodeByAddress(from)
      .then((results) => {

        submitAddressFrom(results)
        console.log(results)
        return getLatLng(results[0])})
      .then((latLng) => {
        submitCoordinatesFrom(latLng)
        console.log(latLng)
    })
      .catch(error => console.error('Error', error));
  };

  function handleSelectTo(To) {
      geocodeByAddress(To)
      .then((results) => {
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
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position)
        return axios.get(`http://maps.googleapis.com/maps/api/geocode/libraries&json?latlng=` + position.coords.latitude + "," + position.coords.longitude + "&sensor-false&"+ `key=[KEY GOES HERE]`).then((data) => {
          console.log(data)
          // 1. set the reverse geocode address to be the state in our redux store
          // 2. auto complete our from field
      }).catch(err => console.log(err))
      })
    }
  }


  return(
    <div className="landingPage">

    <AppBar
    position="relative"
    className={clsx(classes.appBar)}
  >
    <Toolbar className={classes.toolbar}>
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Big Bad Boston Bikers
      </Typography>
      <div> Logo </div>
    </Toolbar>
  </AppBar>

  <div className="landing-page-interactions">

  <form id="landing-form" onSubmit={handleSubmit} className="landing-page-inputs" >
    <Tooltip className={classes.Tooltip} title="use current location">
    <IconButton onClick={getCurrLocation} aria-label="current location"> <LocationOnIcon /> </IconButton>
    </Tooltip>

    <PlacesAutocomplete
      value={addressFrom}
      onChange={setAddressFrom}
      onSelect={handleSelectFrom}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <InputLabel  className={classes.inputLabel} >From:
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
          <InputLabel  className={classes.inputLabel} >To:
            <Input className={classes.input} {...getInputProps({
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

 <Button form="landing-form" type="submit" className={classes.rideButton}>Let's Ride</Button>

  </div>



    </div>
  )

}

export default LandingPage;