import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export type ConditionalRouteProps = {
	condition: () => boolean;
	redirectTo: string;
	children?: ReactNode;
};

export function ConditionalRoute({
	condition,
	redirectTo,
	children,
}: ConditionalRouteProps): JSX.Element {
	return condition() ? <>{children}</> : <Navigate to={redirectTo} replace />;
}
