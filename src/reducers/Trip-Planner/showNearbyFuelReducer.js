import Redux from 'redux';

var showNearbyFuelReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_FUEL') {
    return action.nearbyFuel;
  } else {
    return state;
  }
};

export default showNearbyFuelReducer;