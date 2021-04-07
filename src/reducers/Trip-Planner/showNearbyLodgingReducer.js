import Redux from 'redux';

var showNearbyLodgingReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_LODGING') {
    return action.nearbyLodging;
  } else if (action.type === 'FILTER_BY_PRICE') {
    var newNearbyLodging = state.slice()
    var nearbyWithPrices = newNearbyLodging.filter((place) => {
      return place.price_level
    })

    var nearbyWithoutPrices = newNearbyLodging.filter((place) => {
      if (!place.price_level) {
        return place;
      }
    })

    // console.log('nearby with prices: ',  nearbyWithPrices)
    // console.log('nearby without prices: ',  nearbyWithoutPrices)

    var sortedPrices = nearbyWithPrices.sort((a,b) => {
      return a['price_level'] - b['price_level']
    });

    var combinedPlaces = sortedPrices.concat(nearbyWithoutPrices);
    return combinedPlaces;
  } else if (action.type === 'FILTER_BY_RATING') {
    var newNearbyLodging = state.slice()
     return newNearbyLodging.sort((a,b) => {
      return b.rating - a.rating
    })
  } else {
    return state;
  }
};

export default showNearbyLodgingReducer;