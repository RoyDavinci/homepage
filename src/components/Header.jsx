import React, { useState } from "react";
import { FaBars, FaChevronDown, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/payit/Group 30910.png";
import Background from "../assets/payit/Desktop4.jpg";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<header className='header'>
			<div className='w-full  text-white shadow-md p-4 flex items-center justify-between relative'>
				<div className='text-xl font-bold'>
					<img src={Logo} alt='Logo' className='h-8 inline-block' />
				</div>

				{/* Center items for larger screens */}
				<nav className='hidden md:flex space-x-8 '>
					<div className='cursor-pointer hover:underline text-white '>
						Company
					</div>

					{/* Dropdown item */}
					<div className='relative'>
						<div
							className='cursor-pointer hover:underline flex items-center text-white '
							onClick={toggleDropdown}
						>
							Products
							<FaChevronDown className='ml-1' />
						</div>
						{dropdownOpen && (
							<div className='absolute left-0 mt-2 w-48  text-black rounded-lg shadow-lg z-10'>
								<Link
									to='/products'
									className='p-2 block hover:bg-gray-200 text-white cursor-pointer'
								>
									PayIT
								</Link>
								<Link
									to='/products'
									className='p-2 block hover:bg-gray-200 text-white  cursor-pointer'
								>
									SchoolIT
								</Link>
								{/* <Link
									to='/products'
									className='p-2 block hover:bg-gray-200 text-white  cursor-pointer'
								>
									Child 3
								</Link> */}
							</div>
						)}
					</div>

					<Link
						to='/contact-us'
						className='cursor-pointer hover:underline text-white '
					>
						Contact Us
					</Link>
				</nav>

				{/* Button on the right */}
				<div>
					<button className='bg-[#F9B141] text-black py-2 px-4 rounded-lg  transition'>
						Request A Demo
					</button>
				</div>

				{/* Mobile menu icon */}
				<div className='md:hidden flex items-center'>
					<button
						className='text-white focus:outline-none'
						onClick={toggleMobileMenu}
					>
						<FaBars className='h-6 w-6' />
					</button>
				</div>

				{/* Mobile menu items */}
				{mobileMenuOpen && (
					<nav className='absolute top-full right-0 mt-2  w-32 rounded-lg shadow-lg z-20'>
						<div className='p-2 cursor-pointer text-white '>Company</div>

						{/* Dropdown item */}
						<div className='relative'>
							<div
								className='cursor-pointer text-white  flex items-center p-2'
								onClick={toggleDropdown}
							>
								Products
								<FaChevronDown className='ml-1' />
							</div>
							{dropdownOpen && (
								<div className='mt-2 text-white  rounded-lg shadow-lg z-10'>
									<Link
										to='/products'
										className='p-2 block hover:bg-gray-200 text-white  cursor-pointer'
									>
										PayIT
									</Link>
									<Link
										to='/products'
										className='p-2 block text-white  hover:bg-gray-200 cursor-pointer'
									>
										SchoolIT
									</Link>
									{/* <Link
										to='/products'
										className='p-2 block text-white  hover:bg-gray-200 cursor-pointer'
									>
										Child 3
									</Link> */}
								</div>
							)}
						</div>

						<div className='p-2 text-white cursor-pointer'>Contact Us</div>
					</nav>
				)}
			</div>
			{/* Logo on the left */}

			{/* Hero Section */}
			<section className='flex-1 flex items-center h-full justify-center relative text-center p-8'>
				<div className='w-full md:w-3/5 text-center'>
					<h1 className='text-4xl md:text-6xl font-bold mb-8 text-white '>
						Empowering You with Smarter, Seamless Financial Solutions{" "}
					</h1>
					<p className='text-xl md:text-2xl mb-12 text-white '>
						PayIT to be one of the Top Five Payment Apps in Africa and one of
						the Top Three in Nigeria, built to provide You with intelligent,
						secure, and personalized financial services. Whether You’re paying
						bills, transferring money, or managing Your expenses, PayIT
						leverages AI-driven technology to give You a seamless and enjoyable
						experience
					</p>
					<div className='flex items-center justify-center gap-8'>
						<button className='bg-[#F9B141] text-black py-3 px-6 rounded-lg text-lg md:text-xl hover:bg-[#F9B141] transition'>
							Get Started
						</button>
						<div>
							<button className='bg-[#F9B141] p-4 rounded-full shadow-lg hover:bg-[#F9B141] transition'>
								<FaEnvelope className='text-black h-6 w-6' />
							</button>
						</div>
					</div>
				</div>

				{/* Message Icon */}
				{/* <div className='absolute bottom-24  right-4'></div> */}
			</section>
		</header>
	);
};

export default Header;
