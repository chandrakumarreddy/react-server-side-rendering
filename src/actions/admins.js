import { FETCHADMINS } from "../types";

export default () => async (dispatch, getState, api) => {
	const res = await api.get("/admins");
	dispatch({ type: FETCHADMINS, payload: res.data });
};
