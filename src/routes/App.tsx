import React from "react";
import { User, UserContextProvider } from "../context";
import { Outlet } from "react-router-dom";
import { MenuBar } from "../component";

interface Problem {
	title: string;
	difficulty: string;
	acceptance: string;
}
function App() {
	const [user, setUser] = React.useState<User | undefined>(undefined);
	return (
		<div
			style={{
				background: "rgb(26,26,26)",
				width: "100vw",
				height: "100vh",
			}}
		>
			<UserContextProvider user={user}>
				<MenuBar />
				<Outlet />
			</UserContextProvider>
		</div>
	);
}

export default App;
