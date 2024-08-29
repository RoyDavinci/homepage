import React from "react";
import Header from "../components/Header";
import FeaturesSection from "../components/FeatureSection";
import CustomSection from "../components/CustomSection";
import CenteredSectionWithGrid from "../components/CenteredSection";
import FAQSection from "../components/FAQ";
import Footer from "../components/Footer";

export const Home = () => {
	return (
		<div>
			<Header />
			<FeaturesSection />
			<CustomSection />
			<CenteredSectionWithGrid />
			<FAQSection />
			<Footer />
		</div>
	);
};
