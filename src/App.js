import "./App.css";
// import { Home, Error } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, ContactUs, Error, Home, FintechLandingPage } from "./pages";
import { AboutUs } from "./pages/AboutUs";
import TermsAndConditions from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <About />,
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
			path: "/about-us",
			element: <AboutUs />,
		},
		{
			path: "/contact-us",
			element: <ContactUs />,
		},
		{
			path: "/privacy-policy",
			element: <PrivacyPolicy />,
		},
		{
			path: "/our-terms",
			element: <TermsAndConditions />,
		},
		{
			path: "/products",
			element: <FintechLandingPage />,
		},
	]);
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
