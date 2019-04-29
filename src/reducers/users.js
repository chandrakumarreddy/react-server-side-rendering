import { FETCHUSERS } from "../types";

export default (state = { users: [] }, action) => {
	switch (action.type) {
		case FETCHUSERS:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
