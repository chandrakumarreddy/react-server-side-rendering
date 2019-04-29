import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import { Provider } from "react-redux";
import Routes from "../client/routes";

export default (req, store, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				{renderRoutes(Routes)}
			</StaticRouter>
		</Provider>
	);
	const helmet = Helmet.renderStatic();
	return ` <!DOCTYPE html>
	<html lang="en" ${helmet.htmlAttributes.toString()}>
	<head>
		 ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
	</head>
	<body ${helmet.bodyAttributes.toString()}>
		<div id="root">${content}</div>
		<script>window.INITIAL_STATE=${serialize(store.getState())}</script>
		<script src="bundle.js"></script>
	</body>
	</html>`;
};
