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

    // var calcProximity = (lat1, lon1, lat2, lon2) => {
    //   //console.warn('RUNNING CALC PROX')
    //   var p = 0.017453292519943295;    // Math.PI / 180
    //   var c = Math.cos;
    //   var a = 0.5 - c((lat2 - lat1) * p)/2 + 
    //           c(lat1 * p) * c(lat2 * p) * 
    //           (1 - c((lon2 - lon1) * p))/2;
    
    //   var distinKM = 12742 * Math.asin(Math.sqrt(a)); 
    //   var distinMi = ((distinKM * 1000) * 0.00062137) + 15;
    //   return distinMi;
    // }

    // newNearbyAttractions = newNearbyAttractions.map((place) => {
    //   place['proximity'] = calcProximity(place.originLoc.lat, place.originLoc.lng, place.geometry.location.lat, place.geometry.location.lng);
    //   return place;
    // })

     return newNearbyAttractions.sort((a,b) => {
      return b.proximity - a.proximity
    })
  } else {
    return state;
  }
};

export default showNearbyAttractionsReducer;