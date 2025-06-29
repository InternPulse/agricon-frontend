import React from 'react';
import { IoMdClose } from 'react-icons/io';

export const ErrorPage = () => {
	return (
		<section className='font-inter flex flex-col text-black p-[2rem_1rem] rounded-xl w-[22rem] items-center gap-[2rem] min-md:w-[36rem] shadow-lg my-[2rem] min-md:p-[2rem]'>
			<button className='self-end border-1 border-gray-300 p-[0.5rem] rounded-[1rem] cursor-pointer'>
				<IoMdClose />
			</button>
			<div className='flex flex-col gap-[2rem]'>
				<div className='flex flex-col gap-[1.5rem] items-center'>
					<img
						src='src/assets/payment images/Error.png'
						alt='error'
					/>
					<div className='flex flex-col gap-[0.5rem] items-center'>
						<p className='text-[#DD524D] font-[600] text-center leading-[46px] w-[20rem]'>
							Your Payment Was Not Confirmed
						</p>
						<p className='text-[1rem] font-[400] text-center leading-[1.5rem]'>
							We couldn't complete your request at this time. Please try again
							later. Oops! Something Went Wrong
						</p>
					</div>
				</div>
				<button className='text-[1rem] flex items-center justify-center font-[700] leading-[1.5rem] bg-[#104E21] text-[#F9FAFB] rounded-[0.5rem] p-[1rem] cursor-pointer'>
					Try Again
				</button>
			</div>
		</section>
	);
};
