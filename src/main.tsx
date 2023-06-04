import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ConditionalRoute from "./routes/ConditionalRoute.js";
import { UserContext } from "./context/UserContext.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <>hi</>,
			},
			{
				path: "problems",
				element: <>problems</>,
			},
			{
				path: "login",
				element: <>login</>,
			},
			{
				path: "user",
				element: (
					<ConditionalRoute
						condition={() => {
							const user = React.useContext(UserContext);
							return user.user != null;
						}}
						redirectTo="/login"
					>
						<Outlet />
					</ConditionalRoute>
				),
				children: [
					{
						path: "dashboard",
						element: <>dashboard</>,
					},
					{
						path: "submissions",
						element: <>submissions</>,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
