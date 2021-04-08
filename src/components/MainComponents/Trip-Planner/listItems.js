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
	}
}));

export default function mainListItems (props) {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
	<div>
	<Typography variant = 'h5' component = 'h2' className = {classes.listText} >Your Trip Details</Typography>
		<FromToItemContainer type = 'from'  />
			{

				props.waypoints.map((element, index) => {
					return (<StopItem stopType = {element.type} address = {element.name} index = {index} removeFunc = {props.removeWaypoint} />)
				})
			}
		<FromToItemContainer type = 'to' />

		<ListItem>
			  <Button variant="contained" color = "secondary" onClick = {() => {
					props.fetchNewRoute({
							name: 'Albany',
							type: 'food', //curent type we're in
							loc: `33.9071676,-118.0944974`,
							place_id: '12345',
					})
				}}>
        Add New Stop
      </Button>
			</ListItem>
	</div>
	</ThemeProvider>
	)
	};

export const secondaryListItems = (
	<ThemeProvider theme={theme}>
	<div>
		<ListSubheader inset>Suggestions</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Current month" className = {'primaryDestination'}/>
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Last quarter" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Year-end sale" />
		</ListItem>

	</div>
	</ThemeProvider>

);
