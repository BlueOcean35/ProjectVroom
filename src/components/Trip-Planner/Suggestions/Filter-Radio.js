import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function FilterRadioButtons() {
	return (
		<FormControl component="fieldset">
			<FormLabel component="legend">Filter by: </FormLabel>
			<RadioGroup row aria-label="position" name="position" defaultValue="top">
				<FormControlLabel
					value="price"
					control={<Radio color="primary" />}
					label="price"
					labelPlacement="top"
				/>
				<FormControlLabel
					value="proximity"
					control={<Radio color="primary" />}
					label="proximity"
					labelPlacement="top"
				/>
				<FormControlLabel
					value="rating"
					control={<Radio color="primary" />}
					label="rating"
					labelPlacement="top"
				/>
			</RadioGroup>
		</FormControl>
	);
}
