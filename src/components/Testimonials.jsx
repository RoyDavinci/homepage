import React from "react";

const testimonials = [
	{
		comment: "It has been a seamless app with good features so far.",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Mike",
		handle: "@mike",
	},
	{
		comment: "Wonderful Application",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Tobi",
		handle: "@tobi",
	},
	{
		comment:
			"Waoh, recently started using this app, am so in love with it......it's a 10/10 for me.. will surely recommend...",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Funke",
		handle: "@funke",
	},
	{
		comment:
			"I recently started using PayIt and I am very impressed with their services.",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Praise",
		handle: "@praise",
	},
	{
		comment: "Really nice app. I recommend",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Peter",
		handle: "@peter",
	},
	{
		comment: "Lovely app 👍",
		image: "https://via.placeholder.com/80", // Replace with actual image URL
		username: "Chinonso",
		handle: "@chinonso",
	},
];

const Testimonial = () => {
	return (
		<div className='flex flex-col items-center justify-center my-20 py-12 px-10'>
			<h4>TESTIMONIALS</h4>
			<h2 className='text-4xl font-bold text-gray-800 mb-12'>
				What are people saying about us
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
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
