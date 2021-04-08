import { connect, dispatch } from "react-redux";
import addStop from "../../../../actions/Trip-Planner/addStop.js";
import fetchNewRoute from "../../../../actions/Trip-Planner/fetchNewRoute.js"
import NearbyListItems from "./List-Items.js";
import showNearbyFoodReducer from "../../../../reducers/Trip-Planner/showNearbyFoodReducer.js";

var mapStoreToProps = (state) => ({
	travelSoFarStops: state.travelSoFarStops,
  locationFrom: state.locationFrom,
  locationTo: state.locationTo,
  nearbyFood: state.nearbyFood
});

var mapDispatchToProps = (dispatch) => ({
	addStop: () => {
		dispatch(addStop());
	},
  fetchNewRoute: (waypoint) => {
    dispatch(fetchNewRoute(waypoint))
  }
});

var SuggestionsListItemsContainer = connect(
	mapStoreToProps,
	mapDispatchToProps
)(NearbyListItems);

export default SuggestionsListItemsContainer;
