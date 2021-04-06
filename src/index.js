import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Dashboard from "./components/Trip-Planner/Dashboard.js";
import { Provider } from "react-redux";
import { store } from "./store.js";
import LandingPageContainer from './containers/LandingPageContainer'

ReactDOM.render(
	<Provider store={store}>
	<LandingPageContainer />
		{/* <Dashboard /> */}
	</Provider>,
	document.getElementById("app")
);
