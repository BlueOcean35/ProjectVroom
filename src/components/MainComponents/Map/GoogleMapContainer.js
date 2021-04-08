import { connect, dispatch } from "react-redux";
import getNearby from '../../../actions/Trip-Planner/getNearby.js';
import fetchNewRoute from '../../../actions/Trip-Planner/fetchNewRoute.js';
import GoogleMap from "./google-map.js";

var mapStoreToProps = (state) => ({
  addressObjFrom: state.addressObjFrom,
  addressObjTo: state.addressObjTo,
  waypoints: state.waypoints
});

var mapDispatchToProps = (dispatch) => ({
	getNearby: (lat, lng) => {
		dispatch(getNearby(lat, lng));
	},
  fetchNewRoute: (newWaypoint) => {
    dispatch(fetchNewRoute(newWaypoint))
  }
});

var GoogleMapContainer = connect(mapStoreToProps, mapDispatchToProps)(GoogleMap);

export default GoogleMapContainer;