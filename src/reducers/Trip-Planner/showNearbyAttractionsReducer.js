import Redux from 'redux';

var showNearbyAttractionsReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_ATTRACTIONS') {
    return action.nearbyAttractions;
  } else {
    return state;
  }
};

export default showNearbyAttractionsReducer;