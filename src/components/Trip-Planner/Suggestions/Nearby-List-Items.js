import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AddBoxIcon from "@material-ui/icons/AddBox";

const calcProxmity = () => {};

const NearbyListItems = ({
	place,
	travelSoFarStops,
	stopButton,
	toggleStopButton,
	addStop,
  fetchNewRoute
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
				<AddBoxIcon fontSize="large" onClick={() => {
          var waypoint = `${place.geometry.location.lat},${place.geometry.location.lng}`
          console.log(waypoint);
          fetchNewRoute("New+York,NY","Boston,MA", waypoint)
        }} />
			</ListItemIcon>
		</ListItem>
	);
};

export default NearbyListItems;
