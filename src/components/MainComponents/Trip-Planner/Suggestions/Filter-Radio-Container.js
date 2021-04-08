import { Filter } from "@material-ui/icons";
import { connect, dispatch } from "react-redux";
import filterByPrice from "../../../../actions/Trip-Planner/filterByPrice.js"
import filterByRating from "../../../../actions/Trip-Planner/filterByRating.js"
import filterByProximity from "../../../../actions/Trip-Planner/filterByProximity.js"
import FilterRadioButtons from "./Filter-Radio.js";

var mapStoreToProps = (state) => ({
	nearbyFood: state.nearbyFood,
	nearbyAttractions: state.nearbyAttractions,
  nearbyLodging: state.nearbyLodging,
  nearbyFuel: state.NearbyFuel,
  locationFrom: state.locationFrom,
  locationTo: state.locationTo,
});

var mapDispatchToProps = (dispatch) => ({
	filterByPrice: () => {
		dispatch(filterByPrice());
	},
  filterByRating: () => {
    dispatch(filterByRating());
  },
  filterByProximity: () => {
    dispatch(filterByProximity(origin));
  }
});

var FilterByContainer = connect(
	mapStoreToProps,
	mapDispatchToProps
)(FilterRadioButtons);

export default FilterByContainer;
