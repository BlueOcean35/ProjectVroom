import { connect, dispatch } from 'react-redux';
import listItems from "../components/MainComponents/Trip-Planner/listItems.js";
import fetchNewRoute from '../actions/Trip-Planner/fetchNewRoute.js';

var mapStoreToProps = (state) => ({
  storeFrom: state.addressObjFrom,
  storeTo: state.addressObjTo,
  waypoints: state.waypoints
})

var mapDispatchToProps = (dispatch) => ({

    fetchNewRoute: (newWaypoint) => {
      dispatch(fetchNewRoute(newWaypoint))
    }
});

var ListItemsContainer2 = connect(mapStoreToProps, mapDispatchToProps)(listItems);

export default ListItemsContainer2;