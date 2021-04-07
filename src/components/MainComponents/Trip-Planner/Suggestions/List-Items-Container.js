import { connect, dispatch } from "react-redux";
import toggleStopButton from "../../../../actions/Trip-Planner/toggleStopButton.js";
import addStop from "../../../../actions/Trip-Planner/addStop.js";
import fetchNewRoute from "../../../../actions/Trip-Planner/fetchNewRoute.js"
import NearbyListItems from "./List-Items.js";
import showNearbyFoodReducer from "../../../../reducers/Trip-Planner/showNearbyFoodReducer.js";

var mapStoreToProps = (state) => ({
	travelSoFarStops: state.travelSoFarStops,
	stopButton: state.toggleStopButton,
  locationFrom: state.locationFrom,
  locationTo: state.locationTo,
  nearbyFood: state.nearbyFood
});

var mapDispatchToProps = (dispatch) => ({
	toggleStopButton: () => {
		dispatch(toggleStopButton);
	},
	addStop: () => {
		dispatch(addStop);
	},
  fetchNewRoute: (waypoint) => {
    dispatch(fetchNewRoute)
  }
});

var SuggestionsListItemsContainer = connect(
	mapStoreToProps,
	mapDispatchToProps
)(NearbyListItems);

export default SuggestionsListItemsContainer;
