import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Problem, Problems } from "../component";

//array of 50 problems
const problems: Problem[] = [
	{
		title: "Two Sum",
		difficulty: "Easy",
		acceptance: "50.1%",
	},
	{
		title: "Add Two Numbers",
		difficulty: "Medium",
		acceptance: "35.1%",
	},
	{
		title: "Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		acceptance: "30.1%",
	},
	{
		title: "Median of Two Sorted Arrays",
		difficulty: "Hard",
		acceptance: "25.1%",
	},
	{
		title: "Longest Palindromic Substring",
		difficulty: "Medium",
		acceptance: "20.1%",
	},
	{
		title: "ZigZag Conversion",
		difficulty: "Medium",
		acceptance: "15.1%",
	},
	{
		title: "Reverse Integer",
		difficulty: "Easy",
		acceptance: "10.1%",
	},
	{
		title: "String to Integer",
		difficulty: "Medium",
		acceptance: "20.0%",
	},
	{
		title: "Palindrome Number",
		difficulty: "Easy",
		acceptance: "45.0%",
	},
	{
		title: "Regular Expression Matching",
		difficulty: "Hard",
		acceptance: "25.6%",
	},
	{
		title: "Container With Most Water",
		difficulty: "Medium",
		acceptance: "47.0%",
	},
	{
		title: "Integer to Roman",
		difficulty: "Medium",
		acceptance: "53.1%",
	},
	{
		title: "Roman to Integer",
		difficulty: "Easy",
		acceptance: "53.2%",
	},
	{
		title: "Longest Common Prefix",
		difficulty: "Easy",
		acceptance: "34.2%",
	},
	{
		title: "3Sum",
		difficulty: "Medium",
		acceptance: "25.2%",
	},
	{
		title: "3Sum Closest",
		difficulty: "Medium",
		acceptance: "35.2%",
	},
	{
		title: "4Sum",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Letter Combinations of a Phone Number",
		difficulty: "Medium",
		acceptance: "44.2%",
	},
	{
		title: "Remove Nth Node From End of List",
		difficulty: "Medium",
		acceptance: "34.5%",
	},
	{
		title: "Valid Parentheses",
		difficulty: "Easy",
		acceptance: "37.1%",
	},
	{
		title: "Merge Two Sorted Lists",
		difficulty: "Easy",
		acceptance: "51.1%",
	},
	{
		title: "Generate Parentheses",
		difficulty: "Medium",
		acceptance: "58.1%",
	},
	{
		title: "Merge k Sorted Lists",
		difficulty: "Hard",
		acceptance: "36.0%",
	},
	{
		title: "Swap Nodes in Pairs",
		difficulty: "Medium",
		acceptance: "45.3%",
	},
	{
		title: "Reverse Nodes in k-Group",
		difficulty: "Hard",
		acceptance: "39.0%",
	},
	{
		title: "Remove Duplicates from Sorted Array",
		difficulty: "Easy",
		acceptance: "41.1%",
	},
	{
		title: "Remove Element",
		difficulty: "Easy",
		acceptance: "46.1%",
	},
	{
		title: "Implement strStr()",
		difficulty: "Easy",
		acceptance: "32.1%",
	},
	{
		title: "Divide Two Integers",
		difficulty: "Medium",
		acceptance: "16.4%",
	},
	{
		title: "Substring with Concatenation of All Words",
		difficulty: "Hard",
		acceptance: "24.3%",
	},
	{
		title: "Next Permutation",
		difficulty: "Medium",
		acceptance: "31.2%",
	},
	{
		title: "Longest Valid Parentheses",
		difficulty: "Hard",
		acceptance: "27.2%",
	},
	{
		title: "Search in Rotated Sorted Array",
		difficulty: "Medium",
		acceptance: "33.4%",
	},
	{
		title: "Find First and Last Position of Element in Sorted Array",
		difficulty: "Medium",
		acceptance: "34.4%",
	},
	{
		title: "Search Insert Position",
		difficulty: "Easy",
		acceptance: "41.4%",
	},
	{
		title: "Valid Sudoku",
		difficulty: "Medium",
		acceptance: "46.4%",
	},
	{
		title: "Sudoku Solver",
		difficulty: "Hard",
		acceptance: "41.0%",
	},
	{
		title: "Count and Say",
		difficulty: "Easy",
		acceptance: "42.1%",
	},
	{
		title: "Combination Sum",
		difficulty: "Medium",
		acceptance: "51.1%",
	},
	{
		title: "Combination Sum II",
		difficulty: "Medium",
		acceptance: "45.0%",
	},
	{
		title: "First Missing Positive",
		difficulty: "Hard",
		acceptance: "30.1%",
	},
	{
		title: "Trapping Rain Water",
		difficulty: "Hard",
		acceptance: "47.5%",
	},
	{
		title: "Multiply Strings",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Wildcard Matching",
		difficulty: "Hard",
		acceptance: "23.5%",
	},
	{
		title: "Jump Game",
		difficulty: "Medium",
		acceptance: "32.6%",
	},
	{
		title: "Merge Intervals",
		difficulty: "Medium",
		acceptance: "37.6%",
	},
	{
		title: "Insert Interval",
		difficulty: "Hard",
		acceptance: "32.6%",
	},
	{
		title: "Two Sum",
		difficulty: "Easy",
		acceptance: "50.1%",
	},
	{
		title: "Add Two Numbers",
		difficulty: "Medium",
		acceptance: "35.1%",
	},
	{
		title: "Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		acceptance: "30.1%",
	},
	{
		title: "Median of Two Sorted Arrays",
		difficulty: "Hard",
		acceptance: "25.1%",
	},
	{
		title: "Longest Palindromic Substring",
		difficulty: "Medium",
		acceptance: "20.1%",
	},
	{
		title: "ZigZag Conversion",
		difficulty: "Medium",
		acceptance: "15.1%",
	},
	{
		title: "Reverse Integer",
		difficulty: "Easy",
		acceptance: "10.1%",
	},
	{
		title: "String to Integer",
		difficulty: "Medium",
		acceptance: "20.0%",
	},
	{
		title: "Palindrome Number",
		difficulty: "Easy",
		acceptance: "45.0%",
	},
	{
		title: "Regular Expression Matching",
		difficulty: "Hard",
		acceptance: "25.6%",
	},
	{
		title: "Container With Most Water",
		difficulty: "Medium",
		acceptance: "47.0%",
	},
	{
		title: "Integer to Roman",
		difficulty: "Medium",
		acceptance: "53.1%",
	},
	{
		title: "Roman to Integer",
		difficulty: "Easy",
		acceptance: "53.2%",
	},
	{
		title: "Longest Common Prefix",
		difficulty: "Easy",
		acceptance: "34.2%",
	},
	{
		title: "3Sum",
		difficulty: "Medium",
		acceptance: "25.2%",
	},
	{
		title: "3Sum Closest",
		difficulty: "Medium",
		acceptance: "35.2%",
	},
	{
		title: "4Sum",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Letter Combinations of a Phone Number",
		difficulty: "Medium",
		acceptance: "44.2%",
	},
	{
		title: "Remove Nth Node From End of List",
		difficulty: "Medium",
		acceptance: "34.5%",
	},
	{
		title: "Valid Parentheses",
		difficulty: "Easy",
		acceptance: "37.1%",
	},
	{
		title: "Merge Two Sorted Lists",
		difficulty: "Easy",
		acceptance: "51.1%",
	},
	{
		title: "Generate Parentheses",
		difficulty: "Medium",
		acceptance: "58.1%",
	},
	{
		title: "Merge k Sorted Lists",
		difficulty: "Hard",
		acceptance: "36.0%",
	},
	{
		title: "Swap Nodes in Pairs",
		difficulty: "Medium",
		acceptance: "45.3%",
	},
	{
		title: "Reverse Nodes in k-Group",
		difficulty: "Hard",
		acceptance: "39.0%",
	},
	{
		title: "Remove Duplicates from Sorted Array",
		difficulty: "Easy",
		acceptance: "41.1%",
	},
	{
		title: "Remove Element",
		difficulty: "Easy",
		acceptance: "46.1%",
	},
	{
		title: "Implement strStr()",
		difficulty: "Easy",
		acceptance: "32.1%",
	},
	{
		title: "Divide Two Integers",
		difficulty: "Medium",
		acceptance: "16.4%",
	},
	{
		title: "Substring with Concatenation of All Words",
		difficulty: "Hard",
		acceptance: "24.3%",
	},
	{
		title: "Next Permutation",
		difficulty: "Medium",
		acceptance: "31.2%",
	},
	{
		title: "Longest Valid Parentheses",
		difficulty: "Hard",
		acceptance: "27.2%",
	},
	{
		title: "Search in Rotated Sorted Array",
		difficulty: "Medium",
		acceptance: "33.4%",
	},
	{
		title: "Find First and Last Position of Element in Sorted Array",
		difficulty: "Medium",
		acceptance: "34.4%",
	},
	{
		title: "Search Insert Position",
		difficulty: "Easy",
		acceptance: "41.4%",
	},
	{
		title: "Valid Sudoku",
		difficulty: "Medium",
		acceptance: "46.4%",
	},
	{
		title: "Sudoku Solver",
		difficulty: "Hard",
		acceptance: "41.0%",
	},
	{
		title: "Count and Say",
		difficulty: "Easy",
		acceptance: "42.1%",
	},
	{
		title: "Combination Sum",
		difficulty: "Medium",
		acceptance: "51.1%",
	},
	{
		title: "Combination Sum II",
		difficulty: "Medium",
		acceptance: "45.0%",
	},
	{
		title: "First Missing Positive",
		difficulty: "Hard",
		acceptance: "30.1%",
	},
	{
		title: "Trapping Rain Water",
		difficulty: "Hard",
		acceptance: "47.5%",
	},
	{
		title: "Multiply Strings",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Wildcard Matching",
		difficulty: "Hard",
		acceptance: "23.5%",
	},
	{
		title: "Jump Game",
		difficulty: "Medium",
		acceptance: "32.6%",
	},
	{
		title: "Merge Intervals",
		difficulty: "Medium",
		acceptance: "37.6%",
	},
	{
		title: "Insert Interval",
		difficulty: "Hard",
		acceptance: "32.6%",
	},
	{
		title: "Two Sum",
		difficulty: "Easy",
		acceptance: "50.1%",
	},
	{
		title: "Add Two Numbers",
		difficulty: "Medium",
		acceptance: "35.1%",
	},
	{
		title: "Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		acceptance: "30.1%",
	},
	{
		title: "Median of Two Sorted Arrays",
		difficulty: "Hard",
		acceptance: "25.1%",
	},
	{
		title: "Longest Palindromic Substring",
		difficulty: "Medium",
		acceptance: "20.1%",
	},
	{
		title: "ZigZag Conversion",
		difficulty: "Medium",
		acceptance: "15.1%",
	},
	{
		title: "Reverse Integer",
		difficulty: "Easy",
		acceptance: "10.1%",
	},
	{
		title: "String to Integer",
		difficulty: "Medium",
		acceptance: "20.0%",
	},
	{
		title: "Palindrome Number",
		difficulty: "Easy",
		acceptance: "45.0%",
	},
	{
		title: "Regular Expression Matching",
		difficulty: "Hard",
		acceptance: "25.6%",
	},
	{
		title: "Container With Most Water",
		difficulty: "Medium",
		acceptance: "47.0%",
	},
	{
		title: "Integer to Roman",
		difficulty: "Medium",
		acceptance: "53.1%",
	},
	{
		title: "Roman to Integer",
		difficulty: "Easy",
		acceptance: "53.2%",
	},
	{
		title: "Longest Common Prefix",
		difficulty: "Easy",
		acceptance: "34.2%",
	},
	{
		title: "3Sum",
		difficulty: "Medium",
		acceptance: "25.2%",
	},
	{
		title: "3Sum Closest",
		difficulty: "Medium",
		acceptance: "35.2%",
	},
	{
		title: "4Sum",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Letter Combinations of a Phone Number",
		difficulty: "Medium",
		acceptance: "44.2%",
	},
	{
		title: "Remove Nth Node From End of List",
		difficulty: "Medium",
		acceptance: "34.5%",
	},
	{
		title: "Valid Parentheses",
		difficulty: "Easy",
		acceptance: "37.1%",
	},
	{
		title: "Merge Two Sorted Lists",
		difficulty: "Easy",
		acceptance: "51.1%",
	},
	{
		title: "Generate Parentheses",
		difficulty: "Medium",
		acceptance: "58.1%",
	},
	{
		title: "Merge k Sorted Lists",
		difficulty: "Hard",
		acceptance: "36.0%",
	},
	{
		title: "Swap Nodes in Pairs",
		difficulty: "Medium",
		acceptance: "45.3%",
	},
	{
		title: "Reverse Nodes in k-Group",
		difficulty: "Hard",
		acceptance: "39.0%",
	},
	{
		title: "Remove Duplicates from Sorted Array",
		difficulty: "Easy",
		acceptance: "41.1%",
	},
	{
		title: "Remove Element",
		difficulty: "Easy",
		acceptance: "46.1%",
	},
	{
		title: "Implement strStr()",
		difficulty: "Easy",
		acceptance: "32.1%",
	},
	{
		title: "Divide Two Integers",
		difficulty: "Medium",
		acceptance: "16.4%",
	},
	{
		title: "Substring with Concatenation of All Words",
		difficulty: "Hard",
		acceptance: "24.3%",
	},
	{
		title: "Next Permutation",
		difficulty: "Medium",
		acceptance: "31.2%",
	},
	{
		title: "Longest Valid Parentheses",
		difficulty: "Hard",
		acceptance: "27.2%",
	},
	{
		title: "Search in Rotated Sorted Array",
		difficulty: "Medium",
		acceptance: "33.4%",
	},
	{
		title: "Find First and Last Position of Element in Sorted Array",
		difficulty: "Medium",
		acceptance: "34.4%",
	},
	{
		title: "Search Insert Position",
		difficulty: "Easy",
		acceptance: "41.4%",
	},
	{
		title: "Valid Sudoku",
		difficulty: "Medium",
		acceptance: "46.4%",
	},
	{
		title: "Sudoku Solver",
		difficulty: "Hard",
		acceptance: "41.0%",
	},
	{
		title: "Count and Say",
		difficulty: "Easy",
		acceptance: "42.1%",
	},
	{
		title: "Combination Sum",
		difficulty: "Medium",
		acceptance: "51.1%",
	},
	{
		title: "Combination Sum II",
		difficulty: "Medium",
		acceptance: "45.0%",
	},
	{
		title: "First Missing Positive",
		difficulty: "Hard",
		acceptance: "30.1%",
	},
	{
		title: "Trapping Rain Water",
		difficulty: "Hard",
		acceptance: "47.5%",
	},
	{
		title: "Multiply Strings",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Wildcard Matching",
		difficulty: "Hard",
		acceptance: "23.5%",
	},
	{
		title: "Jump Game",
		difficulty: "Medium",
		acceptance: "32.6%",
	},
	{
		title: "Merge Intervals",
		difficulty: "Medium",
		acceptance: "37.6%",
	},
	{
		title: "Insert Interval",
		difficulty: "Hard",
		acceptance: "32.6%",
	},
	{
		title: "Two Sum",
		difficulty: "Easy",
		acceptance: "50.1%",
	},
	{
		title: "Add Two Numbers",
		difficulty: "Medium",
		acceptance: "35.1%",
	},
	{
		title: "Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		acceptance: "30.1%",
	},
	{
		title: "Median of Two Sorted Arrays",
		difficulty: "Hard",
		acceptance: "25.1%",
	},
	{
		title: "Longest Palindromic Substring",
		difficulty: "Medium",
		acceptance: "20.1%",
	},
	{
		title: "ZigZag Conversion",
		difficulty: "Medium",
		acceptance: "15.1%",
	},
	{
		title: "Reverse Integer",
		difficulty: "Easy",
		acceptance: "10.1%",
	},
	{
		title: "String to Integer",
		difficulty: "Medium",
		acceptance: "20.0%",
	},
	{
		title: "Palindrome Number",
		difficulty: "Easy",
		acceptance: "45.0%",
	},
	{
		title: "Regular Expression Matching",
		difficulty: "Hard",
		acceptance: "25.6%",
	},
	{
		title: "Container With Most Water",
		difficulty: "Medium",
		acceptance: "47.0%",
	},
	{
		title: "Integer to Roman",
		difficulty: "Medium",
		acceptance: "53.1%",
	},
	{
		title: "Roman to Integer",
		difficulty: "Easy",
		acceptance: "53.2%",
	},
	{
		title: "Longest Common Prefix",
		difficulty: "Easy",
		acceptance: "34.2%",
	},
	{
		title: "3Sum",
		difficulty: "Medium",
		acceptance: "25.2%",
	},
	{
		title: "3Sum Closest",
		difficulty: "Medium",
		acceptance: "35.2%",
	},
	{
		title: "4Sum",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Letter Combinations of a Phone Number",
		difficulty: "Medium",
		acceptance: "44.2%",
	},
	{
		title: "Remove Nth Node From End of List",
		difficulty: "Medium",
		acceptance: "34.5%",
	},
	{
		title: "Valid Parentheses",
		difficulty: "Easy",
		acceptance: "37.1%",
	},
	{
		title: "Merge Two Sorted Lists",
		difficulty: "Easy",
		acceptance: "51.1%",
	},
	{
		title: "Generate Parentheses",
		difficulty: "Medium",
		acceptance: "58.1%",
	},
	{
		title: "Merge k Sorted Lists",
		difficulty: "Hard",
		acceptance: "36.0%",
	},
	{
		title: "Swap Nodes in Pairs",
		difficulty: "Medium",
		acceptance: "45.3%",
	},
	{
		title: "Reverse Nodes in k-Group",
		difficulty: "Hard",
		acceptance: "39.0%",
	},
	{
		title: "Remove Duplicates from Sorted Array",
		difficulty: "Easy",
		acceptance: "41.1%",
	},
	{
		title: "Remove Element",
		difficulty: "Easy",
		acceptance: "46.1%",
	},
	{
		title: "Implement strStr()",
		difficulty: "Easy",
		acceptance: "32.1%",
	},
	{
		title: "Divide Two Integers",
		difficulty: "Medium",
		acceptance: "16.4%",
	},
	{
		title: "Substring with Concatenation of All Words",
		difficulty: "Hard",
		acceptance: "24.3%",
	},
	{
		title: "Next Permutation",
		difficulty: "Medium",
		acceptance: "31.2%",
	},
	{
		title: "Longest Valid Parentheses",
		difficulty: "Hard",
		acceptance: "27.2%",
	},
	{
		title: "Search in Rotated Sorted Array",
		difficulty: "Medium",
		acceptance: "33.4%",
	},
	{
		title: "Find First and Last Position of Element in Sorted Array",
		difficulty: "Medium",
		acceptance: "34.4%",
	},
	{
		title: "Search Insert Position",
		difficulty: "Easy",
		acceptance: "41.4%",
	},
	{
		title: "Valid Sudoku",
		difficulty: "Medium",
		acceptance: "46.4%",
	},
	{
		title: "Sudoku Solver",
		difficulty: "Hard",
		acceptance: "41.0%",
	},
	{
		title: "Count and Say",
		difficulty: "Easy",
		acceptance: "42.1%",
	},
	{
		title: "Combination Sum",
		difficulty: "Medium",
		acceptance: "51.1%",
	},
	{
		title: "Combination Sum II",
		difficulty: "Medium",
		acceptance: "45.0%",
	},
	{
		title: "First Missing Positive",
		difficulty: "Hard",
		acceptance: "30.1%",
	},
	{
		title: "Trapping Rain Water",
		difficulty: "Hard",
		acceptance: "47.5%",
	},
	{
		title: "Multiply Strings",
		difficulty: "Medium",
		acceptance: "32.2%",
	},
	{
		title: "Wildcard Matching",
		difficulty: "Hard",
		acceptance: "23.5%",
	},
	{
		title: "Jump Game",
		difficulty: "Medium",
		acceptance: "32.6%",
	},
	{
		title: "Merge Intervals",
		difficulty: "Medium",
		acceptance: "37.6%",
	},
	{
		title: "Insert Interval",
		difficulty: "Hard",
		acceptance: "32.6%",
	},
];

const defaultProblemsPerPage = 20;
const defaultPageNumber = 1;

export const problemsLoader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const pageStr = url.searchParams.get("page");
	const page = pageStr ? Number.parseFloat(pageStr) : defaultPageNumber;
	const pageSizeStr = url.searchParams.get("pageSize");
	const pageSize = pageSizeStr
		? Number.parseFloat(pageSizeStr)
		: defaultProblemsPerPage;

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		page,
		pageSize,
		problems: problems.slice((page - 1) * pageSize, page * pageSize),
		total: problems.length,
	};
};
type PromiseResultType<T> = T extends Promise<infer R> ? R : never;

export const ProblemsRoute = () => {
	const { page, pageSize, problems, total } =
		useLoaderData() as PromiseResultType<ReturnType<typeof problemsLoader>>;

	return (
		<Problems
			problems={problems}
			page={page}
			pageSize={pageSize}
			total={total}
		/>
	);
};
