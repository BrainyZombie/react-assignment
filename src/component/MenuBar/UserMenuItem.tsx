import React from "react";
import { styled } from "styled-components";
import { UserContext } from "../../context";
import { NavLink } from "react-router-dom";

export interface UserMenuItemProps {}

export const UserMenuItem: React.FC<UserMenuItemProps> = (_) => {
	const user = React.useContext(UserContext);
	return (
		<StyledNavLink to={!user.user ? "/login" : "/user/dashboard"}>
			<div key="user" title={user.user?.name ?? "Login"}>
				{user.user ? (
					<StyledUserImage
						src={user.user?.profileImg.toString()}
					></StyledUserImage>
				) : undefined}
				{user.user?.name ?? "Login"}
			</div>
		</StyledNavLink>
	);
};

const StyledNavLink = styled(NavLink)``;

const StyledUserImage = styled.img`
	aspect-ratio: 1;
	width: 2em;
	height: 2em;
	vertical-align: -0.65em;
	margin-right: 0.5em;
	border-radius: 50%;
`;
