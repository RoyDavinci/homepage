import "./App.css";
// import { Home, Error } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, ContactUs, Error, Home } from "./pages";

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
		{
			path: "/contact-us",
			element: <ContactUs />,
		},
	]);
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
