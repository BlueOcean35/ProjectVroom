import axios from 'axios';
import showNearbyFood from './showNearbyFood.js';
import showNearbyFuel from './showNearbyFuel.js';
import showNearbyAttractions from './showNearbyAttractions.js';
import showNearbyLodging from './showNearbyLodging.js';
import  '../../store.js';
import thunk from 'redux-thunk';

var getNearby = (lat, lng) => {

  const getQuery = (type) => {
    return `/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=48000&type=${type}`;
  };

  return (dispatch) => {
    axios.get(getQuery('restaurant'))
      .then(({data}) => {
        var dataWithLoc = data.map((place) => {
          place['originLoc'] = {
            lat: lat,
            lng: lng
          }
          return place;
        })
        console.log('food: ', dataWithLoc);
        dispatch(showNearbyFood(dataWithLoc));
      })
      .catch((error) => {
        console.error('error getting nearby food: ', error);
      })
      .then(() => {
        axios.get(getQuery('gas_station'))
          .then(({data}) => {
            var dataWithLoc = data.map((place) => {
              place['originLoc'] = {
                lat: lat,
                lng: lng
              }
              return place;
            })
            console.log('fuel: ', dataWithLoc);
            dispatch(showNearbyFuel(dataWithLoc));
          })
          .catch((error) => {
            console.error('error getting nearby fuel: ', error);
          })
          .then(() => {
            axios.get(getQuery('lodging'))
              .then(({data}) => {
                var dataWithLoc = data.map((place) => {
                  place['originLoc'] = {
                    lat: lat,
                    lng: lng
                  }
                  return place;
                })
                console.log('lodging: ', dataWithLoc);
                dispatch(showNearbyLodging(dataWithLoc));
              })
              .catch((error) => {
                console.error('error getting nearby lodging: ', error);
              })
              .then(() => {
                axios.get(getQuery('tourist_attraction'))
                  .then(({data}) => {
                    var dataWithLoc = data.map((place) => {
                      place['originLoc'] = {
                        lat: lat,
                        lng: lng
                      }
                      return place;
                    })
                    console.log('attractions: ', dataWithLoc);
                    dispatch(showNearbyAttractions(dataWithLoc));
                  })
                  .catch((error) => {
                    console.error('error getting nearby attractions: ', error);
                  })
              })
          })
      })
      .catch((error) => {
        console.error('error getting nearby items: ', error);
      })
  }
};

export default getNearby;