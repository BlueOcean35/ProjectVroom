import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import thunk from 'redux-thunk';

/* REDUX-PERSIST SETUP
 import { persistStore, persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';


 const persistConfig = {
   key: 'root',
   storage,
   // whitelist: ['']
   // blacklist: ['']
 };

 const persistedReducer = persistReducer(persistConfig, rootReducer);

*/

// add in any state you need here
var initialState = {
  nearbyFood: [],
  nearbyLodging: [],
  nearbyAttractions: [],
  nearbyFuel: [],
  nearbyIsAdded: false,
  legs: []
  // map? route? selectedLocation?
};

export const store = createStore (
  rootReducer,
  // persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

//  export const persistor = persistStore(store);
