import React from "react";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";
import { FaApple, FaAndroid } from "react-icons/fa";
import AboutSection from "../components/AboutSection";
import Testimonial from "../components/Testimonials";
import image from "../assets/payit/imag37.png";
import CenteredImageLayout from "../components/CenteredImage";
import { Started } from "../components/Started";
import { Button } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import Logo from "../assets/payit/Group 30910.png";
import AboutFooter from "../components/AboutFooter";
import Arrow from "../assets/payit/Arrow_05.png";
import Icon from "../assets/payit/Untitled.png";
import Image8 from "../assets/payit/image8.png";

export const About = () => {
	return (
		<div>
			{/* <div className='relative flex flex-col items-center justify-center  bg-black px-4 '>
				<img src={Logo} alt='Logo' className=' my-10' />

				<h1 className='text-4xl font-bold text-center text-white mb-4'>
					Seamless payments unlimited possibilities
				</h1>

				<p className='text-lg text-center text-[#626262]'>
					Experience the future of payments with PayIT- your all in one secure
					app for fast secure and effortless transactions.
				</p>
				<button className='flex items-center justify-center bg-[#FEF595] my-4 text-gray-800 text-sm py-4 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300'>
					<FaApple className='text-xl mr-2' />

					<FaAndroid className='text-xl mr-2' />

					<span>Download the App</span>
				</button>

				<img src={image} alt='Bottom Image' className='' />
				<div className='absolute right-6 bottom-60'>
					<img src={Icon} alt='' className='w-36' />
					<p className='text-white'>Scan to Download</p>
					<img src={Arrow} alt='' />
				</div>

				<div className='absolute right-4 top-80 bg-[#FEF595] p-2 rounded-full'>
					<IconButton aria-label='message' color='#000'>
						<MessageIcon color='black' />
					</IconButton>
				</div>
			</div> */}

			<div className='relative flex flex-col items-center justify-center bg-black px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16'>
				{/* Logo */}
				<img
					src={Logo}
					alt='Logo'
					className='my-6 sm:my-8 lg:my-10 w-24 sm:w-32 lg:w-40'
				/>

				{/* Title */}
				<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-2 sm:mb-4 lg:mb-6'>
					Seamless payments, unlimited possibilities
				</h1>

				{/* Subtitle */}
				<p className='text-base sm:text-lg lg:text-xl text-center text-[#626262] mb-4 sm:mb-6 lg:mb-8'>
					Experience the future of payments with PayIT—your all-in-one secure
					app for fast, secure, and effortless transactions.
				</p>

				{/* Download Button */}
				<button className='flex items-center justify-center bg-[#FEF595] my-4 sm:my-6 lg:my-8 text-gray-800 text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-full shadow-md hover:shadow-lg transition duration-300'>
					<FaApple className='text-lg sm:text-xl lg:text-2xl mr-2' />
					<FaAndroid className='text-lg sm:text-xl lg:text-2xl mr-2' />
					<span>Download the App</span>
				</button>

				{/* Image at the Bottom */}
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
				<div className='absolute lg:top-96 md:block lg:block hidden right-4 bg-[#FEF595] p-2 rounded-full'>
					<IconButton aria-label='message'>
						<MessageIcon color='black' />
					</IconButton>
				</div>

				{/* For Small Screens (Bottom Positioned) */}
				<div className='absolute bottom-12 md:hidden lg:hidden block right-4 bg-[#FEF595] p-2 rounded-full'>
					<IconButton aria-label='message'>
						<MessageIcon color='black' />
					</IconButton>
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
						<button className='flex items-center p-4 my-4 bg-[#FEF595] rounded-full'>
							<AppleIcon sx={{ marginLeft: "4px" }} />
							<AndroidIcon sx={{ marginLeft: "4px" }} />{" "}
							<span className='ml-4'>Download the App</span>
						</button>
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
			<Testimonial />
			{/* <CenteredImageLayout /> */}
			<AboutFooter />
		</div>
	);
};
