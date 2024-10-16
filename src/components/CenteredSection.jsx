import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/payit/Illustration.png";

const CenteredSectionWithGrid = () => {
	return (
		<section className='py-16 px-4 md:px-16 bg-white'>
			{/* Centered Content */}
			<div className='max-w-3xl mx-auto text-center mb-16'>
				<Link
					to='/about'
					className='bg-[#E6EFFE] mb-4 text-[#0C61F0] py-3 px-6 rounded-lg text-lg md:text-xl transition'
				>
					HOW IT WORKS
				</Link>
				<h2 className='text-3xl mt-12 md:text-5xl font-bold mb-4'>
					Empowering Business With Bespoke Solutions
				</h2>
			</div>

			{/* Grid Items */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
				{/* Grid Item 1 */}
				{/* <div
					className='flex flex-col p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Image} alt='Item 1' className='w-full h-auto mb-4' />
					<h3 className='text-xl font-semibold mb-2'>Tailored Approach</h3>
					<p className='text-gray-600 '>
						We understand that every business is unique, with it's own set of
						challenges and requirements. Our team of experts work closely with
						clients to develop customised solutions that address their specific
						needs
					</p>
				</div> */}

				{/* Grid Item 2 */}
				{/* <div
					className='flex flex-col  p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Image} alt='Item 2' className='w-full h-auto mb-4' />
					<h3 className='text-xl font-semibold mb-2'>Agile Methodology</h3>
					<p className='text-gray-600 '>
						We follow an agile development approach, allowing us to rapidly
						prototype, test and iterate on our solutions. This ensures our
						clients receive the most effective and responsive tools to drive
						their success.
					</p>
				</div> */}

				{/* Grid Item 3 */}
				{/* <div
					className='flex flex-col p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Image} alt='Item 3' className='w-full h-auto mb-4' />
					<h3 className='text-xl font-semibold mb-2'>Scalable Solutions</h3>
					<p className='text-gray-600 '>
						As business grow and evolve, automotion Technologies solutions are
						designed to scale seamlessly, ensuring that our clients can continue
						to rely on our technology to support their expanding operations
					</p>
				</div> */}

				<div
					className='flex flex-col p-6 rounded-lg'
					style={{
						background: "linear-gradient(180deg, #E7E7E7 0%, #F3F3F3 100%)",
					}}
				>
					<img src={Image} alt='Item 3' className='w-full h-auto mb-4' />
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
					<img src={Image} alt='Item 3' className='w-full h-auto mb-4' />
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
					<img src={Image} alt='Item 3' className='w-full h-auto mb-4' />
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
