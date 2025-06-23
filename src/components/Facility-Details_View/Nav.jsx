import { FaChevronDown } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f9fafb] py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center space-x-4">
        <IoMdArrowBack className="text-xl text-black" />
        <h1 className="text-lg font-semibold text-[#2c3e50]">
          Facility Details
        </h1>
      </div>

      <div className="flex items-center space-x-4 ">
        <div className="w-2xs">
          <input
            type="text"
            placeholder="Search here"
            className="w-full text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div className="bg-[#d7f3ed] p-2 rounded-full">
          <IoNotificationsOutline className="text-lg text-[#2c3e50]" />
        </div>
        <FaUserCircle className="w-8 h-8 rounded-full object-cover" />
        <div className="flex items-center space-x-1 text-[#111827] font-medium">
          <span className="text-lg">Interns</span>
          <FaChevronDown className="text-sm" />
        </div>
      </div>
    </nav>
  );
}
