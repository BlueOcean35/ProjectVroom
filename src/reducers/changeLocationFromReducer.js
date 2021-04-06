import Redux from 'redux';

var changeLocationFromReducer = (state={}, action) => {
  if (action.type === 'GET_COORDINATE_FROM') {
    return action.payload
  } else {
  return state;
  }
};


export default changeLocationFromReducer;