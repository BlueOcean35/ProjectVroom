import Redux from "redux";

var toggleStopButtonReducer = (state = false, action) => {
	if (action.type === "TOGGLE_STOPBUTTON") {
		console.log(state);
		return !state;
	} else {
		return state;
	}
};

export default toggleStopButtonReducer;
