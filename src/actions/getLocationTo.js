
// this needs to send back the lat and long of both start and end
const getLocationTo = (coordinateObj) => {

  console.log(coordinateObj)
  return {
    type: 'GET_COORDINATE_TO',
    payload: coordinateObj

  }

}

  ;

export default getLocationTo;