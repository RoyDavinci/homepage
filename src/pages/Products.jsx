import React, { useEffect } from "react";
import {
	FaApple,
	FaGooglePlay,
	FaLock,
	FaPiggyBank,
	FaChartLine,
	FaMoneyBillWave,
	FaCreditCard,
	FaChartBar,
	FaWallet,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function FintechLandingPage() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<header className='bg-gradient-to-br from-FFF38B via-ACEE91 to-A9E1FF text-gray-900'>
				<div className='container mx-auto py-20 text-center'>
					<h1 className='text-5xl font-extrabold mb-6'>
						Welcome to <span className='text-F8CA95'>PayIT</span>
					</h1>
					<p className='text-xl mb-8'>
						Revolutionizing the way you manage your finances with our all-in-one
						secure fintech app.
					</p>
					<div className='flex justify-center gap-4'>
						<button
							className='text-gray-900 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300'
							style={{
								background:
									"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
							}}
						>
							<FaApple className='inline-block mr-2 text-2xl' /> Download for
							iOS
						</button>
						<button
							className=' text-gray-900 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300'
							style={{
								background:
									"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
							}}
						>
							<FaGooglePlay className='inline-block mr-2 text-2xl' /> Download
							for Android
						</button>
					</div>
				</div>
			</header>

			{/* Company Overview */}
			<section className='bg-white py-20'>
				<div className='container mx-auto text-center'>
					<h2 className='text-4xl font-extrabold text-gray-900 mb-6'>
						About Us
					</h2>
					<p className='text-lg text-gray-700 max-w-2xl mx-auto'>
						PayIT is a leading fintech company that aims to simplify and secure
						financial transactions for everyone. With a focus on user-friendly
						interfaces, robust security, and innovative features, we’re
						redefining how people manage their money.
					</p>
				</div>
			</section>

			{/* Products Section */}
			<section className='bg-F8CA95 py-20 text-gray-900'>
				<div className='container mx-auto'>
					<h2 className='text-4xl font-extrabold text-center mb-12'>
						Our Products
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
						{/* Secure Payments */}
						<div className='bg-white p-8 rounded-lg shadow-lg'>
							<FaLock className='text-4xl text-FFF38B mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4'>Secure Payments</h3>
							<p className='text-gray-700'>
								Experience the highest level of security in all your
								transactions. PayIT ensures that your payments are fast, secure,
								and hassle-free.
							</p>
						</div>

						{/* Savings & Investments */}
						<div className='bg-white p-8 rounded-lg shadow-lg'>
							<FaPiggyBank className='text-4xl text-ACEE91 mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4'>Savings & Investments</h3>
							<p className='text-gray-700'>
								Grow your wealth with our integrated savings and investment
								tools. Track your progress and achieve your financial goals with
								ease.
							</p>
						</div>

						{/* Financial Insights */}
						<div className='bg-white p-8 rounded-lg shadow-lg'>
							<FaChartLine className='text-4xl text-A9E1FF mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4'>Financial Insights</h3>
							<p className='text-gray-700'>
								Get real-time insights into your spending habits and financial
								health. Make informed decisions with PayIT’s analytics and
								reports.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Additional Products Section */}
			<section className='bg-white py-20'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
						{/* Instant Transfers */}
						<div className='bg-F8CA95 p-8 rounded-lg shadow-lg'>
							<FaMoneyBillWave className='text-4xl mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4 '>Instant Transfers</h3>
							<p className=''>
								Send and receive money instantly with our peer-to-peer transfer
								feature. Enjoy low fees and rapid transfers with PayIT.
							</p>
						</div>

						{/* Bills Payment */}
						<div className='bg-ACEE91 p-8 rounded-lg shadow-lg'>
							<FaCreditCard className='text-4xl  mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4 '>Bills Payment</h3>
							<p className=''>
								Pay your bills on time with ease. Whether it's utilities, mobile
								recharges, or subscriptions, PayIT has got you covered.
							</p>
						</div>

						{/* Investments & Stock Buying */}
						<div className='bg-A9E1FF p-8 rounded-lg shadow-lg'>
							<FaChartBar className='text-4xl  mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4 '>
								Investments & Stock Buying
							</h3>
							<p className=''>
								Invest in stocks and mutual funds directly from our app. Grow
								your portfolio with expert guidance and real-time updates.
							</p>
						</div>

						{/* Budget Management */}
						<div className='bg-FFF38B p-8 rounded-lg shadow-lg'>
							<FaWallet className='text-4xl  mb-4 mx-auto' />
							<h3 className='text-2xl font-bold mb-4 '>Budget Management</h3>
							<p className=''>
								Manage your finances effectively with our budget management
								tools. Set limits, track expenses, and achieve your financial
								goals.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default FintechLandingPage;
