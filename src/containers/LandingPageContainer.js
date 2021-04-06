import { connect, dispatch } from 'react-redux';
import LandingPage from "../components/MainComponents/LandingPage_Components/LandingPage";
import getAddressObjFrom from '../actions/getAddressObjFrom';
import getAddressObjTo from '../actions/getAddressObjTo';
import getLocationFrom from '../actions/getLocationFrom';
import getLocationTo from '../actions/getLocationTo';

<<<<<<< HEAD
=======
var mapStoreToProps = (state) => ({
  storeFrom: state.addressObjFrom,
  storeTo: state.addressObjTo
})
>>>>>>> cc6742d6681bc7a0a7b96d3c3cf4711616d9a623

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
    }
});

var LandingPageContainer = connect(mapStoreToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;