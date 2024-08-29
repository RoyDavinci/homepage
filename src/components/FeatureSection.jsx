import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
	return (
		<section className='py-16 md:px-0 px-10 bg-gray-50 my-28 justify-center flex flex-col items-center'>
			{/* Centered Button */}
			<div className='text-center mb-8'>
				<Link
					to='/about'
					className='bg-[#E6EFFE] text-[#0C61F0] py-3 px-6 rounded-lg text-lg md:text-xl transition'
				>
					Why Choose Us?
				</Link>
			</div>

			{/* Centered Big Text and Subtext */}
			<div className='text-center mb-12 w-full md:w-3/5 '>
				<h2 className='text-3xl md:text-5xl font-bold mb-4 text-center'>
					We Empower you through exceptional services
				</h2>
				<p className='text-lg md:text-2xl text-[#868d99]'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
					voluptate aut at ex consectetur ipsa. Sequi consequuntur quo optio
					temporibus.
				</p>
			</div>

			{/* Grid Items */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
				{/* Grid Item 1 */}
				<div className='bg-[#F5F5F5] p-6 rounded-xl shadow-md flex flex-col items-center'>
					<div className='p-4 bg-white rounded-full self-start w-16 h-16 mb-8'>
						<FaShoppingCart className='text-[#f5f5f5] text-3xl mb-4 ' />
					</div>
					<h3 className='text-xl font-semibold mb-2'>Responsive Support</h3>
					<p className='text-gray-600 text-center text-sm'>
						Our dedicated customer support team is always available to assist
						you with any questions or challenges you might encounter, ensuring a
						seamless and reliable experience.
					</p>
				</div>

				{/* Grid Item 2 */}
				<div className='bg-[#F5F5F5] p-6 rounded-xl shadow-md flex flex-col items-center'>
					{/* <FaShoppingCart className='text-blue-600 text-3xl mb-4 self-start' /> */}
					<div className='p-4 bg-white rounded-full self-start w-16 h-16 mb-8'>
						<FaShoppingCart className='text-[#3681F3] text-3xl mb-4 ' />
					</div>
					<h3 className='text-lg font-semibold mb-2'>Comprehensive training</h3>
					<p className='text-gray-600 text-center text-sm'>
						We provide comprehensive training and onboarding to ensure that our
						users and clients can mzximise the potential of our solutions and
						achieve their desired outcomes
					</p>
				</div>

				{/* Grid Item 3 */}
				<div className='bg-[#F5F5F5] p-6 rounded-xl shadow-md flex flex-col items-center'>
					<div className='p-4 bg-white rounded-full self-start w-16 h-16 mb-8'>
						<FaShoppingCart className='text-[#E30F9C] text-3xl mb-4 ' />
					</div>
					<h3 className='text-lg font-semibold mb-2'>Continous Improvement</h3>
					<p className='text-gray-600 text-center text-sm'>
						We are committed to continously enhancing our solutions based on
						feedbacks and industrry trends, ensuring that you always have access
						to the latest and most effective software
					</p>
				</div>

				{/* Grid Item 4 */}
				<div className='bg-[#F5F5F5] p-6 rounded-xl shadow-md flex flex-col items-center'>
					<div className='p-4 bg-white rounded-full self-start w-16 h-16 mb-8'>
						<FaShoppingCart className='text-[#04AD6C] text-3xl mb-4 ' />
					</div>
					<h3 className='text-xl font-semibold mb-2'>Technical Experrtise</h3>
					<p className='text-gray-600 text-center text-sm'>
						Our team of skilled developers and engineers possess deep technical
						expertise, enabling them to provide expert guidance and support
						throughout the process
					</p>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
