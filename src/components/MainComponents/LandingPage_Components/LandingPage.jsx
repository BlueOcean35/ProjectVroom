import React, {Fragment, useState} from 'react';
import clsx from "clsx";
import { Input, InputLabel, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link, CssBaseline, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

// import MapContainer from "./Map.js";
// import GoogleMaps from "./Map-Pure-JS";

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
	toolbar: {
    paddingRight: 24,
     // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: "10px",
    background: `linear-gradient(to right, #8e0e00, #1f1c18)`
	},
	appBarShift: {
		width: `100%`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	rideButton: {
    marginTop: '15px',
    height: '80px',
    width: `35%`,
    fontSize: "30px",
    background: `linear-gradient(#8e0e00 40%, #1f1c18)`,
    color: '#fff',
    fontFamily: 'Metal Mania',
    '&:hover': {
      opacity: `0.9`,

    }

  },
	menuButtonHidden: {
		display: "none",
	},
	title: {
    flexGrow: 1,
    fontFamily: 'Metal Mania'
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9),
		},
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
    marginRight: '5px',
    color:'#fff',
    height: '55px',
    fontSize: '20px'
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


let LandingPage = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    from: "",
    to: ""
    })

  function handleSubmit(evt) {
    evt.preventDefault();

  }

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log('from: ', state.from)
    console.log('to: ', state.to)
  }
  return(
    <div className="landingPage">

    <AppBar
    position="relative"
    className={clsx(classes.appBar, open && classes.appBarShift)}
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
   <InputLabel  className={classes.inputLabel} >From: <Input name="from" value={state.from} onChange={handleChange} className={classes.input} placeholder= "NYC" /></InputLabel>
   <InputLabel className={classes.inputLabel} >To: <Input name="to" value={state.to} onChange={handleChange} className={classes.input} placeholder= "LA" /></InputLabel>
 </form>
 <Button form="landing-form" type="submit" className={classes.rideButton}>Let's Ride</Button>

  </div>



    </div>
  )

}

export default LandingPage;