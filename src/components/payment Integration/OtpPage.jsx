import React from 'react';
import { IoMdClose } from 'react-icons/io';

export const OtpPage = () => {
	return (
		<section className='font-inter flex flex-col text-black p-[2rem_1rem] rounded-xl w-[22rem] items-center gap-[1.5rem] min-md:w-[36rem] shadow-lg my-[2rem]'>
			<button className='self-end border-1 border-gray-300 p-[0.5rem] rounded-2xl cursor-pointer'>
				<IoMdClose />
			</button>
			<div className='flex flex-col gap-[2rem] justify-center items-center'>
				<h2 className='text-[30px] font-[600]'>OTP Verification</h2>
				<img
					src='src/assets/payment images/otp.png'
					alt='phone image'
					className='w-[5rem]'
				/>
				<p className='text-[1rem] font-[400] text-center'>
					We’ve sent a <span className='font-[600]'>6-digit code</span> to your
					phone number +234******4377 Please enter it below to verify your
					action.
				</p>
				<div className='flex flex-col gap-[5rem] w-full'>
					<div className='flex flex-col gap-[3rem]'>
						<div className='flex flex-col gap-[1rem]'>
							<div className='flex justify-center gap-[1rem]'>
								<div className='w-[3rem] h-[3rem] border-[0.5px] rounded-[4px] border-[#808080] text-[1rem] font-[500] flex items-center justify-center font-nunito'>
									1
								</div>
								<div className='w-[3rem] h-[3rem] border-[0.5px] rounded-[4px] border-[#808080] text-[1rem] font-[500] flex items-center justify-center font-nunito'>
									1
								</div>
								<div className='w-[3rem] h-[3rem] border-[0.5px] rounded-[4px] border-[#808080] text-[1rem] font-[500] flex items-center justify-center font-nunito'>
									1
								</div>
								<div className='w-[3rem] h-[3rem] border-[0.5px] rounded-[4px] border-[#808080] text-[1rem] font-[500] flex items-center justify-center font-nunito'>
									1
								</div>
								<div className='w-[3rem] h-[3rem] border-[0.5px] rounded-[4px] border-[#808080] text-[1rem] font-[500] flex items-center justify-center font-nunito'>
									1
								</div>
								<div className='w-[3rem] h-[3rem] border-[0.5px] rounded-[4px] border-[#808080] text-[1rem] font-[500] flex items-center justify-center font-nunito'>
									1
								</div>
							</div>
							<p className='text-[14px] text-[#808080] text-center'>
								Didn’t receive the code?{' '}
								<span className='font-[500] text-black'>Resend OTP in</span>
								<span className='font-[500] text-green-700'> 00:30</span>
							</p>
						</div>
						<button className='bg-[#104E21] text-[1rem] font-[700] p-[1rem] rounded-[0.5rem] text-[#FFFFFF] cursor-pointer'>
							Authorize
						</button>
					</div>
					<div className='flex flex-col gap-[35px] items-center '>
						<button className='flex gap-[4px] rounded-[0.5rem] border-1 p-[0.5rem] bg-[#00000014] border-[#00000052] items-center cursor-pointer'>
              <img src="src/assets/payment images/x.png" alt="cancel button" />
              <span className='font-[500] text-[14px]'>Cancel Payment</span>
						</button>
            <div className='flex gap-[0.25rem] items-center'>
              <img src="src/assets/payment images/Vector.png" alt="lock" />
              <p className='text-[12px]'>Secured by <span className='font-[700]'>INTERNPULSE</span></p>
            </div>
					</div>
				</div>
			</div>
		</section>
	);
};
