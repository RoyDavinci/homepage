import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function ContactUs() {
	const { pathname } = useLocation();

	const [formDetails, setFormdtails] = useState({
		name: "",
		email: "",
		message: "",
		subject: "",
	});

	const [send, setSend] = useState("whatsapp");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormdtails({ ...formDetails, [name]: value });
	};

	const sendToWhatsapp = (e) => {
		e.preventDefault();
		const data = `My name is - ${formDetails.name}, my email is ${formDetails.email}, I am writing cause of ${formDetails.subject}, here is what i mean - ${formDetails.message}`;
		const params = encodeURI(data);
		const urlWithAppendedValue = `https://api.whatsapp.com/send?phone=+2347061728745&text=${params}`;

		// Open the URL in a new tab
		window.open(urlWithAppendedValue, "_blank");
	};

	const sendToEmail = (e) => {
		e.preventDefault();
		// alert("email not setup yet");
		window.location.href = `mailto:support@payit.com?subject=${formDetails.subject}&body=My Name is ${formDetails.name} I am writing to you because - ${formDetails.message}`;
	};
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

			<div className='max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Contact Info */}
				<div className='bg-white p-8 rounded-lg shadow-lg'>
					<div className='space-y-8'>
						<div className='flex items-center'>
							<FaPhoneAlt className='text-2xl text-FFF38B mr-4' />
							<p className='text-lg text-gray-800'>+ (234)-7061728745</p>
						</div>
						<div className='flex items-center'>
							<FaEnvelope className='text-2xl text-F8CA95 mr-4' />
							<p className='text-lg text-gray-800'>support@payit.com.ng</p>
						</div>
					</div>
				</div>

				<div className='bg-white p-4 rounded-lg shadow-lg'>
					<form
						className='space-y-2'
						onSubmit={(e) =>
							send === "whatsapp" ? sendToWhatsapp(e) : sendToEmail(e)
						}
					>
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
								value={formDetails.name}
								name='name'
								onChange={handleChange}
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
								value={formDetails.email}
								name='email'
								onChange={handleChange}
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
								value={formDetails.subject}
								name='subject'
								onChange={handleChange}
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
								value={formDetails.message}
								name='message'
								onChange={handleChange}
							/>
						</div>

						<div className='flex justify-between items-center gap-6'>
							<button
								type='submit'
								className='w-full py-3 px-6 bg-gradient-to-r from-FFF38B to-F8CA95 text-sm font-bold text-gray-800 rounded-full shadow-md hover:bg-gradient-to-r hover:from-ACEE91 hover:to-A9E1FF transition duration-300'
								onClick={() => setSend("email")}
							>
								Send via Email
							</button>
							<button
								type='submit'
								className='w-full py-3 px-6 bg-gradient-to-r from-FFF38B to-F8CA95 text-sm font-bold text-gray-800 rounded-full shadow-md hover:bg-gradient-to-r hover:from-ACEE91 hover:to-A9E1FF transition duration-300'
								onClick={() => setSend("whatsapp")}
							>
								Send to Whatsapp
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
