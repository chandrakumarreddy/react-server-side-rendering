import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../reducers";

export default req => {
	const axiosInstance = axios.create({
		baseURL: "http://react-ssr-api.herokuapp.com",
		headers: { cookie: req.get("cookie") || "" }
	});
	const middleware = [thunk.withExtraArgument(axiosInstance)];
	const store = createStore(reducers, {}, applyMiddleware(...middleware));
	return store;
};
