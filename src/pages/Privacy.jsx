import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Importing Font Awesome icon

const PrivacyPolicy = () => {
	return (
		<div className='bg-white text-[#888250] p-8 min-h-screen'>
			<div className='mx-4 my-10'>
				<a
					href='/about'
					className='inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
				>
					<FaArrowLeft className='mr-2' /> Back to Home
				</a>
			</div>
			<h1 className='text-4xl font-bold mb-6 text-center'>
				PayIT Privacy Policy
			</h1>
			<p className='mb-2 text-right font-light'>
				Effective Date: 1 October 2024
			</p>

			<section className='mb-6'>
				<p>
					Welcome to PayIT. Your privacy is important to us, and this Privacy
					Policy explains how we collect, use, and protect your information. By
					using PayIT, you agree to the terms described here.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>Information We Collect</h2>
				<div className='mb-4'>
					<h3 className='text-xl font-medium'>1. Personal Information</h3>
					<p>
						We collect personally identifiable information when you register or
						use PayIT, including:
					</p>
					<ul className='list-disc ml-6'>
						<li>Full Name</li>
						<li>Email Address</li>
						<li>Phone Number</li>
						<li>Date of Birth</li>
						<li>
							Bank Details (e.g., account information, BVN, identification
							numbers)
						</li>
					</ul>
				</div>

				<div className='mb-4'>
					<h3 className='text-xl font-medium'>2. Transaction Information</h3>
					<p>
						We record details of transactions, such as airtime purchases, data,
						bill payments, and financial activities related to loans and
						savings.
					</p>
				</div>

				<div>
					<h3 className='text-xl font-medium'>3. Usage Data</h3>
					<p>
						We collect information about your use of PayIT, including device
						details (IP address, type, and operating system) and app performance
						(logs, crash reports).
					</p>
				</div>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					How We Use Your Information
				</h2>
				<ul className='list-disc ml-6'>
					<li>To provide, operate, and maintain our services.</li>
					<li>To communicate updates and changes to our services.</li>
					<li>To enable interactive features, at your request.</li>
					<li>To provide customer support and improve services.</li>
					<li>
						To monitor usage, ensure security, and comply with legal
						requirements.
					</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					Sharing Your Information
				</h2>
				<ul className='list-disc ml-6'>
					<li>
						<strong>With Your Consent:</strong> When you agree to share
						information with third parties.
					</li>
					<li>
						<strong>Service Providers:</strong> For operations or service
						improvements.
					</li>
					<li>
						<strong>Legal Requirements:</strong> When required by law or
						regulatory authorities.
					</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					Security of Your Information
				</h2>
				<p>
					We use secure methods to protect your data. However, no system is
					completely secure, and users are encouraged to safeguard their
					credentials.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					Your Data Protection Rights
				</h2>
				<ul className='list-disc ml-6'>
					<li>Access, update, or delete your data.</li>
					<li>Rectify inaccuracies or restrict data use.</li>
					<li>Request data portability or withdraw consent.</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					Changes to This Privacy Policy
				</h2>
				<p>
					We may update this policy periodically. Updates will be posted, and we
					encourage you to review them regularly. Changes become effective upon
					posting.
				</p>
			</section>

			<footer className='mt-10 text-center'>
				<p className='font-semibold'>
					For any privacy-related inquiries, contact us at:
				</p>
				<p>
					<span className='text-red-600'>support@payit.com.ng</span> or 52
					Adetola Street, Aguda, Surulere, Lagos, Nigeria
				</p>
			</footer>
		</div>
	);
};

export default PrivacyPolicy;
