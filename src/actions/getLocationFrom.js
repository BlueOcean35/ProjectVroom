
// this needs to send back the lat and long of both start and end
const getLocationFrom = (coordinateObj) => {
   console.log('this is the long and lat for from', coordinateObj)
  return {
    type: 'GET_COORDINATE_FROM',
    payload: coordinateObj
  }



};

export default getLocationFrom;