import { connect, dispatch } from "react-redux";
<<<<<<< HEAD:src/components/Trip-Planner/Suggestions/List-Items-Container.js
import toggleStopButton from "../../../actions/Trip-Planner/toggleStopButton.js";
import addStop from "../../../actions/Trip-Planner/addStop.js";
import fetchNewRoute from "../../../actions/Trip-Planner/fetchNewRoute.js"
import NearbyListItems from "./Nearby-List-Items.js";

=======
import toggleStopButton from "../../../../actions/Trip-Planner/toggleStopButton.js";
import addStop from "../../../../actions/Trip-Planner/addStop.js";
import NearbyListItems from "./List-Items.js";
>>>>>>> 032ed0a4d572970c844bd3c12354474e683edce5:src/components/MainComponents/Trip-Planner/Suggestions/List-Items-Container.js

var mapStoreToProps = (state) => ({
	travelSoFarStops: state.travelSoFarStops,
	stopButton: state.toggleStopButton,
});

var mapDispatchToProps = (dispatch) => ({
	toggleStopButton: () => {
		dispatch(toggleStopButton);
	},
	addStop: () => {
		dispatch(addStop);
	},
  fetchNewRoute: (start, end, waypoints) => {
    dispatch(fetchNewRoute)
  }
});

var SuggestionsListItemsContainer = connect(
	mapStoreToProps,
	mapDispatchToProps
)(NearbyListItems);

export default SuggestionsListItemsContainer;
