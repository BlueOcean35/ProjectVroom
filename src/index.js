import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
<<<<<<< HEAD
import store from "./store.js";
=======
import { store } from "./store.js";
>>>>>>> 4aee678b6e5a27fff29b6cf1d84e616da6210492

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
