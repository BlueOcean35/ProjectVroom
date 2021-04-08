import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ({
  radio: {
		color: "#211C17",
    '&$checked': {
      color: '#DB1200'
		},
		"&:hover" : {
			color: "#fff",
			backgroundColor: '#DB1200'
		}
	},
	filter: {
		"&$focused": {
			color: "#fff"
		}
	},
	focused: {},
  checked: {}
})

export default function FilterRadioButtons({
  nearbyFood,
  filterByPrice,
  filterByRating,
  filterByProximity,
  locationFrom,
})

{
	const classes = useStyles();

  // //console.warn('NEARBY FOOD', nearbyFood);

	return (
		<FormControl component="fieldset">
			<FormLabel classes={{root: classes.filter, focused: classes.focused}} component="legend">by: </FormLabel>
			<RadioGroup row aria-label="position" name="position" defaultValue="top">
				<FormControlLabel
					value="price"
					control={<Radio disableRipple classes={{root: classes.radio, checked:classes.checked}} color="primary" />}
					label="price"
					labelPlacement="top"
          onClick = {filterByPrice}
				/>
				<FormControlLabel
					value="proximity"
					control={<Radio disableRipple classes={{root: classes.radio, checked:classes.checked}} color="primary" />}
					label="proximity"
					labelPlacement="top"
          onClick = {filterByProximity}
				/>
				<FormControlLabel
					value="rating"
					control={<Radio disableRipple classes={{root: classes.radio, checked:classes.checked}} color="primary" />}
					label="rating"
					labelPlacement="top"
          onClick = {filterByRating}
				/>
			</RadioGroup>
		</FormControl>
	);
}
