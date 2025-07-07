// src/components/ResetPasswordOTP.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../assets/assets';
import LeftSide from './LeftSide';

const ResetPasswordOTP = () => {
  const [formData, setFormData] = useState({ email: '', code: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/password/reset/verify-otp/',
        { email: formData.email, code: formData.code },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess(response.data.message || 'OTP verified. Proceed to reset password.');
      setTimeout(() => navigate('/successful-reset-password-form'), 2000); // Redirect to reset password form
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/otp/resend/',
        { email: formData.email },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess(response.data.message || 'OTP resent successfully.');
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 p-6">
      <div className="py-16 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-2">
        {/* Left Side (Image & Info) */}
        <LeftSide />

        {/* Right Side (Form) */}
        <div className="flex flex-col items-center justify-center lg:px-4 lg:py-8   md:p-10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Verify Reset OTP</h2>
            <p className="text-sm text-gray-600 mt-1">Enter the OTP sent to your email.</p>
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
                OTP Code
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
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? <ClipLoader color='#FFFFFF' size={27} /> : 'Verify OTP'}
            </button>
          </form>
          <p className="text-sm text-center text-gray-700">
            Didn’t receive an OTP?{' '}
            <button
              onClick={handleResendOTP}
              className="font-semibold text-green-900 hover:underline"
              disabled={loading}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordOTP;