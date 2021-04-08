import axios from 'axios';
import distRemoveWaypoints from './distRemoveWaypoints.js';
import { store } from '../../store.js';
import thunk from 'redux-thunk';


var removeWaypoint = (index) => {

  var waypoints = store.getState().waypoints.slice();

  waypoints.splice(index, 1);

  return (dispatch) => {
    dispatch(distRemoveWaypoints(waypoints));
  }

}

export default removeWaypoint;