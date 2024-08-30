import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/payit/ATS.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-black text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row md:justify-between'>
					{/* First Item: Logo */}
					<div className='mb-8 md:mb-0'>
						{/* <h1 className='text-2xl font-bold'>Logo</h1> */}
						<Link to='/'>
							<img src={Logo} alt='' />
						</Link>
					</div>

					{/* Second Item: Quick Links */}
					<div className='mb-8 md:mb-0'>
						<h3 className=' font-semibold mb-4 text-[#A2A2A2]'>Quick Links</h3>
						<ul>
							<li className='mb-2'>
								<Link to='#' className='hover:underline'>
									Company
								</Link>
							</li>
							<li className='mb-2'>
								<Link to='/products' className='hover:underline'>
									Products
								</Link>
							</li>
							<li className='mb-2'>
								<Link to='#' className='hover:underline'>
									Book a Demo
								</Link>
							</li>
						</ul>
					</div>

					{/* Third Item: Explore */}
					<div className='mb-8 md:mb-0'>
						<h3 className=' font-semibold mb-4 text-[#A2A2A2]'>Explore</h3>
						<ul>
							<li className='mb-2'>
								<Link to='#' className='hover:underline'>
									PayIt
								</Link>
							</li>
							<li className='mb-2'>
								<Link to='#' className='hover:underline'>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Fourth Item: Company */}
					<div className='mb-8 md:mb-0'>
						<h3 className=' font-semibold mb-4 text-[#A2A2A2]'>Company</h3>
						<ul>
							<li className='mb-2'>
								<Link to='/contact-us' className='hover:underline'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Row: Copyright and Social Media */}
				<div className='flex flex-col md:flex-row md:justify-between mt-8 border-t border-gray-600 pt-4'>
					<div className='flex flex-col md:flex-row md:items-center  mb-4 md:mb-0'>
						<ul className='flex flex-col md:flex-row'>
							<li className='mb-2 md:mb-0 md:mr-6 text-[#A3A3A3]'>
								<Link to='#' className='hover:underline'>
									Copyright
								</Link>
							</li>
							<li className='mb-2 md:mb-0 md:mr-6 text-[#A3A3A3]'>
								<Link to='#' className='hover:underline'>
									Privacy Policy
								</Link>
							</li>
							<li className='mb-2 md:mb-0 text-[#A3A3A3]'>
								<Link to='#' className='hover:underline'>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex items-center space-x-4'>
						<Link to='#' className='text-[#A6A6A6] '>
							<FaFacebookF size={20} />
						</Link>
						<Link to='#' className='text-[#A6A6A6] '>
							<FaInstagram size={20} />
						</Link>
						<Link to='#' className='text-[#A6A6A6] '>
							<FaYoutube size={20} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
