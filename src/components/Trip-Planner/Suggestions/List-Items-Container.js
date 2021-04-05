import { connect, dispatch } from "react-redux";
import toggleStopButton from "../../../actions/Trip-Planner/toggleStopButton.js";
import addStop from "../../../actions/Trip-Planner/addStop.js";
import NearbyListItems from "./List-Items.js";

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
});

var SuggestionsListItemsContainer = connect(
	mapStoreToProps,
	mapDispatchToProps
)(NearbyListItems);

export default SuggestionsListItemsContainer;
