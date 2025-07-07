import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';

export const PaymentMethod = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Card');
	const handleRadioChange = e => {};
	return (
		<section className='text-black flex flex-col p-[2rem_1rem] gap-[2rem] font-inter shadow-2xl shadow-gray-[#00000014] rounded-lg min-md:w-[36rem] min-md:p-[2rem] my-[2rem]'>
			<button className='self-end border-1 border-gray-400 rounded-2xl p-[0.5rem] w-[3rem] h-[3rem] cursor-pointer'>
				<IoMdClose />
			</button>
			<h2 className='text-[1.9rem] font-[600] text-center'>
				Choose Payment Method
			</h2>
			<div className='flex flex-col gap-[1.5rem]'>
				<button
					className='flex gap-[1.5rem] p-[1rem] bg-[#F2F2F2] cursor-pointer rounded-lg items-center'
					onClick={() => setSelectedPaymentMethod('Card')}
				>
					<PaymentOptions
						imgName='card'
						name={'card'}
						option={'Card'}
						selectedPaymentMethod={selectedPaymentMethod}
						setSelectedPaymentMethod={setSelectedPaymentMethod}
					/>
				</button>
				<button
					className='cursor-pointer flex gap-[1.5rem] p-[1rem] bg-[#F2F2F2] rounded-lg items-center'
					onClick={() => {
						console.log(selectedPaymentMethod);
						setSelectedPaymentMethod('Bank Transfer');
					}}
				>
					<PaymentOptions
						imgName='bank'
						name='Bank Transfer'
						option={'Bank Transfer'}
						selectedPaymentMethod={selectedPaymentMethod}
						setSelectedPaymentMethod={setSelectedPaymentMethod}
					/>
				</button>
				<button
					className='cursor-pointer flex gap-[1.5rem] p-[1rem] bg-[#F2F2F2] rounded-lg items-center'
					onClick={() => {
						console.log(selectedPaymentMethod);
						setSelectedPaymentMethod('USSD');
					}}
				>
					<PaymentOptions
						imgName='ussd'
						name='USSD'
						option='USSD'
						selectedPaymentMethod={selectedPaymentMethod}
						setSelectedPaymentMethod={setSelectedPaymentMethod}
					/>
				</button>
				<button
					className='flex gap-[1.5rem] p-[1rem] bg-[#F2F2F2] cursor-pointer rounded-lg items-center'
					onClick={() => {
						console.log(selectedPaymentMethod);
						setSelectedPaymentMethod('Wallet');
					}}
				>
					<PaymentOptions
						imgName='wallet'
						name='wallet'
						option='Wallet'
						selectedPaymentMethod={selectedPaymentMethod}
						setSelectedPaymentMethod={setSelectedPaymentMethod}
					/>
				</button>
				<button
					className='flex gap-[1.5rem] p-[1rem] bg-[#F2F2F2] cursor-pointer rounded-lg items-center'
					onClick={() => {
						console.log(selectedPaymentMethod);
						setSelectedPaymentMethod('QR Code');
					}}
				>
					<PaymentOptions
						imgName='qrcode'
						name='QR Code'
						option='QR Code'
						selectedPaymentMethod={selectedPaymentMethod}
						setSelectedPaymentMethod={setSelectedPaymentMethod}
					/>
				</button>
			</div>
			<button className='bg-[#02402D] text-white p-[1rem] text-[1rem] font-[700] rounded-lg cursor-pointer'>
				Continue with {selectedPaymentMethod}
			</button>
			<div className='flex items-center justify-center gap-[1rem] cursor-pointer'>
				<button>
					<IoArrowBack className='text-[#02402D]' />
				</button>
				<span className='text-[1rem] text-[#02402D]'>Go back</span>
			</div>
		</section>
	);
};

const PaymentOptions = ({ imgName, name, option, selectedPaymentMethod }) => {
	return (
		<>
			<img
				src={`src/assets/payment images/${imgName}.png`}
				alt={`${name} image`}
				className='w-[22px] h-[22px]'
			/>
			<div className='flex items-center basis-full justify-between'>
				<label
					htmlFor={name}
					className='text-[1rem] capitalize'
				>
					{name}
				</label>
				<div className='grid place-items-center'>
					<input
						type='radio'
						id={name}
						name='payment-options'
						value={option}
						className={`${
							selectedPaymentMethod === option
								? 'border-[#02402D]'
								: 'border-gray-500'
						} col-start-1 row-start-1 appearance-none shrink-0 w-[1.5rem] h-[1.5rem] border-2  rounded-full`}
					/>
					<div
						className={`${
							selectedPaymentMethod === option ? 'bg-[#02402D]' : ''
						} col-start-1 row-start-1 w-[1rem] h-[1rem] rounded-full `}
					/>
				</div>
			</div>
		</>
	);
};
