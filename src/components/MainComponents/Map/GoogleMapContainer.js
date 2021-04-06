import { connect, dispatch } from "react-redux";
import getNearby from '../../../actions/Trip-Planner/getNearby.js';
import GoogleMap from "./google-map.js";

var mapStoreToProps = (state) => ({
	nearbyFood: state.nearbyFood,
  addressObjFrom: state.addressObjFrom,
  addressObjTo: state.addressObjTo,
  waypoints: state.waypoints
});

var mapDispatchToProps = (dispatch) => ({
	getNearby: (lat, lng) => {
		dispatch(getNearby(lat, lng));
	}
});

var GoogleMapContainer = connect(mapStoreToProps, mapDispatchToProps)(GoogleMap);

export default GoogleMapContainer;