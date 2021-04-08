import { connect, dispatch } from "react-redux";
import NearbyTabs from "./Nearby-Tabs.js";

var mapStoreToProps = (state) => ({
	nearbyFood: state.nearbyFood,
	nearbyLodging: state.nearbyLodging,
	nearbyAttractions: state.nearbyAttractions,
	nearbyFuel: state.nearbyFuel
});


var NearbyTabsContainer = connect(
	mapStoreToProps,
	null
)(NearbyTabs);

export default NearbyTabsContainer;