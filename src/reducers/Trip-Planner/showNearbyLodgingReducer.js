import Redux from 'redux';

var showNearbyLodgingReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_LODGING') {
    return [...state].concat(action.nearbyLodging)
  } else {
    return state;
  }
};

export default showNearbyLodgingReducer;