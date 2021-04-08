import React from "react";
import { typography } from '@material-ui/system';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Input, InputLabel, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, CssBaseline, Button, Tooltip, Link as MuiLink, } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import NearbyTabsContainer from "./Suggestions/Nearby-Tabs-Container.js";
import NearbyTabs from "./Suggestions/Nearby-Tabs.js";
import SuggestionsListItems from "./Suggestions/List-Items.js";
import GoogleMapContainer from "../Map/GoogleMapContainer.js";
import SaveItineraryContainer from './SaveItineraryContainer.js';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<MuiLink color="inherit" href="https://material-ui.com/">
				Big Bad Boston Bikers
			</MuiLink>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const drawerWidth = 600;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		height: "100vh",
		width: "100vw"
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
		padding: "0 8px",
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "41px",
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
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		background: `linear-gradient(to right, #8e0e00, #1f1c18)`,
	},
	menuButton: {
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
	tabs: {
		background: `linear-gradient(to right, #8e0e00, #1f1c18)`
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
	primaryDestination: {
		fontWeight: 'bold',
		color: 'red'
	}
}));

export default function Dashboard() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	//this is where we define the drawer close logic
	const handleDrawerClose = () => {
		// setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
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
						BIG BAD BOSTON BIKERS
					</Typography>
					<div> This is where you add the logo </div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
				</div>
				<Divider />
				<>
					Your travel so far list contained in the div below called
					{"<List>{mainListItems}</List> "}
					<List>{mainListItems()}</List>
					<List>{secondaryListItems}</List>
					<Divider  />
					<NearbyTabsContainer  />
        	<SaveItineraryContainer />
				</>
			</Drawer>
			<main className={classes.content}>
				{/* <div className={classes.appBarSpacer} /> */}
				<GoogleMapContainer />
			</main>
		</div>
	);
}
