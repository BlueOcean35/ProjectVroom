import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';

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
  count: 0
};

export const store = createStore (
  rootReducer,
  // persistedReducer,
  initialState,
);

//  export const persistor = persistStore(store);
