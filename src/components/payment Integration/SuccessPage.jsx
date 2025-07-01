import React from 'react';
import { IoMdClose } from 'react-icons/io';

export const SuccessPage = () => {
	return (
		<section className='font-inter flex flex-col text-black p-[2rem_1rem] rounded-xl w-[22rem] items-center gap-[2rem] min-md:w-[36rem] shadow-lg my-[2rem] min-md:p-[2rem]'>
			<button className='self-end border-1 border-gray-300 p-[0.5rem] rounded-[1rem] cursor-pointer'>
				<IoMdClose />
			</button>
			<div className='flex flex-col gap-[2rem]'>
				<div className='flex flex-col items-center gap-[1.5rem]'>
					<img
						src='src/assets/payment images/Check circle.png'
						alt='check image'
					/>
					<p className='text-[30px] text-center font-[700] leading-[46px]'>
						You have successfully completed your payment! 🎉
					</p>
				</div>
				<button className='text-[1rem] flex items-center justify-center font-[700] leading-[1.5rem] bg-[#104E21] text-[#F9FAFB] rounded-[0.5rem] p-[1rem] cursor-pointer'>
					Back to Settings
				</button>
			</div>
		</section>
	);
};
