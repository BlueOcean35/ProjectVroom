import { combineReducers } from "redux";

// import all reducers here
import updateStopReducer from "./Trip-Planner/updateStopReducer.js";
import toggleStopButtonReducer from "./Trip-Planner/toggleStopButtonReducer.js";

const rootReducer = combineReducers({
	travelSoFarStops: updateStopReducer,
	toggleStopButton: toggleStopButtonReducer,
});

export default rootReducer;
