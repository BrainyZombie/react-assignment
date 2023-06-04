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
	const [user, setUser] = React.useState<User | undefined>({
		token: 0,
		name: "test",
		profileImg: new URL("https://i.imgur.com/0kZB2Sb.png"),
	});
	return (
		<>
			<UserContextProvider user={user}>
				<MenuBar />
				<Outlet />
			</UserContextProvider>
		</>
	);
}

export default App;
