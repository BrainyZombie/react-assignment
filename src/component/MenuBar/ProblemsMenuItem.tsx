import React from "react";
import { Menu } from "antd";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export interface ProblemsMenuItemProps {}

export const ProblemsMenuItem: React.FC<ProblemsMenuItemProps> = (_) => {
	return <NavLink to={"/problems"}>{"Problems"}</NavLink>;
};

const StyledProblemsMenuItem = styled(Menu.Item)``;
