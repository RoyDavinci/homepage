import { Link } from "react-router-dom";
import { FaPaperPlane, FaChartLine, FaShieldAlt } from "react-icons/fa";

const PayITSection = () => {
	return (
		<section className='py-16 px-4 md:px-16 bg-white'>
			{/* Header Section */}
			<div className='flex justify-center items-center min-h-[60vh]'>
				<div className='text-center'>
					<Link
						to='/contact-us'
						className='bg-[#E6EFFE] mb-4 text-[#0C61F0] py-3 px-6 rounded-lg text-lg md:text-xl transition'
					>
						Discover PayIT
					</Link>
					<h2 className='text-2xl mt-8 md:mt-12 md:text-4xl font-bold'>
						Unlock Financial Freedom with PayIT
					</h2>
				</div>
			</div>

			{/* Feature Cards Section */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16'>
				{/* Feature 1 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-start'>
					<FaPaperPlane className='text-green-600 text-3xl mb-4' />
					<h3 className='text-md font-semibold mb-2'>
						Send Fast, Unlimited Transfers
					</h3>
					<p className='text-gray-600 text-sm'>
						No hidden fees, no limits—just seamless transfers wherever you need
						to send money.
					</p>
				</div>

				{/* Feature 2 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-start'>
					<FaChartLine className='text-green-600 text-3xl mb-4' />
					<h3 className='text-md font-semibold mb-2'>
						Enjoy Personalized Insights
					</h3>
					<p className='text-gray-600 text-sm'>
						Get AI-powered insights based on your spending patterns to help you
						stay on top of your finances.
					</p>
				</div>

				{/* Feature 3 */}
				<div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-start'>
					<FaShieldAlt className='text-green-600 text-3xl mb-4' />
					<h3 className='text-md font-semibold mb-2'>
						Experience Next-Level Security
					</h3>
					<p className='text-gray-600 text-sm'>
						Advanced AI-driven fraud detection ensures your transactions remain
						safe and secure at all times.
					</p>
				</div>
			</div>
		</section>
	);
};

export default PayITSection;
