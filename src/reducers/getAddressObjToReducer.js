import Redux from 'redux';


var getAddressObjToReducer = (state={}, action) => {
  if (action.type === 'GET_ADDRESS_OBJ_TO') {
    return action.payload
  } else {
  return state;
  }
};


export default getAddressObjToReducer;