import {store} from '../store.js';
import thunk from 'redux-thunk';


// this needs to send back the lat and long of both start and end
const getAddressObjFrom = (AddressObj) => {
  console.log(AddressObj[0])
  return {
    type: 'GET_ADDRESS_OBJ_FROM',
    payload: AddressObj[0]
  }


};

export default getAddressObjFrom;