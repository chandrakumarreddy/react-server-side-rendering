import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default WrapperComponent => {
	class ReqAuth extends React.Component {
		render() {
			switch (this.props.auth) {
				case null:
					return <div>Loading...</div>;
				case false:
					return <Redirect to="/" />;
				default:
					return <WrapperComponent {...this.props} />;
			}
		}
	}
	return connect(({ auth }) => ({ auth }))(ReqAuth);
};
