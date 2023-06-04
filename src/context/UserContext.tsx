import React from "react";

export interface User {
	token: number;
	name: string;
	profileImg: URL;
}

interface UserContextProviderProps {
	user?: User;
}

export const UserContext = React.createContext<UserContextProviderProps>({
	user: undefined,
});
export const UserContextProvider: React.FC<
	React.PropsWithChildren<UserContextProviderProps>
> = (props) => {
	return (
		<UserContext.Provider value={{ user: props.user }}>
			{props.children}
		</UserContext.Provider>
	);
};
