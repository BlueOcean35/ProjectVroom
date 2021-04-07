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
    
  } else if (action.type === 'FILTER_BY_PROXIMITY'){
    // var lat1 = store.getState().locationFrom;
    // console.log('latitude ', lat1);
    
    // var newNearbyFood = state.slice()
    //  return newNearbyFood.sort((a,b) => {
    //   return a.pro - b.rating
    // })
    //this is going to have to work differently since proximity isn't a part of the item
  } else {
    return state;
  }
};

export default showNearbyFoodReducer;