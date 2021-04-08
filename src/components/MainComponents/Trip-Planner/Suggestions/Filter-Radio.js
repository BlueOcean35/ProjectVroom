import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ({
  radio: {
		color: "white",
    '&$checked': {
      color: '#DB1200'
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

export default function FilterRadioButtons() {
	const classes = useStyles();
	return (
		<FormControl component="fieldset">
			<FormLabel classes={{root: classes.filter, focused: classes.focused}} component="legend">Filter by: </FormLabel>
			<RadioGroup row aria-label="position" name="position" defaultValue="top">
				<FormControlLabel
					value="price"
					control={<Radio disableRipple classes={{root: classes.radio, checked:classes.checked}} color="primary" />}
					label="price"
					labelPlacement="top"
				/>
				<FormControlLabel
					value="proximity"
					control={<Radio disableRipple classes={{root: classes.radio, checked:classes.checked}} color="primary" />}
					label="proximity"
					labelPlacement="top"
				/>
				<FormControlLabel
					value="rating"
					control={<Radio disableRipple classes={{root: classes.radio, checked:classes.checked}} color="primary" />}
					label="rating"
					labelPlacement="top"
				/>
			</RadioGroup>
		</FormControl>
	);
}
