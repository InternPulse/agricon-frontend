import React from "react";
import { BiNotification } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <header className="h-20 w-full border-b border-[#dddddd] flex justify-between items-center bg-[#F7F9FC] px-5 sm:px-5 xl:px-10">
      <div className="flex items-center lg:w-60">
        <span className="text-[20px] font-medium text-[#344054]">
          Facility Owner Dashboard
        </span>
      </div>
      <div className="hidden md:flex items-center justify-center w-full max-w-sm sm:max-w-xs mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search here"
          className="sm:w-9/10 max-w-[382px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-[14px] text-gray-700"
        />
      </div>
      <div className="flex items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-end">
        <div className="flex items-center h-10 gap-4 p-2 rounded-lg">
          <div className="h-10 w-10 rounded-full bg-[#D5F0E8] flex justify-center items-center text-xl text-[#047D58]">
            <IoNotifications />
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={assets.intern} /> <p>Interns</p>
            </div>
            <div>
              <select name="intern" id="intern">
                Log out
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
