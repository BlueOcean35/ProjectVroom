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



const useStyles = makeStyles((theme) => ({

	listText: {
		float: 'left',
		marginLeft: '16px',
		marginRight: '16px',
		marginBottom: '16px'
	}
}));

export function mainListItems () {
	const classes = useStyles();
	return (
	<div>

	<Typography variant = 'h5' component = 'h2' className = {classes.listText} >Your Trip Details</Typography>
		<FromToItem type = 'from' from = {{address: 'Boston'}} />
		<StopItem stopType = 'food' address = "Ralph Waldo Emerson's House"/>



		<FromToItem type = 'to' to = {{address: 'Miami'}} from = {{address: 'Boston'}} />

		<ListItem>
			  <Button variant="contained" color = "secondary">
        Add New Stop
      </Button>
		</ListItem>
	</div>
	)
	};

export const secondaryListItems = (
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
);
