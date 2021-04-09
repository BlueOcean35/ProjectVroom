import Redux from 'redux';

var showNearbyFuelReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_FUEL') {
    return action.nearbyFuel;
  } else if (action.type === 'RESET_NEARBY_FUEL') {
    return [];
  } else if (action.type === 'FILTER_BY_PRICE') {
    var newNearbyFuel = state.slice()
    var nearbyWithPrices = newNearbyFuel.filter((place) => {
      return place.price_level
    })

    var nearbyWithoutPrices = newNearbyFuel.filter((place) => {
      if (!place.price_level) {
        return place;
      }
    })

    var sortedPrices = nearbyWithPrices.sort((a,b) => {
      return a['price_level'] - b['price_level']
    });

    var combinedPlaces = sortedPrices.concat(nearbyWithoutPrices);
    return combinedPlaces;
  } else if (action.type === 'FILTER_BY_RATING') {
    var newNearbyFuel = state.slice()
     return newNearbyFuel.sort((a,b) => {
      return b.rating - a.rating
    })
  } else if (action.type === 'FILTER_BY_PROXIMITY') {
    var newNearbyFuel = state.slice()

     return newNearbyFuel.sort((a,b) => {
      return b.proximity - a.proximity
    })
  } else {
    return state;
  }
};

export default showNearbyFuelReducer;