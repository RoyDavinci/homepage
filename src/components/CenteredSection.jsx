import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/payit/Illustration.png";
import Pexels1 from "../assets/pexels1.jpeg";
import Pexels2 from "../assets/Pexels2.jpeg";
import Pexels3 from "../assets/pexels4.jpeg";

const CenteredSectionWithGrid = () => {
	return (
		<section className='py-16 px-4 md:px-16 bg-white'>
			{/* Centered Content */}
			<div className=' mx-auto  mb-16'>
				<div className='text-center'>
					<Link
						to='/about'
						className='bg-[#E6EFFE] text-center mb-4 text-[#0C61F0] py-3 px-6 rounded-lg text-lg md:text-xl transition'
					>
						HOW IT WORKS
					</Link>
				</div>
				<div className='flex  justify-center text-center items-center'>
					<h2 className='text-3xl  max-w-4xl mt-12 md:text-4xl font-bold mb-4'>
						Unlock Mind-Blowing Features Tailored to You. Secure, Supportive,
						and Rewarding with PayIT!
					</h2>
				</div>
			</div>

			{/* Grid Items */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
				<div
					className='flex flex-col p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Pexels1} alt='Item 3' className='w-full h-auto mb-4' />
					<h3 className='text-xl font-semibold mb-2'>
						Experience Mind-Blowing Features, Tailored to You
					</h3>
					<p className='text-gray-600 '>
						Our development team continuously works to bring mind-blowing
						features that enhance Your experience with PayIT. With a focus on
						You, we’re constantly innovating and adding features that make
						managing Your money enjoyable and efficient.
					</p>
				</div>
				<div
					className='flex flex-col p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Pexels2} alt='Item 3' className='w-full h-auto mb-4' />
					<h3 className='text-xl font-semibold mb-2'>
						Security and Customer Support
					</h3>
					<p className='text-gray-600 '>
						Your safety is our top priority. PayIT uses AI-driven fraud
						detection, and strong encryption, and complies with global
						regulatory standards to ensure that Your data and transactions are
						secure. Plus, our 24/7 customer support is always available via live
						chat, email, or phone to help You whenever You need it.
					</p>
				</div>
				<div
					className='flex flex-col p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Pexels3} alt='Item 3' className='w-full h-auto mb-4' />
					<h3 className='text-xl font-semibold mb-2'>
						Suggest Features and Earn Rewards
					</h3>
					<p className='text-gray-600 '>
						Do You have an idea that would make PayIT even better? We’re
						listening! You can suggest new features, and if Your idea is
						approved and implemented, we’ll reward You for helping make PayIT
						the best it can be. It’s just another way we show our appreciation
						for Your feedback.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CenteredSectionWithGrid;
