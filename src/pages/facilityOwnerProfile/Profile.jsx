import React, { useContext, useState } from 'react';
import { OperatorContext } from '../../context/OperatorContext';
import { MdOutlineModeEditOutline } from "react-icons/md";

const DetailRow = ({ label, value, name, onChange, isEditing }) => (
  <div className="flex flex-col gap-1">
    <h1 className='text-[12px] text-[#999999]'>{label}</h1>
    {isEditing ? (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className='text-[#1a1a1a] border-[#D0D5DD] p-1 focus:outline-none focus:border-[#D0D5DD] rounded-lg py-2 text-[12px]'
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    ) : (
      <p>{value}</p>
    )}
  </div>
);

const Profile = () => {
  const { operator, setOperator } = useContext(OperatorContext);
  const [isEditing, setIsEditing] = useState(false);

  const {
    firstName = '',
    lastName = '',
    phone = '',
    address = '',
    email = 'taiwopersonal24@gmail.com',
  } = operator;

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOperator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fullName = `${firstName} ${lastName}`;

  if (!operator.id) return <p>Loading...</p>;

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex inter flex-col gap-8 w-full'>
        <div className='flex flex-col gap-8 bg-white px-4 py-4 rounded'>
          <div className='flex justify-between'>
            <h1 className='font-semibold text-[16px] text-[#1a1a1a]'>Personal details</h1>
            <MdOutlineModeEditOutline
              onClick={() => setIsEditing(!isEditing)}
              className='border p-1 rounded-lg border-[#808080] text-3xl cursor-pointer'
              title={isEditing ? 'Cancel' : 'Edit'}
            />
          </div>

          <div className='grid md:grid-cols-2 gap-10 md:text-[14px] text-[12px]'>
            <DetailRow
              label='First Name'
              name='firstName'
              value={fullName}
              onChange={handleChange}
              isEditing={isEditing}
            />

            {/* <DetailRow
              label='Last Name'
              name='lastName'
              value={lastName}
              onChange={handleChange}
              isEditing={isEditing}
            /> */}

            <DetailRow
              label='Email Address'
              name='email'
              value={email}
              onChange={handleChange}
              isEditing={isEditing}
            />

            <DetailRow
              label='Phone Number'
              name='phone'
              value={phone}
              onChange={handleChange}
              isEditing={isEditing}
            />

            <DetailRow
              label='Facility Address'
              name='address'
              value={address}
              onChange={handleChange}
              isEditing={isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
