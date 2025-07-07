import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
const Date = () => {
  return (
    <div className="date w-[145px] sm:w-[232px] flex justify-around items-center h-8 sm:h-10 text-gray-700 px-1 sm:px-3 sm:py-2 rounded-full border border-gray-200">
      <CiCalendar className="w-4 sm:w-5 h-4 sm:h-5 sm:mr-2 text-gray-500" />
      <span className="font-medium text-[10px] sm:text-sm">Jun 2025 - July 2025</span>
      <FaChevronDown className="w-2 sm:w-4 h-2 sm:h-4 ml-1 sm:ml-2 cursor-pointer text-gray-500" />
    </div>
  );
};

export default Date;
