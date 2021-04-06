import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Dashboard from "./components/Trip-Planner/Dashboard.js";
import { Provider } from "react-redux";
import { store } from "./store.js";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById("app")
);
