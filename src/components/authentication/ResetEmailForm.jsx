

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import LeftSide from '../../pages/authentication/LeftSide';


const base_url = import.meta.env.VITE_BASE_URL1
const VerifyEmailOTP = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setCode('');
    setLoading(true);

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${base_url}/api/v1/auth/password-reset/request/`,
        { email: formData.email },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const newCode = response.data.otp || response.data.detail?.match(/\d{6}/)?.[0]; // Extract 6-digit code
      if (newCode) {
        setCode(newCode);
        setSuccess(`Email confirmed. Your code is: ${newCode}. Redirecting to reset password...`);
        setTimeout(() => navigate('/reset-password', { state: { email: formData.email, code: newCode } }), 2000); // 2 seconds
      } else {
        setSuccess('Email confirmed. Redirecting to reset password...');
        setTimeout(() => navigate('/reset-password', { state: { email: formData.email } }), 2000); // 2 seconds
      }
    } catch (err) {
      if (err.response?.data?.detail?.includes('not found')) {
        setSuccess('Email not found. Redirecting to sign up...');
        setTimeout(() => navigate('/signup'), 2000);
      } else {
        setError('Failed to check email. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    navigate('/reset-password', { state: { email: formData.email, code } });
  };

  return (
    <div className=" lg:flex  items-center justify-center bg-gray-50 p-2 md:p-6">
      <div className="py-18 md:py-38 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-2">
        {/* Left Side (Image & Info) */}
        <LeftSide />

        {/* Right Side (Form) */}
        <div className="flex flex-col items-center justify-center lg:px-4 lg:py-8 md:p-10 p-4 space-y-6">
          <div className='text-center mb-6'>
            <h2 className=" text-xl md:text-2xl font-bold text-gray-900 mb-4">Forgot Password</h2>
            <p className="text-sm text-gray-600 mt-1">
              No worries, we'll send you a reset link. Confirm email.
            </p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <div className="text-center">
              <p className="text-green-700 text-sm font-semibold">{success}</p>
              {code && (
                <button
                  onClick={handleContinue}
                  className="mt-4 w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition"
                  disabled={loading}
                >
                  Continue to Reset Password
                </button>
              )}
            </div>
          )}
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
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition "
              disabled={loading || !formData.email}
            >
              {loading ? <ClipLoader color='#FFFFFF' size={27} /> : 'Send Reset Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailOTP;