import { NavLink } from "react-router-dom";

export default function NavMenu() {
	return (
		<nav>
			<NavLink to="/" className={({ isActive }) => (isActive ? "active" : " ")}>
				Home
			</NavLink>
			<NavLink
				to="/tictactoe"
				className={({ isActive }) => (isActive ? "active" : " ")}
			>
				Tic Tac Toe
			</NavLink>
			<NavLink
				to="/weather"
				className={({ isActive }) => (isActive ? "active" : " ")}
			>
				Weather
			</NavLink>
			<NavLink
				to="/nasa"
				className={({ isActive }) => (isActive ? "active" : " ")}
			>
				NASA
			</NavLink>
		</nav>
	);
}
