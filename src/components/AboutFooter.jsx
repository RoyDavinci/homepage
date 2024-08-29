import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Started } from "./Started";
import Logo from "../assets/payit/Group 30910.png";

const AboutFooter = () => {
	return (
		<footer className='bg-[#0f0e0e] text-white px-6 py-8'>
			<div className='-mt-20 mb-12'>
				<Started />
			</div>
			<div className='flex flex-col md:flex-row justify-between items-center'>
				{/* Left Section: Logo and Social Media Icons */}
				<div className='flex flex-col items-center md:items-start'>
					{/* Logo */}
					<img src={Logo} alt='Logo' className='mb-4 ' />

					{/* Description */}
					<p className='text-center md:text-left mb-4'>
						Our payment app provides seamless and secure transactions, making
						your life easier.
					</p>

					{/* Social Media Icons */}
					<div className='flex space-x-4'>
						<a
							href='https://www.facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 rounded-full border border-[#ccc]'
						>
							<FaFacebook className='text-md hover:text-blue-500 transition duration-300' />
						</a>
						<a
							href='https://www.instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 rounded-full border border-[#ccc]'
						>
							<FaInstagram className='text-md hover:text-pink-500 transition duration-300' />
						</a>
						<a
							href='https://www.linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 rounded-full border border-[#ccc]'
						>
							<FaLinkedin className='text-md hover:text-blue-700 transition duration-300' />
						</a>
						<a
							href='https://www.youtube.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-2 rounded-full border border-[#ccc]'
						>
							<FaYoutube className='text-md hover:text-red-600 transition duration-300' />
						</a>
					</div>
				</div>

				{/* Right Section: Links */}
				<div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-6 md:mt-0'>
					<a
						href='#home'
						className='hover:text-yellow-500 transition duration-300'
					>
						Home
					</a>
					<a
						href='#about'
						className='hover:text-yellow-500 transition duration-300'
					>
						About
					</a>
					<a
						href='#terms'
						className='hover:text-yellow-500 transition duration-300'
					>
						Terms & Conditions
					</a>
					<a
						href='#contact'
						className='hover:text-yellow-500 transition duration-300'
					>
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
};

export default AboutFooter;
