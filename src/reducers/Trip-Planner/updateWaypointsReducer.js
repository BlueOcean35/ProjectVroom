import Redux from "redux";

var updateWaypointsReducer = (state = [], action) => {
	if (action.type === "NEW_WAYPOINTS") {
		return action.waypoints.slice();
	} else {
		return state;
	}
};

export default updateWaypointsReducer;