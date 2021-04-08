import Redux from "redux";

var updateWaypointsReducer = (state = [], action) => {
	if (action.type === "NEW_WAYPOINTS") {
		return action.waypoints;
	} else {
		return state;
	}
};

export default updateWaypointsReducer;