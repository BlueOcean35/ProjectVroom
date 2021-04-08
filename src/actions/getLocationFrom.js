
// this needs to send back the lat and long of both start and end
const getLocationFrom = (coordinateObj) => {

  return {
    type: 'GET_COORDINATE_FROM',
    payload: coordinateObj
  }



};

export default getLocationFrom;