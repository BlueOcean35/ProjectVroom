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
  } else if (action.type === 'FILTER_BY_PROXIMITY') {
    var newNearbyLodging = state.slice()

    // var calcProximity = (lat1, lon1, lat2, lon2) => {
    //   console.warn('RUNNING CALC PROX')
    //   var p = 0.017453292519943295;    // Math.PI / 180
    //   var c = Math.cos;
    //   var a = 0.5 - c((lat2 - lat1) * p)/2 + 
    //           c(lat1 * p) * c(lat2 * p) * 
    //           (1 - c((lon2 - lon1) * p))/2;
    
    //   var distinKM = 12742 * Math.asin(Math.sqrt(a)); 
    //   var distinMi = ((distinKM * 1000) * 0.00062137) + 15;
    //   return distinMi;
    // }

    // newNearbyLodging = newNearbyLodging.map((place) => {
    //   place['proximity'] = calcProximity(place.originLoc.lat, place.originLoc.lng, place.geometry.location.lat, place.geometry.location.lng);
    //   console.log(place['proximity'])
    //   return place;
    // })

     return newNearbyLodging.sort((a,b) => {
      return a.proximity - b.proximity
    })
  }else {
    return state;
  }
};

export default showNearbyLodgingReducer;