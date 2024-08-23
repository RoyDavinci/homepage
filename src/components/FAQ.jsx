import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
	return (
		<div className='border-b border-gray-200 py-4 bg-white p-6 rounded-lg mb-4'>
			<div
				className='flex items-center justify-between cursor-pointer'
				onClick={onClick}
			>
				<h4 className='text-lg font-semibold'>{question}</h4>
				{isOpen ? (
					<div className='bg-[#f5f9ff] rounded-full w-12 h-12 flex items-center justify-center'>
						<FaChevronUp className='text-[#458BF4]' />
					</div>
				) : (
					<div className='bg-[#f5f9ff] rounded-full w-12 h-12 flex items-center justify-center'>
						<FaChevronDown className='text-[#458BF4]' />
					</div>
				)}
			</div>
			{isOpen && <p className='mt-2 text-gray-600'>{answer}</p>}
		</div>
	);
};

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const faqs = [
		{
			question: "How can I contact support?",
			answer: "You can contact support via email or phone.",
		},
		{
			question: "What is the return policy?",
			answer: "Our return policy lasts 30 days from the date of purchase.",
		},
		{
			question: "How do I reset my password?",
			answer: 'Go to the settings page and click on "Reset Password".',
		},
		{
			question: "Can I change my order?",
			answer: "Yes, you can change your order within 24 hours of placing it.",
		},
		{
			question: "What are the shipping options?",
			answer: "We offer standard, express, and next-day shipping.",
		},
	];

	return (
		<section className='py-16 px-4 md:px-16 bg-[#F9FAFB]'>
			<div className='container mx-auto flex flex-col md:flex-row '>
				{/* Left Side */}
				<div className=' flex-1  md:text-left mb-8 md:mb-0 md:pr-8'>
					<button className='bg-[#E6EFFE] mb-4 text-[#0C61F0] py-3 px-6 rounded-lg text-lg md:text-xl transition'>
						GOT QUESTIONS?
					</button>
					<h2 className='text-3xl md:text-4xl font-bold mb-2 md:w-[70%] w-full'>
						Frequently Asked Questions
					</h2>
					<p className='text-lg text-gray-600 md:w-[70%] w-full'>
						If you have any other questions, please do not hesitate to reach out
						to our <span className='text-[#0C61F0]'>customer support</span> team
						for further assistance
					</p>
				</div>

				{/* Right Side */}
				<div className='md:w-2/3 flex-1'>
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
