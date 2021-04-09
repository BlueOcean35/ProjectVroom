import React from "react";
import Box from '@material-ui/core/Box';
import { typography } from '@material-ui/system';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import FromToItem from './listItemComponents/FromToItem.jsx';
import StopItem from './listItemComponents/StopItem.jsx';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core';
import theme from '../../theme';
import FromToItemContainer from '../../../containers/FromToItemContainer.js';



const useStyles = makeStyles((theme) => ({

	listText: {
		float: 'left',
		marginLeft: '16px',
		marginRight: '16px',
		marginBottom: '16px'
	},
	button: {
		width: "35%"
	}
}));

export default function mainListItems (props) {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
	<div style={{overflow:"scroll"}}>
	<Typography variant = 'h5' component = 'h2' className = {classes.listText} >Your Trip Details</Typography>
		<FromToItemContainer type = 'from'  />


		{

			props.waypoints.map((element, index) => {
				return (<StopItem stopType = {element.type} address = {element.name} commentFunc = {props.updateWaypointComment} index = {index} removeFunc = {props.removeWaypoint} comment = {element.comment} />)
			})
		}



		<FromToItemContainer type = 'to' />



	</div>
	</ThemeProvider>
	)
	// BUG: this curly bracket needed to be indented!
};

