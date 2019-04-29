import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import reducers from "../reducers";
import Routes from "./routes";

const axiosInstance = axios.create({
	baseURL: "/api"
});

const middleware = [thunk.withExtraArgument(axiosInstance)];

const store = createStore(
	reducers,
	window.INITIAL_STATE,
	applyMiddleware(...middleware)
);

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
		</Provider>
	);
};

hydrate(<App />, document.querySelector("#root"));
