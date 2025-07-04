import React, { useContext } from 'react';
import { OperatorContext } from '../../context/OperatorContext';

const DetailRow = ({ label, value }) => (
  <div>
    <h1 className='text-[12px] text-[#999999]'>{label}</h1>
    <p>{value}</p>
  </div>
);

const Profile = () => {
  const { operator } = useContext(OperatorContext);
console.log(operator);
  

  const {
    firstName = '',
    lastName = '',
    phone = '',
    address = '',
    email = 'taiwopersonal24@gmail.com', 
  } = operator;

  const fullName = `${firstName} ${lastName}`;
  if(!operator.id) return <p>Loading</p>

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex inter flex-col gap-8 w-full'>
        {/* personal details */}
        <div className='flex flex-col gap-8 bg-white px-4 py-4 rounded'>
          <h1 className='font-semibold text-[16px] text-[#1a1a1a]'>Personal details</h1>
          <div className='grid md:grid-cols-2 gap-10 md:text-[14px] text-[12px]'>
            <DetailRow label='Full Name' value={fullName} />
            <DetailRow label='Email Address' value={email} />
            <DetailRow label='Phone Number' value={phone} />
            <DetailRow label='Facility Address' value={address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
