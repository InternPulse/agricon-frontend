// import React from 'react'
// import { assets } from "../../assets/assets";

// const Login = () => {
//   return (
//     <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 p-6">
//       <div className="py-16 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-2">
        
//         <div className=" hidden lg:flex flex-col items-center justify-center px-4 py-8 md:p-10 space-y-6 bg-[#F0F2F5]">
//           <img src={assets.agriconLogo} alt="agriCon" className="w-32 mb-6" />
//           <img src={assets.authImage} alt="authImage" className="w-full max-w-sm rounded-lg shadow-md"/>
//           <div className="text-center">
//             <h2 className="text-lg font-semibold text-black">Find Nearby Infrastructure</h2>
//             <p className="text-sm text-gray-600 mt-2">
//               Discover dryers, cold rooms, and processing units close to your
//               farm.
//             </p>
//           </div>
//           <div className="flex gap-2 justify-center mt-4">
//             <div className="w-20 h-1 bg-black rounded-full"></div>
//             <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
//             <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
//             <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
//             <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
//           </div>
//         </div>

        
//         <div className="flex flex-col items-center justify-center lg:px-4 lg:py-8 md:p-10 space-y-6">
//           <div className="  "> 
//             <h2 className="text-2xl font-bold text-gray-900 mb-4 ">Log In</h2>
//             <p className="text-sm text-gray-600 mt-1">Welcome back!</p>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="johndoe@gmail.com"
//                 className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="John"
//                 className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
//               />
//               <div className="text-right mt-1 w-sm">
//                 <a href="/forgot-password" className="text-sm text-green-900 hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             <button className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition">
//               Log In
//             </button>
//           </div>
//           <p className="text-sm text-center text-gray-700 w-sm">
//             Don’t have an account?{" "}
//             <a href="/signup" className="font-semibold text-black hover:underline">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login




// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/login/',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      navigate('/user');
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 p-2 md:p-6">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log In</h2>
            <p className="text-sm text-gray-600 mt-1">Welcome back!</p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                required
              />
              <div className="text-right mt-1">
                <Link to="/forgot-password" className="text-sm text-green-900 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          <p className="text-sm text-center text-gray-700">
            Don’t have an account?{' '}
            <a href="/roles" className="font-semibold text-black hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;