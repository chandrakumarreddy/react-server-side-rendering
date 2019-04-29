import { FETCHUSER } from "../types";

export default () => async (dispatch, getState, api) => {
	const res = await api.get("/current_user");
	dispatch({ type: FETCHUSER, payload: res.data });
};
