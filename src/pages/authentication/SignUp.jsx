// import authImage from "../../assets/authImage.png";
// import agriconLogo from "../../assets/agriconLogo.png";
// import Carousels from "../../components/authentication/Carousels";
// import Credentials from "../../components/authentication/Credentials";

// export default function SignUp() {
//   return (
//     <div className="grid lg:grid-cols-2 mb-10 gap-12 lg:gap-20 p-10 sm:p-18 lg:p-24 xl:p-30 lg:mb-0">
//       <div className="order-2 lg:order-1 hidden lg:inline-block">
//         <div className="flex flex-col py-[4.7rem] px-[4.2rem] items-center justify-center h-full bg-[#F0F2F5]">
//           <img
//             className="hidden lg:block w-auto mb-[2.3rem]"
//             src={agriconLogo}
//             alt="Agricon Logo"
//           />
//           <img
//             className="w-full max-w-[441px] mb-[2.3rem]"
//             src={authImage}
//             alt="Sign up image"
//           />
//           <p className="font-Inter mb-2 text-xl font-semibold text-[#010E0A]">
//             Find Nearby Infrastructure
//           </p>
//           <p className="font-Inter mb-9 text-[#010E0A] text-sm">
//             Discover dryers, cold rooms, and processing units close to your
//             farm.
//           </p>
//           <Carousels />
//         </div>
//       </div>

//       <div className=" flex justify-center mb-0 lg:hidden lg:mb-8">
//         <img className="hidden w-[120px]" src={agriconLogo} alt="Agricon Logo" />
//       </div>
//       <div className=" order-1 lg:order-2">
//         <Credentials />
//       </div>
//     </div>


//   );
// }



import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole")
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(''); // To store and display the OTP or handle input
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    role: role,
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setOtp(''); // Reset OTP on new submission

    // Enhanced client-side validation
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.role || !['FARMER', 'OPERATOR', 'ADMIN'].includes(formData.role)) {
      setError('Role must be FARMER, OPERATOR, or ADMIN.');
      return;
    }
    if (formData.password !== formData.password2) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending POST to register:', {
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
        role: formData.role,
      });
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/register/',
        {
          email: formData.email,
          password: formData.password,
          password2: formData.password2,
          role: formData.role,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      // console.log('Registration response:', response.data);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      const receivedOtp = response.data.otp; // Assuming backend returns otp
      if (receivedOtp) {
        setOtp(receivedOtp);
        setSuccess(`Registration successful! Your OTP is: ${receivedOtp}. Please copy it for verification.`);
        setTimeout(() => navigate('/verifyemailotp', { state: { email: formData.email, otp: receivedOtp } }), 2000);
      } else {
        setError('OTP not received from backend.');
      }
    } catch (err) {
      console.error('Registration error details:', err.response?.data);
      if (err.response?.data?.email?.[0]?.includes('A user with that email already exists.')) {
        setSuccess('Email already registered. Please enter your OTP to verify:');
      } else {
        setError(
          err.response?.data?.email?.[0] ||
          err.response?.data?.password?.[0] ||
          err.response?.data?.role?.[0] ||
          err.response?.data?.detail ||
          'Registration failed. Check console for details.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No authentication token. Please sign up again.');
        return;
      }
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/verify-email-otp/',
        { email: formData.email, code: otp },
        { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
      );
      setSuccess(response.data.message || 'Email verified successfully!');
      setTimeout(() => navigate('/dashboard'), 20000);
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid OTP. Please try again.');
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
            <p className="text-sm text-gray-600 mt-1">
              Create a {formData.role === 'FARMER' ? 'farmer' : formData.role === 'OPERATOR' ? 'operator' : 'admin'} account to access facilities.
            </p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <div className="text-center">
              <p className="text-green-700 text-sm font-semibold">{success}</p>
              {success.includes('already registered') && (
                <form onSubmit={handleOtpSubmit} className="space-y-4 mt-4 w-full max-w-md">
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                      OTP
                    </label>
                    <input
                      className="w-full px-4 py-2 border-amber-100 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                      id="otp"
                      type="text"
                      placeholder="Enter your OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                </form>
              )}
              {success.includes('Your OTP is') && (
                <p className="text-sm text-gray-600 mt-2">
                  OTP will be used automatically on the next page.
                </p>
              )}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border-zinc-500 shadow rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='hidden'>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                className="w-full px-4 py-2 border-zinc-500 shadow rounded-md bg-gray-100 text-sm text-gray-700 cursor-not-allowed"
                id="role"
                type="text"
                value={formData.role}
                readOnly
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border-zinc-500 shadow rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                id="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-2 border-zinc-500 shadow rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                id="password2"
                type="password"
                placeholder="Confirm password"
                value={formData.password2}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Send OTP'}
            </button>
          </form>
          <p className="text-sm text-center text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-green-900 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;