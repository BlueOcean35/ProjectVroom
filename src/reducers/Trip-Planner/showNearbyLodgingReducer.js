import Redux from 'redux';

var showNearbyLodgingReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_LODGING') {
    return action.nearbyLodging;
  } else {
    return state;
  }
};

export default showNearbyLodgingReducer;