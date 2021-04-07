import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import HotelIcon from '@material-ui/icons/Hotel';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import RoomIcon from '@material-ui/icons/Room';
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useEffect, useState } from 'react';


//need the starting long and lat
var calcProximity = (lat1, lon1, lat2, lon2) => {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}


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
        <RoomIcon fontSize="large" />
     </ListItemIcon>
    )
  }

}



const NearbyListItems = ({
	place,
	travelSoFarStops,
	stopButton,
	toggleStopButton,
	addStop,
  fetchNewRoute,
  type,
  locationFrom,
  locationTo, 
}) => {
  //console.warn('LOCATION FROM', locationFrom)
	
  
  return (
		<ListItem button>
      {selectTypeIcon(type)}
			<ListItemText
				primary={place.name}
				secondary={
					<div>
						Rating: {place.rating} <br />
						Price Level: {place.price_level} <br />
						Proximity from origin:
            
					</div>
				}
			/>
			<ListItemIcon>
				<AddBoxIcon fontSize="large" onClick={() => {
          var waypoint = {
            name: place.name,
            type: type,
            place_id: place.place_id,
            loc: `${place.geometry.location.lat},${place.geometry.location.lng}`
          }
          fetchNewRoute(waypoint)
        }} />
			</ListItemIcon>
		</ListItem>
	);
};

export default NearbyListItems;
