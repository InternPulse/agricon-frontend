
// src/components/SignupLanding.js

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import logo from "../../assets/agriconLogo.png";

const SignupLanding = () => {
  return (
    <div className="min-h-screen lg:flex items-center justify-center bg-gray-50 p-6">
      <div className="py-16 lg:py-0 bg-white rounded-xl shadow-md w-full max-w-6xl grid lg:grid-cols-2 md:gap-6">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col items-center justify-center px-4 py-8 md:p-10 space-y-6 bg-[#F0F2F5]">
          <img src={logo} alt="agrion" className="w-32 mb-6" />
          <img
            src={assets.authImage}
            alt="Find Nearby Infrastructure"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
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
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col items-center justify-center md:my-16 lg:my-0 lg:px-4 lg:py-8 md:p-10 md:space-y-6">
          <div>
            <h2 className=" text-xl md:text-2xl font-bold text-gray-900 md:mb-4">Sign up</h2>
          </div>
          <div className="md:space-y-4 w-full md:max-w-md p-4">
              <Link to="/signup" state={{ role: "FARMER" }}>
            <div className="flex items-center mb-4 md:mb-6 justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div>
                <div className="md:text-lg font-semibold text-gray-900 mb-2">
                  AgriCon for Farmers
                </div>
                <div className="text-sm text-gray-600">
                  Book cold rooms, dryers, and processing units
                </div>

              </div>
              <span className="text-xl text-[#02402D] ml-2 font-extrabold">›</span>
            </div>
              </Link>
              <Link to="/signup" state={{ role: "OPERATOR" }}>
            <div className=" flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div>
                <div className="md:text-lg font-semibold text-gray-900 mb-2">
                  AgriCon for Facility Owners
                </div>
                <div className="text-sm text-gray-600">
                  Create and manage bookings online.
                </div>
                </div>
              <span className="text-xl text-[#02402D] ml-2 font-extrabold ">›</span>
            </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLanding;