import React from "react";
import Image from "../assets/payit/responsive.png";
import { FaApple, FaAndroid } from "react-icons/fa";

const CenteredImageLayout = () => {
	return (
		// <div className='grid grid-cols-3 gap-4   px-4 pt-12 pb-40 bg-gray-100'>
		// 	{/* Left Side */}
		// 	<div className='flex flex-col justify-between'>
		// 		<div className='text-lg text-gray-700'>
		// 			<h4>WHY CHOOSE PAYIT</h4>
		// 			<h1 className='font-bold text-4xl'>
		// 				One App, Unlimited Possibilities
		// 			</h1>
		// 		</div>
		// 		<div className='text-lg text-gray-700'>
		// 			<h3 className='text-xl font-bold'>Request money from your contact</h3>
		// 			<p>
		// 				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
		// 				rem?
		// 			</p>
		// 		</div>
		// 	</div>

		// 	{/* Center Image */}
		// 	<div className='flex items-center justify-center'>
		// 		<img
		// 			src={Image}
		// 			alt='Center Image'
		// 			className='w-[300px] h-[700px] object-cover' // Adjust the width and height as needed
		// 		/>
		// 	</div>

		// 	{/* Right Side */}
		// 	<div className='flex flex-col justify-between '>
		// 		<div className='text-lg text-gray-700'>
		// 			<h3>
		// 				PayIT is more than just a peyment app it is a comprehensive solution
		// 				designed to simplify your financial life. With PayIT you can pay
		// 				bills, send money, shop online, and manage all your finances all
		// 				from one app. Out user interface and robust security features,
		// 				ensure your transactions are not only convenient but also safe.
		// 			</h3>
		// 		</div>
		// 		<div className='text-lg text-gray-700'>
		// 			<p>Download the app</p>

		// 			<div className='flex  gap-4'>
		// 				<button className='flex gap-2 items-center px-3 py-1 bg-[#FEF48B] rounded-full'>
		// 					<FaApple /> App Store
		// 				</button>
		// 				<button className='flex gap-2 items-center px-3 py-1 bg-[#FEF48B] rounded-full'>
		// 					<FaAndroid /> Play Store
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<div className='grid grid-cols-3 gap-4 px-4 pt-12 pb-40 bg-gray-100 items-stretch'>
			{/* Left Side */}
			<div className='flex flex-col justify-between h-full'>
				<div className='text-lg text-gray-700'>
					<h4>WHY CHOOSE PAYIT</h4>
					<h1 className='font-bold text-4xl'>
						One App, Unlimited Possibilities
					</h1>
				</div>
				<div className='text-lg text-gray-700'>
					<h3 className='text-xl font-bold'>Request money from your contact</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
						rem?
					</p>
				</div>
			</div>

			{/* Center Image */}
			<div className='flex items-center justify-center'>
				<img
					src={Image}
					alt='Center Image'
					className='w-[300px] h-[700px] object-cover'
				/>
			</div>

			{/* Right Side */}
			<div className='flex flex-col justify-between h-full'>
				<div className='text-lg text-gray-700'>
					<h3>
						PayIT is more than just a payment app; it is a comprehensive
						solution designed to simplify your financial life. With PayIT, you
						can pay bills, send money, shop online, and manage all your finances
						all from one app. Our user interface and robust security features
						ensure your transactions are not only convenient but also safe.
					</h3>
				</div>
				<div className='text-lg text-gray-700'>
					<p>Download the app</p>

					<div className='flex gap-4'>
						<button className='flex gap-2 items-center px-3 py-1 bg-[#FEF48B] rounded-full'>
							<FaApple /> App Store
						</button>
						<button className='flex gap-2 items-center px-3 py-1 bg-[#FEF48B] rounded-full'>
							<FaAndroid /> Play Store
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CenteredImageLayout;
