import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Importing Font Awesome icon

const TermsAndConditions = () => {
	return (
		<div className='bg-[#fff] text-[#000] p-8 min-h-screen'>
			<div className='mx-4 my-10'>
				<a
					href='/about'
					className='inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
				>
					<FaArrowLeft className='mr-2' /> Back to Home
				</a>
			</div>
			<h1 className='text-4xl font-bold mb-6 text-center'>
				PayIT Terms & Conditions
			</h1>
			<p className='mb-2 text-right font-light'>Last Updated: 1 October 2024</p>

			<section className='mb-6'>
				<p>
					Welcome to PayIT. These Terms & Conditions ("Terms") govern your
					access and use of our website, mobile application, and services
					(collectively, the "Services"). By using the Services, you agree to be
					bound by these Terms. If you do not agree, discontinue use
					immediately.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>1. Acceptance of Terms</h2>
				<p>
					By accessing or using PayIT, you agree to comply with these Terms and
					our Privacy Policy. You must be at least 18 years old or the legal age
					of majority in your jurisdiction. If you are using the Services on
					behalf of an entity, you represent that you have the authority to
					accept these Terms on their behalf.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>2. Account Registration</h2>
				<p>
					To use PayIT, you must create an account and provide accurate
					information. You are responsible for maintaining the confidentiality
					of your account and must notify us immediately if unauthorized use
					occurs.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>3. Use of Services</h2>
				<p className='mb-2'>
					PayIT grants you a non-exclusive, non-transferable, and revocable
					licence to use our Services solely for personal or business purposes
					in accordance with these Terms. You agree not to:
				</p>
				<ul className='list-disc ml-6'>
					<li>Misuse our Services or use them for unlawful purposes.</li>
					<li>
						Attempt to gain unauthorized access to our systems or networks.
					</li>
					<li>
						Reverse engineer, decompile or disassemble any part of the PayIT
						app.
					</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					4. Transactions and Payments
				</h2>
				{/* <p className='mb-2'>
					PayIT facilitates secure payments and transfers. Ensure all
					transaction details are correct, as we are not liable for user errors.
				</p> */}
				<ul className='list-disc ml-6'>
					<li className='mb-2'>
						<strong> Processing Transactions:</strong> <br /> <br /> PayIT
						allows you to make payments, transfers, and other financial
						transactions securely. You are responsible for ensuring the accuracy
						of transaction details (e.g., amount, recipient). We are not liable
						for errors or losses arising from incorrect transaction details
						entered by you.
					</li>
					<li className='mb-2'>
						<strong> Fees:</strong> <br /> <br /> Certain transactions may incur
						fees. PayIT will disclose applicable fees before you proceed with a
						transaction. By confirming a transaction, you accept responsibility
						for any fees incurred.
					</li>
					<li className='mb-2'>
						<strong> Refunds and Disputes:</strong> <br /> <br /> Refunds for
						transactions are subject to our Refund Policy. If you believe there
						is an error with a transaction, you must notify us within [30] days.
						We will investigate and resolve disputes in accordance with our
						policies.
					</li>
					<li className='mb-2'>
						<strong> Account Security and User Responsibility: </strong> <br />{" "}
						<br /> You are solely responsible for safeguarding your credentials,
						including passwords, transaction PINs, and any other details that
						may grant access to your account. You must not share this
						information with anyone. PayIT is not responsible for unauthorized
						access or account compromises resulting from the sharing or
						mishandling of your credentials. You agree to take all necessary
						precautions to protect your account.
					</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					5. Rewards, Discounts, and Promotions
				</h2>
				<ul className='list-disc ml-6'>
					<li className='mb-2'>
						<strong> Discounts and Offers:</strong> <br /> <br />
						PayIT may provide exclusive discounts, offers, and promotional
						campaigns. All discounts are subject to specific terms and may have
						expiration dates. We reserve the right to modify or terminate
						promotions at any time without notice.
					</li>
					<li className='mb-2'>
						<strong> Spin to Win Feature: </strong> <br /> <br /> Our “Spin to
						Win” feature allows users to spin and earn money back when they make
						purchases or payments through the app. The outcome is random, and
						PayIT does not guarantee any specific winnings. Users must accept
						the results as final.
					</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>6. Security and Privacy</h2>
				<p>
					PayIT is committed to protecting your data and privacy. We use
					encryption and AI-powered fraud detection systems to secure your
					transactions. By using our Services, you agree to our collection and
					use of information as detailed in our [Privacy Policy]. You are
					responsible for maintaining the security of your device and account
					credentials.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					7. User Conduct and Responsibilities
				</h2>
				<ul className='list-disc ml-6'>
					<li>
						Engage in fraudulent activities or use the platform for money
						laundering or other illegal activities.
					</li>
					<li>Violate any applicable laws or regulations.</li>
					<li>Attempt to access or interfere with other users' accounts.</li>
					<li>Provide false or misleading information.</li>
				</ul>
			</section>
			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					8. Intellectual Property Rights
				</h2>
				<p>
					All content and technology used in PayIT, including trademarks, logos,
					software, and other intellectual property, are owned by PayIT or our
					licensors. You may not use our intellectual property without our prior
					written consent, except as permitted within these Terms.
				</p>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					9. Limitation of Liability
				</h2>
				<p>
					To the fullest extent permitted by law, PayIT and its affiliates,
					directors, officers, employees, and agents shall not be liable for any
					indirect, incidental, special, consequential, or punitive damages, or
					any loss of profits or revenues, whether incurred directly or
					indirectly, or any loss of data, use, goodwill, or other intangible
					losses resulting from:
				</p>
				<ul className='list-disc ml-6'>
					<li>Your use or inability to use the Services.</li>
					<li>
						Any unauthorized access, use, or alteration of your transmissions or
						content.
					</li>
					<li>Any dispute between you and another user or third party.</li>
				</ul>
			</section>
			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					10. Disclaimer of Warranties
				</h2>
				<p>
					The Services are provided "as is" and "as available" without
					warranties of any kind, either express or implied. PayIT disclaims all
					warranties, including but not limited to, merchantability, fitness for
					a particular purpose, and non-infringement. We do not guarantee that
					the Services will be uninterrupted, secure, or error-free.
				</p>
			</section>
			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>11. Indemnification</h2>
				<p>
					You agree to indemnify and hold PayIT, its affiliates, directors,
					officers, employees, and agents harmless from and against any claims,
					damages, losses, and expenses (including legal fees) arising out of or
					related to:
				</p>
				<ul className='list-disc ml-6'>
					<li>Your use of the Services</li>
					<li>Your breach of these Terms.</li>
					<li>Your violation of any law or regulation.</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>12. Termination</h2>
				<p>
					We reserve the right to suspend or terminate your account and access
					to our Services if you violate these Terms or engage in any illegal or
					harmful activities. You may also terminate your account at any time by
					contacting our support team. Upon termination, you remain responsible
					for any unpaid fees or unresolved transactions.
				</p>
			</section>
			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>13. Changes to Terms</h2>
				<p>
					We may modify these Terms at any time. Any changes will be posted on
					our website or within the app, and the updated version will indicate
					the date of the most recent update. Your continued use of PayIT after
					such changes constitutes your acceptance of the revised Terms.
				</p>
			</section>
			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>
					14. Governing Law and Jurisdiction
				</h2>
				<p>
					These Terms are governed by the laws of [Your Country]. Any dispute
					arising from or related to these Terms or the use of PayIT Services
					will be resolved exclusively in the courts located in [Your
					Jurisdiction], unless otherwise provided by applicable law.
				</p>
			</section>
			<section className='mb-8'>
				<h2 className='text-2xl font-semibold mb-4'>15. Contact Information</h2>
				<p>
					If you have any questions or concerns about these Terms or the
					Services, please contact us at:
				</p>
				<p>
					<ul>
						<li className=''>
							<span className='font-bold'>Email: </span> support@payit.com.ng"
						</li>
						<li className=''>
							<span className='font-bold'>Phone : </span>+234 706 8745 (WhatsApp
							chat)
						</li>
						<li className=''>
							<span className='font-bold'>Email</span> Address: 62 Adetola
							street, Aguda, Lagos Nigeria"
						</li>
					</ul>
				</p>
			</section>

			<footer className='mt-10 text-center'>
				<p className='font-semibold'>
					For any questions, contact us at{" "}
					<span className='text-red-600'>support@payit.com.ng</span> or +234 706
					8745.
				</p>
				<p>62 Adetola Street, Aguda, Lagos Nigeria</p>
			</footer>
		</div>
	);
};

export default TermsAndConditions;
