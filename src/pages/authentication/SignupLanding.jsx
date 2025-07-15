
// src/components/SignupLanding.js

import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import LeftSide from './LeftSide'
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const SignupLanding = () => {

  const navigate = useNavigate();
  const farmerRole = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault(); 
    }
    try {
      localStorage.setItem('userRole', 'FARMER');
      navigate("/signup")
    } catch (error) {
      console.error("Error saving farmer role", error);
    }
  };

  const facilityRole = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault(); 
    }
    try {
      localStorage.setItem('userRole', 'OPERATOR');
      navigate("/signup")
     
    } catch (error) {
      console.error("Error saving facility owner role", error);
    }
  };


  return (
    <div className="flex items-center justify-center  bg-gray-50 p-2 min-h-screen md:p-6">
      <div className="py-10 lg:py-0 bg-white drop-shadow-md rounded-xl w-full max-w-6xl grid lg:grid-cols-2 md:gap-6">
        {/* Left Section */}
        <LeftSide />

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center md:my-16 lg:my-0 lg:px-4 lg:py-8 md:p-10 md:space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Sign up</h2>
          </div>
          <div className="md:space-y-4 w-full md:max-w-md p-2">
              <Link to="/signup" onClick={farmerRole}>
            <div className="flex items-center mb-4 md:mb-6 justify-between bg-white p-6 rounded-lg shadow-sm transition">
              <div>
                <div className="text-xl font-semibold text-gray-900 mb-2 sm:text-2xl">
                  AgriCon for Farmers
                </div>
                <div className="text-gray-600">
                  Book cold rooms, dryers, and processing units
                </div>

              </div>
                {/* <span className="text-xl text-[#02402D] ml-2 font-extrabold">›</span> */}
                <FaAngleRight size={32} />
            </div>
              </Link>
              <Link to="/signup" onClick={facilityRole}>
            <div className=" flex items-center justify-between bg-white p-6 rounded-lg shadow-sm transition">
                <div>
                <div className="text-xl font-semibold text-gray-900 mb-2 sm:text-2xl">
                  AgriCon for Facility Owners
                </div>
                <div className=" text-gray-600">
                  Create and manage bookings online.
                </div>
                </div>
              <FaAngleRight size={32} />
            </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLanding;