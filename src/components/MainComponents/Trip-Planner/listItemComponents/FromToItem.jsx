import React from "react";
import Box from '@material-ui/core/Box';
import { typography } from '@material-ui/system';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import RoomIcon from '@material-ui/icons/Room';


export default function FromToItem (props) {

  var listText;

  if (props.type === 'from') {
    listText = `From: ${props.storeFrom.formatted_address}`;
  } else if (props.type === 'to') {
    listText = `To: ${props.storeTo.formatted_address}`;
  }

	return (
    <div>
      <ListItem >
        <ListItemIcon>
          <RoomIcon style= {{fontSize: '1.75rem' }} />
        </ListItemIcon>
        <Typography variant= 'body1' >
          <Box style={{color: "#fff"}} fontWeight = 'fontWeightBold' fontSize = '1.35rem'>{listText}</Box>
        </Typography>
      </ListItem>


    </div>
	  )
	};


