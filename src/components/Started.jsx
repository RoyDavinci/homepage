import React from "react";
import Image from "../assets/Studio.png";
import { FaApple, FaAndroid } from "react-icons/fa";

export const Started = () => {
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
					<button className='flex items-center px-4 py-2 rounded-full text-black bg-[#FEF595] my-4'>
						<FaAndroid /> <FaApple /> <span>Download the App</span>
					</button>
				</div>
				<div className='flex-1'>
					<img src={Image} alt='' className='object-cover' />
				</div>
			</div>
		</div>
	);
};
