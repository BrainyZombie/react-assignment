import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { styled } from "styled-components";

export interface Problem {
	title: string;
	difficulty: string;
	acceptance: string;
}

export interface ProblemsProps {
	problems: Problem[];
	total: number;
	page: number;
	pageSize: number;
}

const columns: TableColumnsType<object> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Difficulty",
		dataIndex: "difficulty",
		key: "difficulty",
		render(value) {
			return (
				<span
					style={{
						color:
							value === "Easy"
								? "green"
								: value === "Medium"
								? "orange"
								: "red",
					}}
				>
					{value}
				</span>
			);
		},
	},
	{
		title: "Acceptance",
		dataIndex: "acceptance",
		key: "acceptance",
	},
];

export const Problems: React.FC<ProblemsProps> = (props) => {
	const tablePagination = React.useMemo<TablePaginationConfig>(
		() => ({
			pageSize: props.pageSize,
			current: props.page,
			total: props.total,
		}),
		[props.pageSize, props.page, props.total]
	);
	const data = React.useMemo(
		() =>
			props.problems.map((problem) => ({
				key: problem.title,
				name: problem.title,
				difficulty: problem.difficulty,
				acceptance: problem.acceptance,
			})),
		[props.problems]
	);
	const navigate = useNavigate();
	const navigation = useNavigation();
	const handleTableChange = (pagination: TablePaginationConfig) => {
		navigate(
			pagination.pageSize !== props.pageSize
				? `/problemset?page=1&pageSize=${pagination.pageSize}`
				: `/problemset?page=${pagination.current}&pageSize=${pagination.pageSize}`
		);
	};
	return (
		<TableContainer>
			<StyledProblemTable
				rowClassName={(_, index) =>
					index % 2 === 0 ? "table-row-light" : "table-row-dark"
				}
				columns={columns}
				dataSource={data}
				onChange={handleTableChange}
				pagination={tablePagination}
				size="small"
				loading={navigation.location != null}
			/>
		</TableContainer>
	);
};

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledProblemTable = styled(Table)`
	min-width: 500px;
	max-width: 1000px;
	margin: 100px;
	align-items: center;
	flex-grow: 1;
	& tr.table-row-light {
		background: rgb(40, 40, 40);
	}
	& tr.table-row-dark {
		background: rgb(26, 26, 26);
	}
`;
