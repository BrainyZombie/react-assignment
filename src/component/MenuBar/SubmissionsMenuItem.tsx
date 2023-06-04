import React from "react";
import { Menu } from "antd";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export interface SubmissionsMenuItemProps {}

export const SubmissionsMenuItem: React.FC<SubmissionsMenuItemProps> = (_) => {
	return <NavLink to={"/user/submissions"}>{"Submissions"}</NavLink>;
};

const StyledSubmissionsMenuItem = styled(Menu.Item)``;
