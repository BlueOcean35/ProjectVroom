import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FilterSlider from "./Filter-Slider.js";
import FilterRadioButtons from "./Filter-Radio.js";
// import nearbyPlaces from "../../../../sample-data/nearby-places.js";
import NearbyListItems from "./List-Items.js";
import SuggestionsListItemsContainer from "./List-Items-Container.js";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#8D0E00",
		color: "white"
	},
}));

export default function NearbyTabs({nearbyFood, nearbyFuel, nearbyAttractions, nearbyLodging}) {

	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<Tab label="Food" {...a11yProps(0)} />
					<Tab label="Lodging" {...a11yProps(1)} />
					<Tab label="Attractions" {...a11yProps(2)} />
					<Tab label="Fuel" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} >
				Food <br />
				<FilterRadioButtons />
				<FilterSlider />
				<List>
					{nearbyFood.map((p) => {
						return <SuggestionsListItemsContainer place={p} key={p.place_id} />;
					})}
				</List>
			</TabPanel>
			<TabPanel value={value} index={1}>
				Lodging <br />
				<FilterRadioButtons />
				<FilterSlider />
				<List>
					{nearbyLodging.map((p) => {
						return <SuggestionsListItemsContainer place={p} key={p.place_id} />;
					})}
				</List>
			</TabPanel>
			<TabPanel value={value} index={2}>
				Attractions <br />
				<FilterRadioButtons />
				<FilterSlider />
				<List>
					{nearbyAttractions.map((p) => {
						return <SuggestionsListItemsContainer place={p} key={p.place_id} />;
					})}
				</List>
			</TabPanel>
			<TabPanel value={value} index={3}>
				Fuel <br />
				<FilterRadioButtons />
				<FilterSlider />
				<List>
					{nearbyFuel.map((p) => {
						return <SuggestionsListItemsContainer place={p} key={p.place_id} />;
					})}
				</List>
			</TabPanel>
		</div>
	);
}
