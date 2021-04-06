import { connect, dispatch } from "react-redux";
import exampleCounter from "../actions/exampleCounter.js";
import Example from "./Example.jsx";

var mapStoreToProps = (state) => ({
	count: state.count,
});

var mapDispatchToProps = (dispatch) => ({
	increaseCount: () => {
		dispatch(exampleCounter);
	},
});

var exampleCounterContainer = connect(
	mapStoreToProps,
	mapDispatchToProps
)(Example);

export default exampleCounterContainer;
