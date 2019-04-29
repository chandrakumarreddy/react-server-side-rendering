import { combineReducers } from "redux";
import users from "./users";
import admins from "./admins";
import auth from "./auth";

export default combineReducers({
	users,
	admins,
	auth
});
