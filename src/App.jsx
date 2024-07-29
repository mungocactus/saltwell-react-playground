import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./components/PageHome.jsx";
import PageNasa from "./components/PageNasa.jsx";
import PageWeather from "./components/PageWeather.jsx";

const routerVariable = createBrowserRouter([
	{ path: "/", element: <PageHome /> },
	{ path: "/nasa", element: <PageNasa /> },
	{ path: "/weather", element: <PageWeather /> },
]);

function App() {
	return <RouterProvider router={routerVariable} />;
}

export default App;
