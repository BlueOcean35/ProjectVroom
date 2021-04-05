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
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CreateIcon from '@material-ui/icons/Create';


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

    <Tooltip title={<span style = {{fontSize: '15px'}}>Write Comment</span>} >
      <IconButton aria-label = 'write-comment'>
        <CreateIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title={<span style = {{fontSize: '15px'}}>Remove Stop</span>} >
      <IconButton aria-label = 'remove-stop'>
        <RemoveCircleIcon />
      </IconButton>
    </Tooltip>


		</ListItem>


    </div>
	  )
	};


