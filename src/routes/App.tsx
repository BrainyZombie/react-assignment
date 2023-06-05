import React from "react";
import { User, UserContextProvider } from "../context";
import { Outlet } from "react-router-dom";
import { MenuBar } from "../component";
import { ConfigProvider } from "antd";

interface Problem {
	title: string;
	difficulty: string;
	acceptance: string;
}
function App() {
	const [user, setUser] = React.useState<User | undefined>(undefined);
	return (
		<>
			<UserContextProvider user={user}>
				<ConfigProvider
					theme={{
						token: {
							colorBgBase: "rgb(40, 40, 40)",
							colorPrimary: "rgba(239, 241, 246, 1)",
							colorText: "rgba(239, 241, 246, 0.75)",
						},
					}}
				>
					<MenuBar />
					<Outlet />
				</ConfigProvider>
			</UserContextProvider>
		</>
	);
}

export default App;
