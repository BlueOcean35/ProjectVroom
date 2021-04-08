import { connect, dispatch } from 'react-redux';
import FromToItem from "../components/MainComponents/Trip-Planner/listItemComponents/FromToItem.jsx";
import fetchNewRoute from '../actions/Trip-Planner/fetchNewRoute.js';

var mapStoreToProps = (state) => ({
  storeFrom: state.addressObjFrom,
  storeTo: state.addressObjTo
})

var mapDispatchToProps = (dispatch) => ({

    fetchNewRoute: () => {
      dispatch(fetchNewRoute())
    }
});

var FromToItemContainer = connect(mapStoreToProps, mapDispatchToProps)(FromToItem);

export default FromToItemContainer;