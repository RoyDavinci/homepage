import "./App.css";
// import { Home, Error } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Error, Home } from "./pages";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "*",
			element: <Error />,
		},
		{
			path: "/about",
			element: <About />,
		},
	]);
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
