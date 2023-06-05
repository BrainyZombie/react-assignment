import { ConfigProvider, Menu } from "antd";
import React from "react";
import { styled } from "styled-components";
import { UserMenuItem } from "./UserMenuItem";
import { SubmissionsMenuItem } from "./SubmissionsMenuItem";
import { ProblemsMenuItem } from "./ProblemsMenuItem";

export interface MenuBarProps {}

export const MenuBar: React.FC<MenuBarProps> = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorBgBase: "rgb(40, 40, 40)",
					colorPrimary: "rgba(239, 241, 246, 1)",
					colorText: "rgba(239, 241, 246, 0.75)",
				},
			}}
		>
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
			></StyledMenu>
		</ConfigProvider>
	);
};

const StyledMenu = styled(Menu)`
	width: 100%;
	font-size: 1.1em;
	& > .ant-menu-item {
		transition-duration: 0s !important;
	}
	& > .ant-menu-item > * {
		transition-duration: 0s !important;
	}
	& > .ant-menu-item:hover {
		color: rgba(239, 241, 246, 1) !important;
		border-bottom-color: white !important;
	}
`;
