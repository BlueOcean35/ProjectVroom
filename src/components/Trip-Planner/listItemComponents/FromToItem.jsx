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


export default function FromToItem (props) {

  var listText;

  if (props.type === 'from') {
    listText = `From: ${props.from.address}`;
  } else if (props.type === 'to') {
    listText = `To: ${props.to.address}`;
  }

	return (
    <div>
      <ListItem >
        <ListItemIcon>
          <RoomIcon />
        </ListItemIcon>
        <Typography variant= 'body1' >
          <Box fontWeight = 'fontWeightBold'>{listText}</Box>
        </Typography>
      </ListItem>


    </div>
	  )
	};


