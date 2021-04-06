import { combineReducers } from 'redux';
// import all reducers here
import exampleCounterReducer from './exampleCounterReducer.js';
import getAddressObjFromReducer from './getAddressObjFromReducer.js';
import getAddressObjToReducer from './getAddressObjToReducer.js';
import changeLocationFromReducer from './changeLocationFromReducer';
import changeLocationToReducer from './changeLocationToReducer';

const rootReducer = combineReducers({
  count: exampleCounterReducer,
  locationFrom: changeLocationFromReducer,
  locationTo: changeLocationToReducer,
  addressObjTo: getAddressObjToReducer,
  addressObjFrom: getAddressObjFromReducer
});

export default rootReducer;