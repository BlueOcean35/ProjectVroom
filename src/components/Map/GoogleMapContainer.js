import { connect, dispatch } from "react-redux";
import getNearby from "../../actions/Trip-Planner/getNearby.js";
import GoogleMap from "./tk.js";

var mapStoreToProps = (state) => ({
	nearbyFood: state.nearbyFood,
	positionMarker: [],
  suggestionMarkers: [],
  center: {lat: 42.3701, lng: -71.0589},
  map: null,
  service: null,
  response: null,
  origin:'Boston',
  destination: 'New York',
  waypoints: []
});

var mapDispatchToProps = (dispatch) => ({
	getNearby: (lat, lng) => {
		dispatch(getNearby(lat, lng));
	}
});

var GoogleMapContainer = connect(mapStoreToProps, mapDispatchToProps)(GoogleMap);

export default GoogleMapContainer;