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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class StopItem extends React.Component  {
  constructor(props) {
    super(props)
  }

  render () {
    var icons = {
      food: FastfoodIcon,
      lodging: HotelIcon,
      fuel: LocalGasStationIcon,
      shopping: ShoppingCartIcon
    }
    var StopIcon ;

    if (icons[this.props.stopType] === undefined) {
      StopIcon = ExploreIcon;
    } else {
      StopIcon = icons[this.props.stopType]
    }

    return (
      <div style = {{paddingLeft: '2px'}}>
        <ListItem >
          <ListItemIcon>
            <StopIcon style= {{fontSize: '1.40rem' }} />
          </ListItemIcon>
          <ListItemText primary={<div><span>Stop: {this.props.address}</span> <br></br> <span style = {{fontSize: '.8rem', fontStyle: 'italic' }}>{this.props.comment}</span></div>} />
        </ListItem>
      </div>
	  )
  }
};


