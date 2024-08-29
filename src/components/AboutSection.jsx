import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Image1 from "../assets/payit/NewArrivals.png";
import Image2 from "../assets/payit/NewArrivals(1).png";
import Image3 from "../assets/payit/FreeShipping.png";
import Image4 from "../assets/payit/Free.png";
import Image5 from "../assets/payit/SatisfactionGuaranteed.png";
import Image6 from "../assets/payit/SatisfactionGuaranteed(1).png";
import Image7 from "../assets/payit/OriginalProducts.png";

const AboutSection = () => {
	const items = [
		{
			icon: <FaCartPlus />,
			title: "Instant transfer",
			subtitle: "Send money to friends and family no matter where they are",
			image: Image1,
		},
		{
			icon: <FaCartPlus />,
			title: "Bill Payments",
			subtitle: "Pay your bills on time with a few taps directly from the app",
			image: Image2,
		},
		{
			icon: <FaCartPlus />,
			title: "Spin for More",
			subtitle: "Spin for More: Get more while you transact with PayIT",
			image: Image3,
		},
		{
			icon: <FaCartPlus />,
			title: "Budget Management",
			subtitle:
				"Keep track of spending with our integrated budget management tools",
			image: Image4,
		},
		{
			icon: <FaCartPlus />,
			title: "secure Tranactions",
			subtitle:
				"Your security is our priority. All transactions are cnerypted and monitored 24/7",
			image: Image5,
		},
		{
			icon: <FaCartPlus />,
			title: "Revolutionized Savings",
			subtitle: "Save like you never have before with PayIT",
			image: Image6,
		},
		{
			icon: <FaCartPlus />,
			title: "Invest",
			subtitle: "Great Investment opportunitirs coming soon.",
			image: Image7,
		},
		// Remove or comment out an item to see the effect
		// { icon: <FaCartPlus />, title: 'Title 8', subtitle: 'Subtitle 8' },
	];

	return (
		<section className='flex items-center flex-col justify-center my-8 py-6 lg:px-6 px-8'>
			<h4 className='text-[#626262]'>FEATURES</h4>
			<h1 className='text-2xl font-semibold mb-10 mt-4'>
				EXPLORE OUR FEATURES
			</h1>
			{/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center'> */}
			<div className='flex flex-wrap justify-center items-center gap-8 place-items-center'>
				{items.map((item, index) => (
					<div
						key={index}
						className=' w-full  md:w-[20%] rounded-lg  self-center'
					>
						{/* <div className='text-xl mb-2 p-4 rounded-full bg-white w-fit text-center flex justify-center items-center'>
							<div>{item.icon}</div>
						</div>
						<h3 className='text-lg font-semibold'>{item.title}</h3>
						<p className='text-gray-600 text-sm'>{item.subtitle}</p>
						 */}
						<img src={item.image} alt='' className='w-full' />
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutSection;
