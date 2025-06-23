import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
const Date = () => {
  return (
    <div className="date w-[232px] flex items-center h-10 text-gray-700 px-3 py-2 rounded-full border border-gray-200">
      <CiCalendar className="w-5 h-5 mr-2 text-gray-500" />
      <span className="font-medium text-sm">Jun 2025 - July 2025</span>
      <FaChevronDown className="w-4 h-4 ml-1 cursor-pointer text-gray-500" />
    </div>
  );
};

export default Date;
