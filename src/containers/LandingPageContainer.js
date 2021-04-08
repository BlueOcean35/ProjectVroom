import { connect, dispatch } from 'react-redux';
import LandingPage from "../components/MainComponents/LandingPage_Components/LandingPage";
import getAddressObjFrom from '../actions/getAddressObjFrom';
import getAddressObjTo from '../actions/getAddressObjTo';
import getLocationFrom from '../actions/getLocationFrom';
import getLocationTo from '../actions/getLocationTo';
import fetchNewRoute from '../actions/Trip-Planner/fetchNewRoute.js';
import resetWaypoints from "../actions/Trip-Planner/resetWaypoints.js"

var mapStoreToProps = (state) => ({
  storeFrom: state.addressObjFrom,
  storeTo: state.addressObjTo
})

var mapDispatchToProps = (dispatch) => ({
    submitAddressFrom: (coordinatesObj) => {
      dispatch(getAddressObjFrom(coordinatesObj))
    },
    submitAddressTo: (coordinatesObj) => {
      dispatch(getAddressObjTo(coordinatesObj))
    },
    submitCoordinatesFrom: (coordinatesObj) => {
      dispatch(getLocationFrom(coordinatesObj))
    },
    submitCoordinatesTo: (coordinatesObj) => {
      dispatch(getLocationTo(coordinatesObj))
    },
    fetchNewRoute: () => {
      dispatch(fetchNewRoute())
    },
    resetWaypoints: () => {
      dispatch(resetWaypoints())
    }
});

var LandingPageContainer = connect(mapStoreToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;