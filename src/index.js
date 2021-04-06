import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import LandingPage from './components/MainComponents/LandingPage_Components/LandingPage'
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
