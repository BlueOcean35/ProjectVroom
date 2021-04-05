import React from "react";
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
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AddBoxIcon from "@material-ui/icons/AddBox";

const calcProxmity = () => {};

const NearbyListItems = ({
	place,
	travelSoFarStops,
	stopButton,
	toggleStopButton,
	addStop,
}) => {
	return (
		<ListItem button>
			<ListItemIcon>
				<FastfoodIcon fontSize="large" />
			</ListItemIcon>
			<ListItemText
				primary={place.name}
				secondary={
					<div>
						Rating: {place.rating} <br />
						Price Level: {place.price_level} <br />
						Proximity:
					</div>
				}
			/>
			<ListItemIcon>
				<AddBoxIcon fontSize="large" onClick={toggleStopButton} />
			</ListItemIcon>
		</ListItem>
	);
};

export default NearbyListItems;
