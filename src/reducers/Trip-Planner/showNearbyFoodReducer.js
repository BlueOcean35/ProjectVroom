import Redux from 'redux';

var showNearbyFoodReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_FOOD') {
    return action.nearbyFood;
  } else {
    return state;
  }
};

export default showNearbyFoodReducer;