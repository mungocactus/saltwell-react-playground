import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./components/PageHome.jsx";
import PageNasa from "./components/PageNasa.jsx";
import PageWeather from "./components/PageWeather.jsx";
import PageAboutYou from "./components/PageAboutYou.jsx";
import PageCurrencyConverter from "./components/PageCurrencyConverter.jsx";

const routerVariable = createBrowserRouter([
	{ path: "/", element: <PageHome /> },
	{ path: "/nasa", element: <PageNasa /> },
	{ path: "/weather", element: <PageWeather /> },
	{ path: "/about-you", element: <PageAboutYou /> },
	{ path: "/currency-converter", element: <PageCurrencyConverter /> },
]);

function App() {
	return <RouterProvider router={routerVariable} />;
}

export default App;
