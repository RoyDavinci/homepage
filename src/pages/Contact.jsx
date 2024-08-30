import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function ContactUs() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div className='min-h-screen bg-gradient-to-br from-FFF38B to-A9E1FF flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8'>
			{/* Header */}
			<div className='max-w-3xl w-full text-center mb-12'>
				<h2 className='text-5xl font-extrabold text-gray-900'>Contact Us</h2>
				<p className='text-xl text-gray-700 mt-4'>
					We're here to help. Get in touch with us through any of the channels
					below.
				</p>
			</div>

			{/* Content */}
			<div className='max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Contact Info */}
				<div className='bg-white p-8 rounded-lg shadow-lg'>
					<div className='space-y-8'>
						<div className='flex items-center'>
							<FaPhoneAlt className='text-2xl text-FFF38B mr-4' />
							<p className='text-lg text-gray-800'>+1 (555) 123-4567</p>
						</div>
						<div className='flex items-center'>
							<FaEnvelope className='text-2xl text-F8CA95 mr-4' />
							<p className='text-lg text-gray-800'>contact@yourcompany.com</p>
						</div>
						<div className='flex items-center'>
							<FaMapMarkerAlt className='text-2xl text-ACEE91 mr-4' />
							<p className='text-lg text-gray-800'>
								1234 Main Street, City, Country
							</p>
						</div>
					</div>
				</div>

				{/* Form */}
				<div className='bg-white p-8 rounded-lg shadow-lg'>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-lg font-medium text-gray-700'
							>
								Your Name
							</label>
							<input
								type='text'
								id='name'
								className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-ACEE91 focus:border-ACEE91'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-lg font-medium text-gray-700'
							>
								Your Email
							</label>
							<input
								type='email'
								id='email'
								className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-ACEE91 focus:border-ACEE91'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='subject'
								className='block text-lg font-medium text-gray-700'
							>
								Subject
							</label>
							<input
								type='text'
								id='subject'
								className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-ACEE91 focus:border-ACEE91'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-lg font-medium text-gray-700'
							>
								Message
							</label>
							<textarea
								id='message'
								rows='4'
								className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-ACEE91 focus:border-ACEE91'
								required
							/>
						</div>

						<button
							type='submit'
							className='w-full py-3 px-6 bg-gradient-to-r from-FFF38B to-F8CA95 text-lg font-bold text-gray-800 rounded-full shadow-md hover:bg-gradient-to-r hover:from-ACEE91 hover:to-A9E1FF transition duration-300'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
