import React from 'react';
import { Link } from 'react-router-dom';

const ActionRow = ({ title, description, action }) => (
  <div className='flex justify-between md:w-1/2 items-start gap-4'>
    <div>
      <h2 className='md:text-[14px] text-[12px] font-semibold'>{title}</h2>
      <p className='md:text-[12px] text-[10px] text-[#999999]'>{description}</p>
    </div>
    <div>{action}</div>
  </div>
);

const PrivacyAndSecurity = () => {
  return (
    <section className='flex flex-col bg-white p-4 rounded gap-6'>
      <header>
        <h1 className='font-bold text-[16px]'>Account Details</h1>
      </header>

      <ActionRow
        title='Verify Email Address'
        description='Stay notified in real time on your desktop'
        action={<span className='md:text-[12px] text-[10px] text-[#02402d] font-semibold cursor-pointer'>Verify Email</span>}
      />

      <ActionRow
        title='Update Password'
        description='Change your password to update & protect your account.'
        action={
          <Link to='/changepassword'>
            <span className='md:text-[12px] text-[10px] text-[#02402d] font-semibold cursor-pointer'>Change Password</span>
          </Link>
        }
      />
    </section>
  );
};

export default PrivacyAndSecurity;
