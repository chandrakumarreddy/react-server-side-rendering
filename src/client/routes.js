import App from "./App";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";
import Admins from "./pages/AdminsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default [
	{
		...App,
		routes: [
			{ path: "/", ...Home, exact: true },
			{ path: "/users", ...Users },
			{ path: "/admins", ...Admins },
			{ ...NotFoundPage }
		]
	}
];
