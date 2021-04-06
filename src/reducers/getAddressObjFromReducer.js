import Redux from 'redux';


var getAddressObjFromReducer = (state={}, action) => {
  if (action.type === 'GET_ADDRESS_OBJ_FROM') {
    return action.payload
  } else {
  return state;
  }
};


export default getAddressObjFromReducer;