import React, { useEffect, useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import AboutSection from "../components/AboutSection";
import Testimonial from "../components/Testimonials";
import image from "../assets/payit/imag37.png";
import { useLocation } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import Logo from "../assets/PayIT SVG.svg";
import AboutFooter from "../components/AboutFooter";
import Arrow from "../assets/payit/Arrow_05.png";
import Icon from "../assets/payit/Untitled.png";
import Image8 from "../assets/payit/image8.png";
import PayITSection from "../components/PayIt";
import GetStartedSteps from "../components/GetStarted";
import CustomSection from "../components/CustomSection";
import CenteredSectionWithGrid from "../components/CenteredSection";

export const About = () => {
	const { pathname } = useLocation();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isNewOpen, setIsNewOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
	const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
	const toggleDropdowns = () => setIsOpen(!isOpen);
	const toggleNewDropdowns = () => setIsNewOpen(!isNewOpen);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div>
			<div className='relative flex flex-col items-center justify-center bg-black px-4 sm:px-8 lg:px-16 py-8 sm:py-4 lg:py-2'>
				{/* Logo */}
				<img
					src={Logo}
					alt='Logo'
					className='my-2 sm:my-2 lg:my-10 w-24 sm:w-32 lg:w-40'
				/>

				{/* Title */}
				<div className='max-w-4xl mx-auto px-4'>
					{" "}
					{/* Container to limit width and center the content */}
					<h1 className='text-4xl md:text-6xl font-bold text-center text-white mb-2 sm:mb-4 lg:mb-6'>
						Empowering You with Fast, Smarter, and Seamless Solutions
					</h1>
					{/* Subtitle */}
					<p
						className='text-md md:text-lg mb-12 text-[#626262]  text-center'
						// className='text-base sm:text-lg lg:text-xl text-center mb-4 sm:mb-6 lg:mb-8'
					>
						PayIT, one of the Top Payment Apps in Africa, is designed to provide
						You with intelligent, secure, and personalized financial services.
						Whether You’re buying airtime or data, paying bills, transferring
						money, or managing Your expenses, PayIT leverages AI-driven
						technology to deliver a seamless and enjoyable experience every
						time.
					</p>
				</div>
				<div className='flex items-center justify-between w-full'>
					<div className='flex-grow flex justify-center'>
						<button
							className='flex items-center justify-center my-4 sm:my-6 lg:my-8 text-gray-800 text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-full shadow-md hover:shadow-lg transition duration-300'
							style={{
								background:
									"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
							}}
							onClick={toggleDropdowns}
						>
							<FaApple className='text-lg sm:text-xl lg:text-2xl mr-2' />
							<FaGooglePlay className='text-lg sm:text-xl lg:text-xl mr-2' />
							<span>Download the App</span>
						</button>
					</div>

					<div
						className='hidden md:block p-2 rounded-full justify-center items-center'
						style={{
							background:
								"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
							// width: "60px", // Adjust width as needed
						}}
					>
						<a
							href='https://api.whatsapp.com/send?phone=+2347061728745&text=Dear%20PayIT%20Support'
							target='_blank'
							rel='noopener noreferrer'
						>
							<MessageIcon className='text-xl text-black' />
						</a>
					</div>
				</div>

				{isOpen && (
					<div className='mt-2 w-48 bg-white rounded-md shadow-lg'>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							className='block px-4 py-2 hover:bg-[#FEF69E] text-black cursor-pointer' // Light hover color
							onClick={() => setIsOpen(false)}
						>
							iOS
						</a>
						<a
							href='https://play.google.com/store/apps/details?id=ng.com.payit.app'
							target='_blank'
							rel='noopener noreferrer'
							className='block px-4 py-2 hover:bg-[#FEF69E] text-black cursor-pointer' // Light hover color
							onClick={() => setIsOpen(false)}
						>
							Android
						</a>
					</div>
				)}

				<img
					src={image}
					alt='Bottom Image'
					className='w-full max-w-xs sm:max-w-sm lg:max-w-full mt-6 sm:mt-8 lg:mt-10'
				/>

				{/* Scan to Download */}
				<div className=' relative lg:absolute md:right-4 sm:right-8 lg:right-12 md:bottom-24 sm:bottom-0 lg:bottom-48 text-center items-center flex flex-col'>
					<img src={Icon} alt='' className='w-24 sm:w-28 lg:w-36' />
					<p className='text-white mt-2'>Scan to Download</p>
					<img src={Arrow} alt='' className='w-16 sm:w-20 lg:w-24 mt-2' />
				</div>

				{/* For Small Screens (Bottom Positioned) */}
				<div
					className='absolute bottom-12 md:hidden lg:hidden block right-4 p-2 rounded-full'
					style={{
						background:
							"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
					}}
				>
					<MessageIcon className='text-xl text-black' />
				</div>
			</div>

			<div className='flex flex-col md:flex-row  justify-between p-10 rounded-lg '>
				{/* Left Side (Text Content) */}
				<div className='flex flex-col md:items-start items-center text-center md:text-left md:flex-1'>
					<span className='text-gray-500 text-sm md:text-base'>
						WHY CHOOSE PAYIT
					</span>
					<h1
						className=' md:text-3xl  font-extrabold mt-2'
						style={{
							fontFamily: "'Maison Neue', sans-serif",
							fontSize: "40px",
						}}
					>
						One App Unlimited Possibilities
					</h1>
					<p
						className='mt-4 text-gray-700'
						style={{ fontFamily: "'Aeonik', sans-serif", fontSize: "" }}
					>
						PayIT is more than just a payment app; it's a comprehensive solution
						designed to simplify your financial life. With PayIT, you can send
						money, pay bills, shop online, and manage your finances—all from one
						app. Our user-friendly interface and robust security features ensure
						that your transactions are not only convenient but also safe.
					</p>
					<div>
						<button
							className='flex items-center p-4 my-4  rounded-full'
							style={{
								background:
									"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
							}}
							onClick={toggleNewDropdowns}
						>
							<FaApple className='text-lg sm:text-xl lg:text-2xl mr-2' />
							<FaGooglePlay className='text-lg sm:text-xl lg:text-xl mr-2' />
							<span className='ml-4'>Download the App</span>
						</button>
						{isNewOpen && (
							<div className='mt-2 w-48 bg-white rounded-md shadow-lg'>
								<a
									href='#'
									target='_blank'
									rel='noopener noreferrer'
									className='block px-4 py-2 hover:bg-[#FEF69E] text-black cursor-pointer' // Light hover color
									onClick={() => setIsNewOpen(false)}
								>
									iOS
								</a>
								<a
									href='https://play.google.com/store/apps/details?id=ng.com.payit.app'
									target='_blank'
									rel='noopener noreferrer'
									className='block px-4 py-2 hover:bg-[#FEF69E] text-black cursor-pointer' // Light hover color
									onClick={() => setIsNewOpen(false)}
								>
									Android
								</a>
							</div>
						)}
					</div>
				</div>
				{/* Right Side (Image) */}
				<div className='mt-6 md:mt-0 md:ml-6 w-full md:w-3/5'>
					<img
						src={Image8}
						alt='App Preview'
						className='w-full h-auto rounded-lg'
					/>
				</div>
			</div>
			<AboutSection />
			<PayITSection />
			{/* <CustomSection /> */}
			<CenteredSectionWithGrid />
			<Testimonial />
			<GetStartedSteps />
			{/* <CenteredImageLayout /> */}
			<AboutFooter />
		</div>
	);
};
