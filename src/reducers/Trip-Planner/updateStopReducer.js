import Redux from "redux";

var updateStopReducer = (state = [], action) => {
	if (action.type === "ADD_STOP") {
		return [...state].concat(action.newStop);
	} else if (action.type === "REMOVE_STOP") {
		let stopList = state.slice();
		stopList.splice(action.index, 1);
		return stopList;
	} else {
		return state;
	}
};

export default updateStopReducer;
