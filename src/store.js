import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


 const persistConfig = {
   key: 'root',
   storage,
   // whitelist: ['']
   // blacklist: ['']
 };

 const persistedReducer = persistReducer(persistConfig, rootReducer);



// add in any state you need here
var initialState = {

  nearbyFood: [],
  nearbyLodging: [],
  nearbyAttractions: [],
  nearbyFuel: [],
  nearbyIsAdded: false,
  waypoints: [],
  travelSoFarStops: [],
  locationFrom: {}, //start loc validated by api
  locationTo: {}, //end loc validated by api
  addressObjFrom: {}, //from the login page start text field
  addressObjTo: {} //from the login page destination text field

};

const store = createStore(
	// rootReducer,
	persistedReducer,
	initialState,
	applyMiddleware(thunk)
);

export default store;

export const persistor = persistStore(store);
