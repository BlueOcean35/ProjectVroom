import axios from 'axios';
import distNewRoute from './distNewRoute.js';
import store from '../store.js';

var fetchNewRoute = (start, end, waypoints) => {
  waypoints = waypoints.join('|');
    return (dispatch) => {

      axios.get(`/maps/api/directions/json?
      origin=${start}&destination=${end}
      &waypoints=${waypoints}`)
      .then(({data}) => {
        var legs = data.routes.legs;
        var start = {address: legs[0].start_address, location: {lat: legs[0].start_location.lat, lng: legs[0].start_location.lng}};
        var end = {address: legs[legs.length-1].end_address, location: {lat: legs[legs.length-1].end_location.lat, lng: legs[legs.length-1].end_location.lng}};
        var waypoints = [];
        if (legs.length > 1) {
          for (var i = 0; i < legs.length - 1; i++) {
            waypoints.push({address: legs[i].end_address, location: {lat: legs[i].end_location.lat, lng: legs[i].end_location.lng}})
          }
        }

        dispatch(distNewRoute(start, end, waypoints))
      })
      .catch((err) => {
        console.error(err)
      })

    }
}
