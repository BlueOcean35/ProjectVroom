import { combineReducers } from "redux";

// import all reducers here
import updateStopReducer from "./Trip-Planner/updateStopReducer.js";
import toggleStopButtonReducer from "./Trip-Planner/toggleStopButtonReducer.js";
import showNearbyFoodReducer from "./Trip-Planner/showNearbyFoodReducer.js";
import showNearbyAttractionsReducer from "./Trip-Planner/showNearbyAttractionsReducer.js";
import showNearbyFuelReducer from "./Trip-Planner/showNearbyFuelReducer.js";
import showNearbyLodgingReducer from "./Trip-Planner/showNearbyLodgingReducer.js";

const rootReducer = combineReducers({
	travelSoFarStops: updateStopReducer,
	toggleStopButton: toggleStopButtonReducer,
	nearbyFood: showNearbyFoodReducer,
	nearbyAttractions: showNearbyAttractionsReducer,
	nearbyFuel: showNearbyFuelReducer,
	nearbyLodging: showNearbyLodgingReducer
});

export default rootReducer;
