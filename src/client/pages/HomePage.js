import React from "react";
import { Helmet } from "react-helmet";

const Home = props => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>React-ssr | Home page</title>
			</Helmet>
			Home component
		</div>
	);
};

export default { component: Home };
