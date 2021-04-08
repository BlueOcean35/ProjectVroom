import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import HotelIcon from '@material-ui/icons/Hotel';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import ExploreIcon from '@material-ui/icons/Room';
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useEffect, useState } from 'react';


//need the starting long and lat


var selectTypeIcon = (type) => {

  if (type === 'food') {
    return (
      <ListItemIcon>
        <FastfoodIcon fontSize="large" />
      </ListItemIcon>
    )
  } else if (type === 'lodging') {
    return (
      <ListItemIcon>
        <HotelIcon fontSize="large" />
     </ListItemIcon>
    )
  } else if (type === 'fuel') {
    return (
      <ListItemIcon>
        <LocalGasStationIcon fontSize="large" />
     </ListItemIcon>
    )
  } else if (type === 'attractions') {
    return (
      <ListItemIcon>
        <ExploreIcon fontSize="large" />
     </ListItemIcon>
    )
  }

}



const NearbyListItems = ({
	place,
	travelSoFarStops,
	stopButton,
	addStop,
  fetchNewRoute,
  type,
  locationFrom,
  locationTo, 
}) => {  
  return (
		<ListItem button>
      {selectTypeIcon(type)}
			<ListItemText
				primary={place.name}
				secondary={
					<div>
						Rating: {place.rating} <br />
						Price Level: {place.price_level} <br />
						Proximity:{place.proximity.toString().slice(0,4)}mi from origin
					</div>
				}
			/>
			<ListItemIcon>
				<AddBoxIcon fontSize="large" onClick={() => {
          var waypoint = {
            name: place.name,
            type: type,
            place_id: place.place_id,
            loc: `${place.geometry.location.lat},${place.geometry.location.lng}`,
            proximityFromOrigin: place.proximity
          }
          fetchNewRoute(waypoint)
        }} />
			</ListItemIcon>
		</ListItem>
	);
};

export default NearbyListItems;
