import axios from 'axios';
// import distNewRoute from './distNewRoute.js';
import distUpdateWaypointComment from './distUpdateWaypointComment.js';
import store from '../../store.js';
import thunk from 'redux-thunk';


var updateWaypointComment = (index, comment) => {
  console.log('updated')
  var waypoints = store.getState().waypoints.slice()

  waypoints[index].comment = comment;


  return (dispatch) => {
    dispatch(distUpdateWaypointComment(waypoints))
  }

}

export default updateWaypointComment;