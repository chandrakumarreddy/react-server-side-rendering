import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import getAdmins from "../../actions/admins";
import ReqAuth from "../components/ReqAuth";

class Admins extends Component {
	componentDidMount() {
		this.props.getAdmins();
	}
	renderAdmins(admins) {
		if (admins) {
			return admins.admins.map(user => (
				<li key={user.id}>{user.name}</li>
			));
		}
		return <div>Loading...</div>;
	}
	render() {
		return (
			<ul>
				<Helmet>
					<meta charSet="utf-8" />
					<title>React-ssr | Admins page</title>
				</Helmet>
				{this.renderAdmins(this.props.admins)}
			</ul>
		);
	}
}

export default {
	component: connect(
		({ admins }) => ({ admins: admins }),
		{ getAdmins }
	)(ReqAuth(Admins)),
	loadData: ({ dispatch }) => dispatch(getAdmins())
};
