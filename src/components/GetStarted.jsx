const GetStartedSteps = () => {
	return (
		<section className='py-16 px-4 md:px-16 bg-gray-50 md:mb-40 mb-20'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-2xl md:text-4xl font-bold mb-8'>
					Get Started with PayIT in 3 Easy Steps
				</h2>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
				{/* Step 1 */}
				<div className='bg-white p-6 rounded-lg shadow-lg text-left'>
					<h3 className='text-xl font-semibold mb-2 text-green-600'>
						1. Sign Up Quickly
					</h3>
					<p className='text-gray-600 text-sm'>
						Use your phone number to join PayIT in seconds.
					</p>
				</div>

				{/* Step 2 */}
				<div className='bg-white p-6 rounded-lg shadow-lg text-left'>
					<h3 className='text-xl font-semibold mb-2 text-green-600'>
						2. Upgrade Your Account
					</h3>
					<p className='text-gray-600 text-sm'>
						Provide a few details so we can verify your identity.
					</p>
				</div>

				{/* Step 3 */}
				<div className='bg-white p-6 rounded-lg shadow-lg text-left'>
					<h3 className='text-xl font-semibold mb-2 text-green-600'>
						3. Enjoy AI-Powered Financial Management
					</h3>
					<p className='text-gray-600 text-sm'>
						Let PayIT’s AI handle your payments, savings, and expenses
						intelligently.
					</p>
				</div>
			</div>
		</section>
	);
};

export default GetStartedSteps;
