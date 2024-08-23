import "./App.css";
import CenteredSectionWithGrid from "./components/CenteredSection";
import CustomSection from "./components/CustomSection";
import FeaturesSection from "./components/FeatureSection";
import FAQSection from "./components/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<FeaturesSection />
			<CustomSection />
			<CenteredSectionWithGrid />
			<FAQSection />
			<Footer />
		</div>
	);
}

export default App;
