import React from "react";
import { Helmet } from "react-helmet";

const NotFound = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>React-ssr | not found page</title>
			</Helmet>
			Not Found
		</div>
	);
};

export default { component: NotFound };
