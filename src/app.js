import express from "express";
import logger from "morgan";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import renderer from "./helpers/renderer";
import createStore from "./helpers/store";
import Routes from "./client/routes";

const app = express();

app.use(
	"/api",
	proxy("http://react-ssr-api.herokuapp.com", {
		proxyReqOptDecorator(opts) {
			opts.headers["x-forwarded-host"] = "localhost:3000";
			return opts;
		}
	})
);
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.json());

app.get("*", (req, res) => {
	const store = createStore(req);
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => (route.loadData ? route.loadData(store) : null))
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});
	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);
		if (context.url) {
			return res.redirect(301, context.url);
		}
		if (context.notFound) {
			res.status(404);
		}
		res.send(content);
	});
});

export default app;
