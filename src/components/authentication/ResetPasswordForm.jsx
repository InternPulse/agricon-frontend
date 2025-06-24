

// function ResetPasswordForm() {
    
//     return (
//         <div className='lg:flex items-center justify-center w-full'>
//             <div className='space-y-10'>
//                 <div className='text-center  lg:w-[150%]'>
//                     <h2 className='font-bold text-2xl pb-2'>Reset Password</h2>
//                     <p>Set a secure password</p>
//                 </div>
//                 <form>
//                     <div className="mb-5">
//                         <label
//                             className="block text-sm text-gray-900 mb-1 font-bold"
//                             htmlFor="email"
//                         >
//                             New password
//                         </label>
//                         <input
//                             className="w-full px-3 py-2 h-13 rounded focus:outline-none border border-gray-300 lg:w-[150%]"
//                             type="New password"
//                             name=""
//                             placeholder="New password"
//                             required
//                         />
//                     </div>
//                     <div className="mb-5">
//                         <label
//                             className="block text-sm text-gray-900 mb-1 font-bold"
//                             htmlFor=""
//                         >
//                             Confirm new password
//                         </label>
//                         <input
//                             className=" w-full px-3 py-2 h-13 rounded focus:outline-none border border-gray-300 lg:w-[150%]"
//                             type="password"
//                             name=""
//                             placeholder="Confirm new password"
//                             required
//                         />
//                     </div>
//                     <button
//                         className="w-full bg-[#02402D] text-white py-4 rounded-md font-bold shadow-2xl lg:w-[150%]"
//                         type="submit"
//                     >
//                         Reset Password
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default ResetPasswordForm;




import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../assets/assets';

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: location.state?.email || '',
    code: '',
    new_password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData.email && !location.state?.email) {
      setError('No email provided. Please confirm your email first.');
      setTimeout(() => navigate('/verifyemailotp'), 2000);
    }
  }, [formData.email, location.state?.email, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (!formData.code) {
      setError('Code is required.');
      setLoading(false);
      return;
    }
    if (!formData.new_password || formData.new_password.length < 8) {
      setError('New password must be at least 8 characters long.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/password-reset/confirm/',
        {
          email: formData.email,
          code: formData.code,
          new_password: formData.new_password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess('Password reset successfully!...');
      setTimeout(() => navigate('/reset-success'), 2000);
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData?.email) setError(errorData.email[0]);
      else if (errorData?.code) setError(errorData.code[0]);
      else if (errorData?.new_password) setError(errorData.new_password[0]);
      else setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" lg:flex items-center justify-center bg-gray-50 p-2 md:p-6">
      <div className="py-16 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-2">
        {/* Left Side (Image & Info) */}
        <div className="hidden lg:flex flex-col items-center justify-center px-4 py-8 md:p-10 space-y-6 bg-[#F0F2F5]">
          <img src={assets.agriconLogo} alt="agriCon" className="w-32 mb-6" />
          <img src={assets.authImage} alt="authImage" className="w-full max-w-sm rounded-lg shadow-md" />
          <div className="text-center">
            <h2 className="text-lg font-semibold text-black">Find Nearby Infrastructure</h2>
            <p className="text-sm text-gray-600 mt-2">
              Discover dryers, cold rooms, and processing units close to your farm.
            </p>
          </div>
          <div className="flex gap-2 justify-center mt-4">
            <div className="w-20 h-1 bg-black rounded-full"></div>
            <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
            <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
            <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
            <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex flex-col items-center justify-center lg:px-4 lg:py-8 p-4 md:p-10 space-y-6">
          <div className='text-center'>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reset Password</h2>
            <p className="text-sm text-gray-600 mt-1">
              Enter your email, code from your email, and new password to reset.
            </p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-700 text-sm text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="code">
                Code
              </label>
              <input
                type="text"
                id="code"
                placeholder="123456"
                value={formData.code}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="new_password">
                New Password
              </label>
              <input
                type="password"
                id="new_password"
                placeholder="Enter new password"
                value={formData.new_password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition"
              disabled={loading || !formData.email || !formData.code || !formData.new_password}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;