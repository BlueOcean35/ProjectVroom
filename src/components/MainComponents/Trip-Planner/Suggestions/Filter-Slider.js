import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {ThemeProvider} from "@material-ui/core";
import theme from '../../../theme';

const useStyles = makeStyles({
	root: {
		width: 300
	},
	slider: {
		color: "#211C17"
	}
});

function valuetext(value) {
	return `${value}°C`;
}

export default function FilterSlider() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
				<div className={classes.root}>
			<Typography id="discrete-slider-small-steps" gutterBottom></Typography>
			<Slider
			className={classes.slider}
				defaultValue={0.00000005}
				getAriaValueText={valuetext}
				aria-labelledby="discrete-slider-small-steps"
				step={0.00000001}
				marks
				min={-0.00000005}
				max={0.0000001}
				valueLabelDisplay="auto"
			/>
		</div>
		</ThemeProvider>

	);
}
