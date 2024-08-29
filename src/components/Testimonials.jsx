import React from "react";

const testimonials = [
	{
		comment: "This payment app is incredibly user-friendly and fast!",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "John Doe",
		handle: "@johndoe",
	},
	{
		comment: "Great app! It made my transactions so much easier.",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Jane Smith",
		handle: "@janesmith",
	},
	{
		comment: "The best payment app I've used. Simple and effective.",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Alice Johnson",
		handle: "@alicejohnson",
	},
	{
		comment: "A fantastic app for managing payments. Five stars!",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Bob Brown",
		handle: "@bobbrown",
	},
	{
		comment: "This payment app is incredibly user-friendly and fast!",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "John Doe",
		handle: "@johndoe",
	},
	{
		comment: "Great app! It made my transactions so much easier.",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Jane Smith",
		handle: "@janesmith",
	},
	{
		comment: "The best payment app I've used. Simple and effective.",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Alice Johnson",
		handle: "@alicejohnson",
	},
	{
		comment: "A fantastic app for managing payments. Five stars!",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Bob Brown",
		handle: "@bobbrown",
	},
];

const Testimonial = () => {
	return (
		<div className='flex flex-col items-center justify-center my-20 py-12 px-10'>
			<h4>TESTIMONIALS</h4>
			<h2 className='text-4xl font-bold text-gray-800 mb-12'>
				What are people saying about us
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
				{testimonials.map((testimonial, index) => (
					<div key={index} className='bg-white p-4 rounded-xl shadow-lg'>
						<p className='mb-6 text-gray-600 italic'>"{testimonial.comment}"</p>
						<div className='flex items-center gap-4'>
							<img
								src={testimonial.image}
								alt={testimonial.username}
								className='w-16 h-16 rounded-full  border-4 border-gray-200 shadow-md'
							/>
							<div>
								<h3 className='text-md font-semibold text-gray-900'>
									{testimonial.username}
								</h3>
								<p className='text-gray-500'>{testimonial.handle}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonial;
