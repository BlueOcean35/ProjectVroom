import axios from 'axios';
import distNewWaypoints from './distNewWaypoints.js';
import store from '../../store.js';
import thunk from 'redux-thunk';

var fetchNewRoute = (newWaypoint) => {

    newWaypoint.comment = '';
    var waypoints = store.getState().waypoints.slice();

    if (newWaypoint !== undefined){
      waypoints.push(newWaypoint);
    }
    waypoints.sort((a,b) => {return a.proximityFromOrigin - b.proximityFromOrigin});
    return (dispatch) => {
      dispatch(distNewWaypoints(waypoints));
  }
}

export default fetchNewRoute;
