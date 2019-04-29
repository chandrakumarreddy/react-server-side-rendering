import { FETCHUSERS } from "../types";

export default () => async (dispatch, getState, api) => {
	const res = await api.get("/users");
	dispatch({ type: FETCHUSERS, payload: res.data });
};
