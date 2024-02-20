import { Outlet } from "react-router-dom";

export function Dashboard() {
	return (
		<>
			<h1>SideBar</h1>
			<Outlet />
		</>
	);
}
