import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OperatorContext } from '../../context/OperatorContext';

const ChangePassword = () => {
 
  const navigate = useNavigate();
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const {changePassword} = useContext(OperatorContext)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!form.currentPassword) newErrors.currentPassword = 'Current password is required.';
    if (form.newPassword.length < 6) newErrors.newPassword = 'Password must be at least 6 characters.';
    if (form.newPassword !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    await changePassword(form.currentPassword, form.newPassword, form.confirmPassword);
    navigate('/passwordchanged');
  } catch (error) {
    alert('Error changing password: ' + (error.response?.data?.detail || error.message));
  }
};

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white w-[600px] rounded-[18px] p-10 flex flex-col gap-8'>
        <h1 className='text-xl font-semibold text-center'>Change Password</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          {/* Current Password */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='currentPassword' className='text-[#475367] text-[16px]'>Current Password</label>
            <input
              type='password'
              name='currentPassword'
              id='currentPassword'
              value={form.currentPassword}
              onChange={handleChange}
              placeholder='Type Current Password'
              className='border rounded border-[#E4E7EC] py-[14px] px-[23px]'
            />
            {errors.currentPassword && <p className='text-red-500 text-sm'>{errors.currentPassword}</p>}
          </div>

          {/* New Password */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='newPassword' className='text-[#475367] text-[16px]'>New Password</label>
            <input
              type='password'
              name='newPassword'
              id='newPassword'
              value={form.newPassword}
              onChange={handleChange}
              placeholder='Type New Password'
              className='border rounded border-[#E4E7EC] py-[14px] px-[23px]'
            />
            {errors.newPassword && <p className='text-red-500 text-sm'>{errors.newPassword}</p>}
          </div>

          {/* Confirm Password */}
          <div className='flex flex-col gap-1'>
            <label htmlFor='confirmPassword' className='text-[#475367] text-[16px]'>Confirm New Password</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder='Retype New Password'
              className='border rounded border-[#E4E7EC] py-[14px] px-[23px]'
            />
            {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
          </div>

          <button
            type='submit'
            className='bg-[#02402DB2] text-white py-3 px-6 rounded-lg'
          >
            Change Password
          </button>

          <button
            type='button'
            onClick={() => navigate(-1)}
            className='text-[#DD524D] border p-2 rounded-lg'
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
