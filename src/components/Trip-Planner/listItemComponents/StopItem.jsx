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
import HotelIcon from '@material-ui/icons/Hotel';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import ExploreIcon from '@material-ui/icons/Explore';


export default function StopItem (props) {

  var listText;




  var icons = {
    food: FastfoodIcon,
    lodging: HotelIcon,
    fuel: LocalGasStationIcon
  }

  var StopIcon ;

  if (icons[props.stopType] === undefined) {
    StopIcon = ExploreIcon;
  } else {
    StopIcon = icons[props.stopType]
  }

	return (
    <div>
     <ListItem >
			<ListItemIcon>
				<StopIcon />
			</ListItemIcon>
			<ListItemText primary={`Stop: ${props.address}`} />
		</ListItem>


    </div>
	  )
	};


