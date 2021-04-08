import Redux from 'redux';

var showNearbyAttractionsReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_ATTRACTIONS') {
    return action.nearbyAttractions;
  } else if (action.type === 'FILTER_BY_PRICE') {
    var newNearbyAttractions = state.slice()
    
    var nearbyWithPrices = newNearbyAttractions.filter((place) => {
      return place.price_level
    })

    var nearbyWithoutPrices = newNearbyAttractions.filter((place) => {
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
    var newNearbyAttractions = state.slice()

     return newNearbyAttractions.sort((a,b) => {
      return b.rating - a.rating
    })
  } else if (action.type === 'FILTER_BY_PROXIMITY') {
    var newNearbyAttractions = state.slice()

     return newNearbyAttractions.sort((a,b) => {
      return b.proximity - a.proximity
    })
  } else {
    return state;
  }
};

export default showNearbyAttractionsReducer;