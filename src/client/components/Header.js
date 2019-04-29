import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = props => {
	const authButton = props.auth ? (
		<a href="/api/logout">Logout</a>
	) : (
		<a href="/api/auth/google">Login</a>
	);
	return (
		<div>
			<Link to="/">React SSR</Link>
			<ul>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/admins">Admins</Link>
				</li>
				<li>{authButton}</li>
			</ul>
		</div>
	);
};

export default connect(({ auth }) => ({ auth }))(Header);
