import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import getUsers from "../../actions/users";

class Users extends Component {
	componentDidMount() {
		this.props.getUsers();
	}
	renderUsers(users) {
		if (users) {
			return users.users.map(user => <li key={user.id}>{user.name}</li>);
		}
		return <div>Loading...</div>;
	}
	render() {
		return (
			<ul>
				<Helmet>
					<meta charSet="utf-8" />
					<title>React-ssr | Users page</title>
				</Helmet>
				{this.renderUsers(this.props.users)}
			</ul>
		);
	}
}

export default {
	component: connect(
		({ users }) => ({ users: users }),
		{ getUsers }
	)(Users),
	loadData: ({ dispatch }) => dispatch(getUsers())
};
