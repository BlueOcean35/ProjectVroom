import Redux from "redux";

var updateWaypointsReducer = (state = [], action) => {
	if (action.type === "NEW_WAYPOINTS") {
		return action.waypoints.slice();
	} else if (action.type === "REMOVE_WAYPOINTS") {
		return action.waypoints.slice();
	} else if (action.type === "UPDATE_WAYPOINT_COMMENT") {
		return action.waypoints.slice();
	} else if (action.type === "RESET_WAYPOINTS") {
		return [];
	}else {
		return state;
	}
};

export default updateWaypointsReducer;