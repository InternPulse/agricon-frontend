import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export const CardDetails = () => {
	const [cardDetails, setCardDetails] = useState({
		cardNumber: '',
		expiryDate: '',
		cvv: '',
	});
	const [isError, setIsError] = useState({
		cardNumber: false,
		expiryDate: false,
		cvv: false,
	});
	const handleSubmit = e => {
		e.preventDefault();
		if (
			cardDetails.cardNumber.length <= 0 &&
			cardDetails.expiryDate.length <= 0 &&
			cardDetails.cvv.length <= 0
		) {
			return setIsError({ cardNumber: true, expiryDate: true, cvv: true });
		}
	};

	return (
		<section className='font-inter flex flex-col text-black p-[2rem_1rem] rounded-xl w-[22rem] items-center gap-[1.5rem] min-md:w-[36rem] shadow-lg shadow-[]'>
			<button className='self-end border-1 border-gray-300 p-[0.5rem] rounded-2xl'>
				<IoMdClose />
			</button>
			<h2 className='text-[1.9rem] text-center font-[600]'>
				Enter Card Details
			</h2>
			<form
				action=''
				className='flex flex-col gap-[1rem] w-full'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col gap-[0.5rem]'>
					<div
						className={`${
							isError.cardNumber && 'border-[#DD524D]'
						} border-[0.5px] rounded-lg border-[#808080] p-[.5rem_1rem] flex justify-between items-center w-full gap-[10px]`}
					>
						<div className=' flex flex-col gap-[0.5rem]'>
							<label
								className='text-[10px] text-[#808080]'
								htmlFor='card-number'
							>
								CARD NUMBER
							</label>
							<input
								type='text'
								name=''
								id='card-number'
								value={cardDetails.cardNumber}
								onChange={e =>
									setCardDetails({ ...cardDetails, cardNumber: e.target.value })
								}
								className='outline-none text-[1rem]'
							/>
						</div>
						{isError.cardNumber && (
							<img
								src='src/assets/payment images/error-info.png'
								alt='info'
								className=''
							/>
						)}
					</div>
					{isError.cardNumber && (
						<span className='text-[12px] text-[#DD524D] self-start font-[400]'>
							Incorrect card number
						</span>
					)}
				</div>
				<div className='grid min-md:grid-cols-2 min-md:flex-row gap-[1rem]'>
					<div className='flex flex-col gap-[0.5rem]'>
						<div
							className={`${
								isError.expiryDate && 'border-[#DD524D]'
							} border-[0.5px] rounded-lg border-[#808080] p-[.5rem_1rem] flex flex-col w-full gap-[10px] `}
						>
							<div className='flex justify-between items-center'>
								<div className='flex flex-col gap-[0.5rem]'>
									<label
										htmlFor='card-expiry'
										className='text-[10px] text-[#808080]'
									>
										CARD EXPIRY DATE
									</label>
									<input
										type='text'
										name='card-expiry'
										id='card-expiry'
										value={cardDetails.expiryDate}
										onChange={e =>
											setCardDetails({
												...cardDetails,
												expiryDate: e.target.value,
											})
										}
										className='outline-none text-[1rem]'
									/>
								</div>
								{isError.expiryDate && (
									<img
										src='src/assets/payment images/error-info.png'
										alt='info'
									/>
								)}
							</div>
						</div>
						{isError.expiryDate && (
							<span className='text-[12px] text-[#DD524D] self-start font-[400]'>
								Incorrect expiry date
							</span>
						)}
					</div>
					<div className='flex flex-col gap-[0.5rem]'>
						<div
							className={`${
								isError.cvv && 'border-[#DD524D]'
							} border-[0.5px] rounded-lg border-[#808080] p-[.5rem_1rem] flex flex-col w-full gap-[10px]`}
						>
							<div className='flex justify-between items-center'>
								<div className='flex flex-col gap-[0.5rem]'>
									<label
										htmlFor='cvv'
										className='text-[10px] text-[#808080]'
									>
										CVV
									</label>
									<input
										type='text'
										name='cvv'
										id='cvv'
										className='outline-none text-[1rem]'
									/>
								</div>
								{isError.cvv && (
									<img
										src='src/assets/payment images/error-info.png'
										alt='info'
									/>
								)}
							</div>
						</div>
						{isError.cvv && (
							<span className='text-[12px] text-[#DD524D] self-start font-[400]'>
								Incorrect CVV
							</span>
						)}
					</div>
				</div>
				<button
					className={`${
						isError.cardNumber || isError.cvv || isError.expiryDate
							? 'bg-[#104E21B2]'
							: 'bg-[#02402D] opacity-65'
					} b text-white p-[1rem] text-[1rem] font-[700] rounded-lg cursor-pointer w-full`}
					// disabled={!isError.cardNumber || !isError.cvv || !isError.expiryDate}
				>
					Pay N24,000
				</button>
			</form>
			<div className='flex items-center justify-center bg-[#00000014] p-[0.5rem] rounded-[0.5rem] cursor-pointer border-1 border-[#00000052]'>
				<button>
					<IoMdClose fontSize='1.5rem' />
				</button>
				<span className='text-[0.9rem] font-[500]'>Cancel Payment</span>
			</div>
			<div className='flex items-center gap-[0.5rem]'>
				<img
					src='src/assets/payment images/Vector.png'
					alt='secure'
				/>
				<span className='text-[0.8rem] font-[400]'>
					Secured by <b className='font-[700]'>INTERNPULSE</b>
				</span>
			</div>
		</section>
	);
};
