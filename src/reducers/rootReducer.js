import { combineReducers } from 'redux';

// import all reducers here
import exampleCounterReducer from './exampleCounterReducer.js';

const rootReducer = combineReducers({
  count: exampleCounterReducer
});

export default rootReducer;