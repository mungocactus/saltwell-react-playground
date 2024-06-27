import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./components/PageHome.jsx";
import PageNasa from "./components/PageNasa.jsx";
import PageWeather from "./components/PageWeather.jsx";
import PageTicTacToe from "./components/PageTicTacToe.jsx";

const routerVariable = createBrowserRouter([
	{ path: "/", element: <PageHome /> },
	{ path: "/nasa", element: <PageNasa /> },
	{ path: "/weather", element: <PageWeather /> },
	{ path: "/tictactoe", element: <PageTicTacToe /> },
]);

function App() {
	return <RouterProvider router={routerVariable} />;
}

export default App;
