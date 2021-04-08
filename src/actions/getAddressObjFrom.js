import {store} from '../store.js';
import thunk from 'redux-thunk';


// this needs to send back the lat and long of both start and end
const getAddressObjFrom = (AddressObj) => {
  var format = AddressObj[0];
  var currentAddress = AddressObj[0].formatted_address;
  currentAddress = currentAddress.split(', ')
  currentAddress[0] = currentAddress[0].split(' ')
  currentAddress[0] = currentAddress[0].join('+')
  currentAddress = `${currentAddress[0]},${currentAddress[1]}`;

  format.David_format = currentAddress;
  return {
    type: 'GET_ADDRESS_OBJ_FROM',
    payload: format
  }


};

export default getAddressObjFrom;