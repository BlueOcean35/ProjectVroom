import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Dashboard from "./components/Trip-Planner/Dashboard.js";
import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById("app")
);
