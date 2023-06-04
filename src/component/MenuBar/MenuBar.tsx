import { Menu } from "antd";
import React from "react";
import { styled } from "styled-components";
import { UserMenuItem } from "./UserMenuItem";
import { SubmissionsMenuItem } from "./SubmissionsMenuItem";
import { ProblemsMenuItem } from "./ProblemsMenuItem";

export interface MenuBarProps {}

export const MenuBar: React.FC<MenuBarProps> = () => {
	return (
		<StyledMenu
			mode="horizontal"
			items={[
				{
					key: "user",
					label: <UserMenuItem />,
				},
				{
					key: "problems",
					label: <ProblemsMenuItem />,
				},
				{
					key: "submissions",
					label: <SubmissionsMenuItem />,
				},
			]}
			selectedKeys={[]}
		></StyledMenu>
	);
};

const StyledMenu = styled(Menu)`
	position: fixed;
	width: 100%;
	font-size: 1.1em;
`;
