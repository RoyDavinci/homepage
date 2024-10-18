import React, { useState } from "react";
import Image from "../assets/Studio.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const Started = () => {
	const [isNewOpen, setIsNewOpen] = useState(false);

	const toggleNewDropdowns = () => setIsNewOpen(!isNewOpen);
	return (
		<div className='flex  justify-center items-center  '>
			<div className='lg:w-3/5 w-full bg-black flex justify-between items-center p-6 lg:flex-row flex-col  rounded-2xl'>
				<div className='flex-1 text-white'>
					<h4 className='text-[#767676]'>DOWNLOAD THE APP</h4>
					<h1 className='my-4 text-[40px]'>Ready to get Started?</h1>
					<p className='text-[#9D9A9A] text-md'>
						Join millions of users who are experiencing the convenience and
						security of PayIT. Download the app today and unlock a world of
						possibilities
					</p>
					<button
						className='flex items-center px-4 py-2 rounded-full text-black my-4'
						style={{
							background:
								"linear-gradient(180deg, #FFFBD8 0%, #FFF9BD 50%, #FFF48B 100%)",
						}}
						onClick={toggleNewDropdowns}
					>
						<FaApple className='text-lg sm:text-xl lg:text-2xl mr-2' />
						<FaGooglePlay className='text-lg sm:text-xl lg:text-xl mr-2' />
						<span className='ml-2'>Download the App</span>
					</button>
					{isNewOpen && (
						<div className='mt-2 w-48 bg-white rounded-md shadow-lg'>
							<a
								href='#'
								target='_blank'
								rel='noopener noreferrer'
								className='block px-4 py-2 hover:bg-[#FEF69E] text-black cursor-pointer' // Light hover color
								onClick={() => setIsNewOpen(false)}
							>
								iOS
							</a>
							<a
								href='https://play.google.com/store/apps/details?id=ng.com.payit.app'
								target='_blank'
								rel='noopener noreferrer'
								className='block px-4 py-2 hover:bg-[#FEF69E] text-black cursor-pointer' // Light hover color
								onClick={() => setIsNewOpen(false)}
							>
								Android
							</a>
						</div>
					)}
				</div>
				<div className='flex-1'>
					<img src={Image} alt='' className='object-cover' />
				</div>
			</div>
		</div>
	);
};
