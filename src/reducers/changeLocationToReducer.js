import Redux from 'redux';

var changeLocationToReducer = (state={}, action) => {
 if (action.type === 'GET_COORDINATE_TO') {
    return action.payload
  } else {
  return state;
  }
};


export default changeLocationToReducer;