// AboutUs.jsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Importing Font Awesome icon

export const AboutUs = () => {
	return (
		<>
			<div className='mx-4 my-10'>
				<a
					href='/about'
					className='inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
				>
					<FaArrowLeft className='mr-2' /> Back to Home
				</a>
			</div>

			<div className='min-h-screen bg-[#fff] flex items-center justify-center px-6 py-12'>
				<div className='max-w-5xl mx-auto bg-[#fff] border border-gray-600 rounded-lg shadow-lg p-8'>
					<h1 className='text-4xl font-bold text-center text-gray-700 mb-6'>
						Empowering You with Smarter, Seamless Financial Solutions
					</h1>
					<p className='text-lg text-[#A2A2A2] mb-8 text-center'>
						At PayIT, we aim to be one of Africa's top five payment apps and
						among the top three in Nigeria. We provide intelligent, secure, and
						personalized financial services, from paying bills to managing
						expenses with AI-driven technology.
					</p>

					<div className='space-y-6'>
						<Feature
							title='Send Fast, Unlimited Transfers'
							description='No hidden fees, no limits.'
						/>
						<Feature
							title='Personalized Insights'
							description='AI-powered insights based on your spending patterns.'
						/>
						<Feature
							title='Next-Level Security'
							description='Advanced AI-driven fraud detection for secure transactions.'
						/>
						<Feature
							title='Exclusive Discounts and Offers'
							description='Enjoy great discounts every time you make a payment.'
						/>
					</div>

					<h2 className='text-3xl font-semibold mt-12 text-gray-700 mb-4'>
						Why PayIT Stands Out
					</h2>

					<ul className='space-y-4'>
						<ListItem
							number='1'
							title='Built Just for You'
							content='Suggest new features and earn rewards when they are implemented.'
						/>
						<ListItem
							number='2'
							title='AI That Works for You'
							content='Our AI offers personalized recommendations to help you manage your finances smarter.'
						/>
						<ListItem
							number='3'
							title='Exclusive Discounts'
							content='Get the best deals every time you make payments using PayIT.'
						/>
						<ListItem
							number='4'
							title='Spin to Win'
							content='Make purchases and spin to win cash back as part of your experience.'
						/>
						<ListItem
							number='5'
							title='Unlimited Free Transfers'
							content='Send money with no limits and no hidden fees.'
						/>
					</ul>

					<div className='mt-10 space-y-4'>
						<h2 className='text-3xl font-semibold text-gray-700 mb-2'>
							How to Get Started
						</h2>
						<Step
							step='1'
							description='Sign up quickly with your phone number.'
						/>
						<Step
							step='2'
							description='Upgrade your account by verifying your identity.'
						/>
						<Step
							step='3'
							description='Enjoy AI-powered financial management with PayIT.'
						/>
					</div>

					<div className='mt-10'>
						<h2 className='text-3xl font-semibold text-gray-700 mb-4'>
							Security & Customer Support
						</h2>
						<p className='text-lg text-[#A2A2A2]'>
							Your safety is our top priority. PayIT uses AI-driven fraud
							detection, strong encryption, and complies with global regulatory
							standards to keep your transactions and data secure. Our 24/7
							customer support is available via live chat, email, or phone to
							assist whenever needed.
						</p>
					</div>

					<div className='text-center mt-12'>
						<button className='bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition'>
							Join the Future of Payments with PayIT
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

const Feature = ({ title, description }) => (
	<div className='flex items-start space-x-4'>
		<div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white'>
			✓
		</div>
		<div>
			<h3 className='text-xl font-semibold text-gray-700'>{title}</h3>
			<p className='text-[#A2A2A2]'>{description}</p>
		</div>
	</div>
);

const ListItem = ({ number, title, content }) => (
	<div className='flex items-start space-x-4'>
		<div className='text-gray-700 font-bold text-2xl'>{number}.</div>
		<div>
			<h3 className='text-xl font-semibold text-gray-700'>{title}</h3>
			<p className='text-[#A2A2A2]'>{content}</p>
		</div>
	</div>
);

const Step = ({ step, description }) => (
	<div className='flex items-start space-x-4'>
		<div className='text-gray-700 font-bold text-2xl'>{step}.</div>
		<p className='text-lg text-[#A2A2A2]'>{description}</p>
	</div>
);

// export default AboutUs;
