import { connect, dispatch } from "react-redux";
import SaveItinerary from "./SaveItinerary.js";

var mapStoreToProps = (state) => ({
	start: state.addressObjFrom,
	end: state.addressObjTo,
	waypoints: state.waypoints
});

var SaveItineraryContainer = connect(
	mapStoreToProps,
	null
)(SaveItinerary);

export default SaveItineraryContainer;