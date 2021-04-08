import Redux from 'redux';
import nearbyPlaces from '../../../sample-data/nearby-places';
import store from "../../store.js"


var showNearbyFoodReducer = (state=[], action) => {
  if (action.type === 'SHOW_NEARBY_FOOD') {
    return action.nearbyFood;
  } else if (action.type === 'FILTER_BY_PRICE'){
    var newNearbyFood = state.slice();

    var nearbyWithPrices = newNearbyFood.filter((place) => {
      return place.price_level
    })

    var nearbyWithoutPrices = newNearbyFood.filter((place) => {
      if (!place.price_level) {
        return place;
      }
    })

    var sortedPrices = nearbyWithPrices.sort((a,b) => {
      return a['price_level'] - b['price_level']
    });

    var combinedPlaces = sortedPrices.concat(nearbyWithoutPrices);
    return combinedPlaces;
    

  } else if (action.type === 'FILTER_BY_RATING'){
    var newNearbyFood = state.slice()
     return newNearbyFood.sort((a,b) => {
      return b.rating - a.rating
    })
    
  } else if (action.type === 'FILTER_BY_PROXIMITY') {
    var newNearbyFood = state.slice()

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

    // newNearbyFood = newNearbyFood.map((place) => {
    //   place['proximity'] = calcProximity(place.originLoc.lat, place.originLoc.lng, place.geometry.location.lat, place.geometry.location.lng);
    //   return place;
    // })

     return newNearbyFood.sort((a,b) => {
      return a.proximity - b.proximity
    })
  } else {
    return state;
  }
};

export default showNearbyFoodReducer;