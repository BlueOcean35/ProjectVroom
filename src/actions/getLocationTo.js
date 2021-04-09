
// this needs to send back the lat and long of both start and end
const getLocationTo = (coordinateObj) => {

  return {
    type: 'GET_COORDINATE_TO',
    payload: coordinateObj

  }

}

  ;

export default getLocationTo;