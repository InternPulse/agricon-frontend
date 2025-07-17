import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import LeftSide from "./LeftSide";
import { useAuth } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [reveal, setReveal] = useState("password");
  const toggleReveal = () => {
    setReveal(reveal === "password" ? "text" : "password");
  };
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://agricon-django-backend.onrender.com/api/v1/auth/login/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      localStorage.setItem("email", response.data.email);
      const currentRole = response.data.role.toLowerCase();
      // console.log(response.data)
      // console.log(currentRole);
      login(currentRole);
      navigate(`/${currentRole}`);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 p-2 md:p-6">
      <div className="py-16 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-2">
        {/* Left Side (Image & Info) */}
        <LeftSide />

        {/* Right Side (Form) */}
        <div className="flex flex-col items-center justify-center lg:px-4 lg:py-8 p-4 md:p-10 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log In</h2>
            <p className="text-sm text-gray-600 mt-1">Welcome back!</p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
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
            <div className="relative">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              {reveal === "password" ? (
                <FaEyeSlash
                  className="absolute right-2 top-8.5 text-gray-700"
                  onClick={() => toggleReveal("text")}
                />
              ) : (
                <FaEye
                  className="absolute right-2 top-8.5 text-gray-700"
                  onClick={() => toggleReveal("text")}
                />
              )}
              <input
                type={reveal}
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-700"
                required
              />
              <div className="text-right mt-1">
                <a
                  href="/forgot-password"
                  className="text-sm text-green-900 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? <ClipLoader color="#FFFFFF" size={27} /> : "Log In"}
            </button>
          </form>
          <p className="text-sm text-center text-gray-700">
            Don’t have an account?{" "}
            <Link to="/roles" className="font-semibold text-black">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
