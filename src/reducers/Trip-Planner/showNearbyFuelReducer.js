import Redux from 'redux';

var showNearbyFuelReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_FUEL') {
    return [...state].concat(action.nearbyFuel)
  } else {
    return state;
  }
};

export default showNearbyFuelReducer;