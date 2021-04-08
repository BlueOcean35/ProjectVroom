import { connect, dispatch } from 'react-redux';
import listItems from "../components/MainComponents/Trip-Planner/listItems.js";
import fetchNewRoute from '../actions/Trip-Planner/fetchNewRoute.js';
import removeWaypoint from '../actions/Trip-Planner/removeWaypoint.js';
import updateWaypointComment from '../actions/Trip-Planner/updateWaypointComment.js';

var mapStoreToProps = (state) => ({
  storeFrom: state.addressObjFrom,
  storeTo: state.addressObjTo,
  waypoints: state.waypoints
})

var mapDispatchToProps = (dispatch) => ({

  removeWaypoint: (index) => {
    dispatch(removeWaypoint(index))
  },
    fetchNewRoute: (newWaypoint) => {
      dispatch(fetchNewRoute(newWaypoint))
    },
    updateWaypointComment: (index, comment) => {
      dispatch(updateWaypointComment(index, comment))
    }

});

var ListItemsContainer2 = connect(mapStoreToProps, mapDispatchToProps)(listItems);

export default ListItemsContainer2;