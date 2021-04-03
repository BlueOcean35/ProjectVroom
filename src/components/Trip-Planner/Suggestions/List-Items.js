import React from "react";
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
// import nearbyPlaces from "../../../../sample-data/nearby-places.js";

//this did not work how expected
const NearbyListItems = ({ listofplaces }) => {
	return (
		<>
			{listofplaces.map((p) => {
				<ListItem button>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary={p.name} />
				</ListItem>;
			})}
		</>
	);
};

export default NearbyListItems;

// const SuggestionsListItems = (
// 	<div>
// 		<ListItem button>
// 			<ListItemIcon>
// 				<DashboardIcon />
// 			</ListItemIcon>
// 			<ListItemText primary="Your Trip Details" />
// 		</ListItem>
// 		<ListItem button>
// 			<ListItemIcon>
// 				<ShoppingCartIcon />
// 			</ListItemIcon>
// 			<ListItemText primary="From: Boston" />
// 		</ListItem>
// 		<ListItem button>
// 			<ListItemIcon>
// 				<PeopleIcon />
// 			</ListItemIcon>
// 			<ListItemText primary="Stop: Ralph Waldo Emerson's House" />
// 		</ListItem>
// 		<ListItem button>
// 			<ListItemIcon>
// 				<BarChartIcon />
// 			</ListItemIcon>
// 			<ListItemText primary="Stop: Key West" />
// 		</ListItem>
// 		<ListItem button>
// 			<ListItemIcon>
// 				<LayersIcon />
// 			</ListItemIcon>
// 			<ListItemText primary="Destination: Miami" />
// 		</ListItem>
// 	</div>
// );

// export default SuggestionsListItems;
