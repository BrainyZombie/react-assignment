import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export interface ProblemsMenuItemProps {}

export const ProblemsMenuItem: React.FC<ProblemsMenuItemProps> = (_) => {
	return (
		<StyledProblemsNavLink to={"/problemset"}>
			{"Problems"}
		</StyledProblemsNavLink>
	);
};

const StyledProblemsNavLink = styled(NavLink)``;
