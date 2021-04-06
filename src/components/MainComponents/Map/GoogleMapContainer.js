import { connect, dispatch } from "react-redux";
import getNearby from "../Trip-Planner/getNearby.js";
import GoogleMap from "./google-map.js";

var mapStoreToProps = (state) => ({
	nearbyFood: state.nearbyFood
});

var mapDispatchToProps = (dispatch) => ({
	getNearby: (lat, lng) => {
		dispatch(getNearby(lat, lng));
	}
});

var GoogleMapContainer = connect(mapStoreToProps, mapDispatchToProps)(GoogleMap);

export default GoogleMapContainer;