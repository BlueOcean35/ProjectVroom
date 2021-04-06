import { connect, dispatch } from 'react-redux';
import LandingPage from "../components/MainComponents/LandingPage_Components/LandingPage";
import getAddressObjFrom from '../actions/getAddressObjFrom';
import getAddressObjTo from '../actions/getAddressObjTo';
import getLocationFrom from '../actions/getLocationFrom';
import getLocationTo from '../actions/getLocationTo';


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

var LandingPageContainer = connect(null, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;