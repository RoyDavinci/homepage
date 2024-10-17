import React, { useState } from "react";
import { FaBars, FaChevronDown, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/payit/Group 30910.png";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
	const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
	const toggleDropdowns = () => setIsOpen(!isOpen);

	const handleRedirect = (platform) => {
		const urls = {
			ios: "https://apps.apple.com", // Replace with actual iOS link
			android: "https://play.google.com/store", // Replace with actual Android link
		};
		window.open(urls[platform], "_blank");
		setIsOpen(false); // Close the dropdown after click
	};

	return (
		<header className='header'>
			<div className='w-full text-white shadow-md p-4 flex items-center justify-between'>
				{/* Logo */}
				<div className='text-xl font-bold'>
					<img src={Logo} alt='Logo' className='h-8' />
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex space-x-8'>
					<div className='cursor-pointer hover:underline'>Company</div>

					{/* Products Dropdown */}
					<div className='relative'>
						<div
							className='cursor-pointer hover:underline flex items-center'
							onClick={toggleDropdown}
						>
							Products
							<FaChevronDown className='ml-1' />
						</div>
						{dropdownOpen && (
							<div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg'>
								<Link to='/products' className='p-2 block hover:bg-gray-200'>
									PayIT
								</Link>
								<Link to='/products' className='p-2 block hover:bg-gray-200'>
									SchoolIT
								</Link>
							</div>
						)}
					</div>

					<Link to='/contact-us' className='hover:underline'>
						Contact Us
					</Link>
				</nav>

				{/* Download Button with Dropdown */}
				<div className='relative inline-block'>
					<button
						onClick={toggleDropdowns}
						className='bg-[#F9B141] text-black py-2 px-4 rounded-lg cursor-pointer'
					>
						Download Now
					</button>

					{isOpen && (
						<div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer'
								onClick={() => setIsOpen(false)}
							>
								iOS
							</a>
							<a
								href='https://play.google.com/store/apps/details?id=ng.com.payit.app'
								target='_blank'
								rel='noopener noreferrer'
								className='block px-4 py-2 hover:bg-gray-100  text-black cursor-pointer'
								onClick={() => setIsOpen(false)}
							>
								Android
							</a>
						</div>
					)}
				</div>

				{/* Mobile Menu Icon */}
				<div className='md:hidden'>
					<button onClick={toggleMobileMenu}>
						<FaBars className='h-6 w-6' />
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<nav className='absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg'>
						<div className='p-2'>Company</div>
						<div className='relative'>
							<div
								className='p-2 flex items-center cursor-pointer'
								onClick={toggleDropdown}
							>
								Products
								<FaChevronDown className='ml-1' />
							</div>
							{dropdownOpen && (
								<div className='mt-2'>
									<Link to='/products' className='p-2 block hover:bg-gray-200'>
										PayIT
									</Link>
									<Link to='/products' className='p-2 block hover:bg-gray-200'>
										SchoolIT
									</Link>
								</div>
							)}
						</div>
						<Link to='/contact-us' className='p-2'>
							Contact Us
						</Link>
					</nav>
				)}
			</div>

			{/* Hero Section */}
			<section className='flex-1 flex items-center justify-center text-center p-8'>
				<div className='w-full md:w-3/5'>
					<h1 className='text-4xl md:text-6xl font-bold mb-8 text-white'>
						Empowering You with Fast, Smarter, and Seamless Solutions
					</h1>
					<p className='text-md md:text-lg mb-12 text-white'>
						PayIT provides intelligent, secure, and personalized financial
						services. From airtime purchases to expense management, let AI
						enhance your financial experience.
					</p>
					<div className='flex items-center justify-center gap-8'>
						<button className='bg-[#F9B141] text-black py-3 px-6 rounded-lg hover:bg-[#F9B141] transition'>
							Get Started
						</button>
						<button className='bg-[#F9B141] p-4 rounded-full shadow-lg hover:bg-[#F9B141] transition'>
							<FaEnvelope className='text-black h-6 w-6' />
						</button>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
