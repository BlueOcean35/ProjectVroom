import { combineReducers } from 'redux';
// import all reducers here
import exampleCounterReducer from './exampleCounterReducer.js';
import getAddressObjFromReducer from './getAddressObjFromReducer.js';
import getAddressObjToReducer from './getAddressObjToReducer.js';
import changeLocationFromReducer from './changeLocationFromReducer';
import changeLocationToReducer from './changeLocationToReducer';
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
	nearbyLodging: showNearbyLodgingReducer,
  count: exampleCounterReducer,
  locationFrom: changeLocationFromReducer,
  locationTo: changeLocationToReducer,
  addressObjTo: getAddressObjToReducer,
  addressObjFrom: getAddressObjFromReducer

});

export default rootReducer;
