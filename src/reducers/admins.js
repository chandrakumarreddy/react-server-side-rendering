import { FETCHADMINS } from "../types";

export default (state = { admins: [] }, action) => {
	switch (action.type) {
		case FETCHADMINS:
			return { ...state, admins: action.payload };
		default:
			return state;
	}
};
