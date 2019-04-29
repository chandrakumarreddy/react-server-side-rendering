import { FETCHUSER } from "../types";

export default (state = null, action) => {
	switch (action.type) {
		case FETCHUSER:
			return action.payload || false;
		default:
			return state;
	}
};
