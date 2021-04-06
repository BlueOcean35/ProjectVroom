import {store} from '../store.js';
import thunk from 'redux-thunk';


// this needs to send back the lat and long of both start and end
const getAddressObjTo = (AddressObj) => {
  console.log(AddressObj[0])
  return {
  type: 'GET_ADDRESS_OBJ_TO',
  payload: AddressObj[0]

}
};

export default getAddressObjTo;