import React from "react";
import agriconlogo from "../../assets/agriconLogo.png";
import authImage from "../../assets/authimage.png";


const ResetPassword = () => {
  return (
    <div className="min-h-screen flex lg:items-center justify-center bg-white p-4">
      <div className="flex flex-col lg:flex-row shadow-lg w-full max-w-5xl rounded-lg overflow-hidden">
        {/*Image & Info */}
        <div className=" hidden bg-gray-100 p-6 lg:flex lg:flex-col lg:items-center lg:w-1/2">
          <img src={agriconlogo} alt="Agrion Logo" className="w-32 m-8" />
          <img src={authImage} alt="Phone UI" className="rounded-lg shadow-md mb-4 w-full" />
          <h2 className="text-gray-800 font-bold text-xs mt-3">Find Nearby Infrastructure</h2>
          <p className="text-sm text-center text-gray-600 mt-1">
            Discover dryers, cold rooms, and processing units close to your farm.
          </p>
        </div>

        {/* Confirmation Message */}
        <div className="flex flex-col justify-center items-center p-8 lg:w-1/2">
          <div className="text-green-700 text-4xl mb-4">
            ✓
          </div>
          <p className="text-center text-gray-800 text-lg mb-6">
            You have successfully<br />reset your password!
          </p>
          <button className="bg-green-900 hover:bg-green-800 text-white text-sm py-2 px-16 md:px-25 rounded-md">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;