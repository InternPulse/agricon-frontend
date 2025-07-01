import React from 'react';

export const Receipt = () => {
	return (
		<section className='font-inter flex flex-col text-black p-[2rem_1rem] rounded-[24px] w-[22rem] items-center gap-[2rem] min-md:w-[46rem] shadow-lg my-[2rem] min-md:p-[2rem]'>
			<div className='flex flex-col gap-[2.5rem] w-full'>
				<div className='flex flex-col gap-[2rem]'>
					<div className='flex gap-[2rem] flex-col'>
						<div className='flex flex-col gap-[2rem] items-start'>
							<img
								src='src/assets/payment images/agricon.png'
								alt='logo'
							/>
							<div className='flex flex-col gap-[20px]'>
								<p className='font-[600] text-[1.5rem] leading-[120%] text-[#101928]'>
									Your booking is confirmed!
								</p>
								<div className='flex flex-col gap-[0.5rem]'>
									<p className='text-[18px] text-[#1D2739] font-[500]'>
										Hello John,
									</p>
									<p className='text-[14px] text-[#475367]'>
										Your booking is successful! Service will be available in 2
										days.
									</p>
								</div>
							</div>
						</div>
						<div className='border-t-[0.5px] border-b-[0.5px] border-[#98A2B3] flex gap-[2rem] p-[1.5rem_0] flex-wrap'>
							<div className='flex flex-col border-r-[0.5px] border-r-[#98A2B3] gap-[2px] pr-[1.3rem]'>
								<p className='text-[#667185] text-[14px] '>Order date</p>
								<div className='flex flex-col '>
									<p className='text-[#1D2739] font-[500] text-[14px]'>
										6th June,2025
									</p>
									<p className='text-[12px] text-[#40B869]'>14:00 (WAT)</p>
								</div>
							</div>
							<div className='flex flex-col border-r-[0.5px] border-r-[#98A2B3] gap-[6px] pr-[1.5rem]'>
								<p className='text-[14px] text-[#667185]'>Order number</p>
								<div className='flex rounded-[6px] border-[0.5px] border-[#D0D5DD] gap-[0.2rem] p-[6px]'>
									<p className='text-[14px]'>
										#AGRI-5678
										<span className='ml-[10px] font-[400] text-[#40B869]'>
											Copy
										</span>
									</p>
								</div>
							</div>
							<div className='flex flex-col border-r-[0.5px] border-r-[#98A2B3] gap-[10px] pr-[1.5rem]'>
								<p className='text-[14px] text-[#667185]'>Payment method</p>
								<div className='flex gap-[30px]'>
									<p className='text-[14px] font-[500] text-[#1D2739]'>
										Mastercard**
									</p>
									<img
										src='src/assets/payment images/logos_mastercard.png'
										alt='mastercard'
									/>
								</div>
							</div>
							<div className='flex flex-col gap-[2px] p-[3px]'>
								<p className='text-[14px] text-[#667185]'>Shipping address</p>
								<div className='flex flex-col'>
									<p className='text-[#1D2739] text-[14px] font-[500]'>
										15b Dolor Ave.
									</p>
									<p className='text-[12px] text-[#40B869]'>Lagos, NGA.</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-[24px]'>
						<div className='flex flex-col gap-[2rem]'>
							<div className='flex gap-[20px] items-center'>
								<img
									src='src/assets/payment images/image1.jpg'
									alt='image 1'
									className='w-[5rem] h-[72px] rounded-[4px]'
								/>
								<div className='flex flex-col gap-[1rem] w-full'>
									<div className='flex justify-between items-center text-[14px] min-md:text-[18px]'>
										<p className=' text-[#1D2739] font-[500]'>
											Cold Room Facility Storage
										</p>
										<p className='font-[600] flex'>
											₦1,500{' '}
											<span className='font-[400] text-gray-400'>/day</span>
										</p>
									</div>
									<div className='flex gap-[4px]'>
										<span className='text-[14px] text-[#475367]'>
											Quantity:
										</span>
										<p className='text-[14px] font-[500]'>
											5 <span className='text-gray-500'>days</span>
										</p>
									</div>
								</div>
							</div>
							<div className='border-[0.5px] border-[#98A2B3] ml-[5rem]' />
							<div className='flex gap-[20px] items-center'>
								<img
									src='src/assets/payment images/image2.jpg'
									alt='image 1'
									className='w-[5rem] h-[72px] rounded-[4px]'
								/>
								<div className='flex flex-col gap-[1rem] w-full'>
									<div className='flex justify-between items-center text-[14px] min-md:text-[18px]'>
										<p className=' text-[#1D2739] font-[500]'>
											Logistics Support
										</p>
										<p className='font-[600] flex'>
											₦3,000{' '}
											<span className='font-[400] text-gray-400'>/day</span>
										</p>
									</div>
									<div className='flex gap-[4px]'>
										<span className='text-[14px] text-[#475367]'>
											Quantity:
										</span>
										<p className='text-[14px] font-[500]'>
											1 <span className='text-gray-500'>trip</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center min-md:grid min-md:grid-cols-2'>
					<img
						src='src/assets/payment images/paid.png'
						alt='paid iamge'
						className='w-[134px]'
					/>
					<div className='flex flex-col gap-[0.5rem] w-full'>
						<div className='flex flex-col gap-[1rem]'>
							<div className='flex gap-[12px] flex-col'>
								<div className='flex justify-between items-center w-full'>
									<span className='text-[14px] text-[#475367] font-[500]'>
										Sub-total
									</span>
									<span className='text-[16px] font-[600] text-[#101928]'>
										₦10,500
									</span>
								</div>
								<div className='flex justify-between items-center w-full'>
									<span className='text-[14px] text-[#475367] font-[500]'>
										Shipping fee
									</span>
									<span className='text-[16px] font-[600] text-[#101928]'>
										₦750
									</span>
								</div>
								<div className='flex justify-between items-center w-full'>
									<span className='text-[14px] text-[#475367] font-[500]'>
										Discount
									</span>
									<span className='text-[16px] font-[600] text-[#101928]'>
										₦150
									</span>
								</div>
							</div>
							<div className='border-[0.5px] border-[#98A2B3]' />
						</div>
						<div className='flex justify-between'>
							<span className='text-[14px] text-[#1D2739] font-[600]'>
								TOTAL
							</span>
							<span className='text-[1rem] font-[600] text-[#101928]'>₦11,400</span>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-[2.5rem] w-full'>
				<div className='flex flex-col gap-[40px]'>
					<div className='flex gap-[1rem] min-md:gap-[4.5rem] flex-col min-md:flex-row'>
						<div className='flex flex-col text-[14px] font-[500] leading-[145%]'>
							<p className='text-[#475367]'>Expected start date</p>
							<p className='text-[#40B869]'>11th June, 2025</p>
						</div>
						<div className='flex gap-[1rem] flex-col min-md:flex-row'>
							<div className='bg-[#010202] rounded-[2px] flex items-center p-[9px__4rem] justify-center'>
								<p className='font-600] text-[14px] text-[#FFFFFF]'>
									Share Receipt
								</p>
							</div>
							<div className='border-1 border-[#02402d] rounded-[2px] flex items-center p-[9px__3.5rem] justify-center'>
								<p className='font-600] text-[14px] text-[#02402d]'>
									Download PDF
								</p>
							</div>
							<div></div>
						</div>
					</div>
					<div className='flex flex-col gap-[1.5rem]'>
						<div className='border-[0.5px] border-[#98A2B3]'></div>
						<div className='flex gap-[1rem] min-md:justify-between flex-col min-md:flex-row'>
							<div className='flex flex-col gap-[0.25rem]'>
								<p className='font-[600] text-[16px] text-[#101928]'>
									Thanks for ordering!
								</p>
								<p className='text-[#475367] text-[14px]'>AGRICON team</p>
							</div>
							<div className='flex gap-[.25rem] flex-col'>
								<p className='font-[600] text-[16px] text-[#101928] min-md:self-end'>
									Need help?
								</p>
								<p className='text-[14px] text-[#475367] min-md:self-end'>
									Reach us at{' '}
									<a
										href='support@agricon.ng'
										className='text-green-400'
									>
										support@agricon.ng
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
