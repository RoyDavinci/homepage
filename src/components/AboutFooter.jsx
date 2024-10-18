import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Started } from "./Started";
import Logo from "../assets/PayIT SVG.svg";
const AboutFooter = () => {
	return (
		<footer className='bg-[#0f0e0e] text-white px-6 py-8'>
			<div className='-mt-20 mb-12'>
				<Started />
			</div>
			<div className='flex flex-col md:flex-row justify-between items-center'>
				{/* Left Section: Logo and Social Media Icons */}
				<div className='flex flex-col items-center md:items-start flex-1'>
					{/* Logo */}
					<img src={Logo} alt='Logo' className='mb-4 ' />

					{/* Description */}
					<p className='text-center md:text-left mb-4 text-[#828282] lg:w-[40%] w-[90%]'>
						From everyday transactions to major purchases, PayIT brings the
						power of unlimited possibilities to your fingertips. Wherever life
						takes you, PayIT has you covered.
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
				<div className='flex flex-col md:flex-row flex-1 items-center  gap-8 md:gap-12 lg:gap-16 mt-6 md:mt-0'>
					<a
						href='#home'
						className='hover:text-yellow-500 transition duration-300 text-xl '
					>
						Home
					</a>
					<a
						href='#about'
						className='hover:text-yellow-500 transition duration-300 text-xl '
					>
						About
					</a>
					<a
						href='#terms'
						className='hover:text-yellow-500 transition duration-300 text-xl '
					>
						Terms & Conditions
					</a>
					<a
						href='/contact-us'
						className='hover:text-yellow-500 transition duration-300 text-xl '
					>
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
};

export default AboutFooter;
