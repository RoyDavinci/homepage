import React, { useEffect } from "react";
import Header from "../components/Header";
import FeaturesSection from "../components/FeatureSection";
import CustomSection from "../components/CustomSection";
import CenteredSectionWithGrid from "../components/CenteredSection";
import FAQSection from "../components/FAQ";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import PayITSection from "../components/PayIt";
import GetStartedSteps from "../components/GetStarted";

export const Home = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div>
			<Header />
			<FeaturesSection />
			<PayITSection />
			<CustomSection />
			<CenteredSectionWithGrid />
			<GetStartedSteps />
			<FAQSection />
			<Footer />
		</div>
	);
};
