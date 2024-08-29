import { FaShoppingCart, FaUser, FaRocket, FaHeart } from "react-icons/fa";

import Image from "../assets/Rectangle 6387.png";
import { Link } from "react-router-dom";

const CustomSection = () => {
	return (
		<section className='py-16 px-4 md:px-16 bg-white'>
			{/* Container with flex row/column */}
			<div className='flex flex-col md:flex-row justify-between items-center mb-16'>
				{/* First Item */}
				<div className='mb-8 md:mb-0 md:mr-8 flex-1'>
					<Link
						to='/about'
						className='bg-[#E6EFFE] mb-4 text-[#0C61F0] py-3 px-6 rounded-lg text-lg md:text-xl transition'
					>
						What We Do
					</Link>
					<h2 className='text-2xl mt-12 md:text-4xl font-bold '>
						Driving Innovation through Collaboration
					</h2>
				</div>

				{/* Second Item with random text */}
				<div className='flex-1'>
					<p className='text-gray-700 text-lg md:text-xl leading-relaxed'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						pellentesque, urna a accumsan commodo, sapien arcu viverra nibh, vel
						convallis lacus leo eget elit.
					</p>
				</div>
			</div>

			{/* Large Image */}
			<div className='relative mb-16'>
				<img src={Image} alt='Large Visual' className='w-full h-auto' />
			</div>

			{/* Grid Items overlapping the image */}
			<div className='relative -mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
				{/* Grid Item 1 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col relative z-10'>
					<FaShoppingCart className='text-green-600 text-3xl mb-4 ' />
					<h3 className='text-md font-semibold mb-2'>
						Cross Functional Expertise
					</h3>
					<p className='text-gray-600 text-[12px]'>
						Our multidisplinary team combines the skills and knowledge of
						engineers, developers and industry experts enabling us to tackling
						complex challenges
					</p>
				</div>

				{/* Grid Item 2 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col  relative z-10'>
					<FaUser className='text-green-600 text-3xl mb-4' />
					<h3 className='text-md font-semibold mb-2'>Fostering Teamwork</h3>
					<p className='text-gray-600 text-[12px] '>
						At Automotion Technologies, we cultivate a collaborative work
						environment that encourages the sharing of ideas and the collective
						pursuit of innovation.
					</p>
				</div>

				{/* Grid Item 3 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col  relative z-10'>
					<FaRocket className='text-green-600 text-3xl mb-4' />
					<h3 className='text-md font-semibold mb-2'>
						Commitment to excellence
					</h3>
					<p className='text-gray-600 text-[12px] '>
						Our unwavering commitment to quality and performance is reflected in
						the superior solutions we deliver, consistently exceeding our
						clients' expectations.
					</p>
				</div>

				{/* Grid Item 4 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col  relative z-10'>
					<FaHeart className='text-green-600 text-3xl mb-4' />
					<h3 className='text-md font-semibold mb-2'>
						Client Centric Approach
					</h3>
					<p className='text-gray-600 text-[12px] '>
						We place our clients needs at the forefront of everything we do, not
						only ensuring our solutions meet their requirements but also help
						them achieve their business goals.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CustomSection;
