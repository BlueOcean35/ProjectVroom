import axios from 'axios';
import showNearbyFood from './showNearbyFood.js';
import showNearbyFuel from './showNearbyFuel.js';
import showNearbyAttractions from './showNearbyAttractions.js';
import showNearbyLodging from './showNearbyLodging.js';
import {store} from '../../store.js';
import thunk from 'redux-thunk';

var getNearby = (lat, lng) => {

  const getQuery = (type) => {
    return `/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${type}`;
  };

  return (dispatch) => {
    axios.get(getQuery('restaurant'))
      .then(({data}) => {
        console.log('food: ', data);
        dispatch(showNearbyFood(data));
      })
      .catch((error) => {
        console.error('error getting nearby food: ', error);
      })
      .then(() => {
        axios.get(getQuery('gas_station'))
          .then(({data}) => {
            console.log('fuel: ', data);
            dispatch(showNearbyFuel(data));
          })
          .catch((error) => {
            console.error('error getting nearby fuel: ', error);
          })
          .then(() => {
            axios.get(getQuery('lodging'))
              .then(({data}) => {
                console.log('lodging: ', data);
                dispatch(showNearbyLodging(data));
              })
              .catch((error) => {
                console.error('error getting nearby lodging: ', error);
              })
              .then(() => {
                axios.get(getQuery('tourist_attraction'))
                  .then(({data}) => {
                    console.log('attractions: ', data);
                    dispatch(showNearbyAttractions(data));
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