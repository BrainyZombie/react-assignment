import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export interface SubmissionsMenuItemProps {}

export const SubmissionsMenuItem: React.FC<SubmissionsMenuItemProps> = (_) => {
	return (
		<StyledSubmissionsNavLink to={"/user/submissions"}>
			{"Submissions"}
		</StyledSubmissionsNavLink>
	);
};

const StyledSubmissionsNavLink = styled(NavLink)``;
