import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { assets } from "../../assets/assets";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
// import { SidebarContext } from "../../App";

const Header = ({ role }) => {
  // const { open, toggleSidebar } = useContext(SidebarContext);
  const capture = (e) => (e.key === "Enter" ? (e.target.value = "") : "");
  const [logout, setLogout] = useState(false);
  const toggleLogout = () => setLogout(!logout);
  return (
    <header className="h-15 sm:h-20 w-full border-b border-[#dddddd] flex justify-between items-center bg-[#F7F9FC] px-5 sm:px-5 xl:px-10">
      <div className="flex items-center lg:w-60">
        <span className="text-[14px] sm:text-[20px] font-medium text-[#344054]">
          {role === "Farmer"
            ? role + " Dashboard"
            : role === "Facility Owner"
            ? role + " Dashboard"
            : "Error 404"}
        </span>
      </div>
      <div className="hidden md:flex items-center justify-center w-full max-w-sm sm:max-w-xs mb-4 sm:mb-0">
        <input
          onKeyPress={(e) => capture(e)}
          type="text"
          placeholder="Search here"
          className="sm:w-9/10 max-w-[382px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-[14px] text-gray-700"
        />
      </div>
      <div className="flex items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-end">
        <div className="flex items-center h-10 gap-4 p-2 rounded-lg">
          <Link className="absolute sm:static right-16 h-6 w-6 sm:h-10 sm:w-10 rounded-full bg-[#D5F0E8] flex justify-center items-center sm:text-xl text-[#047D58]">
            <IoNotifications />
            <span className="text-red-600 relative bottom-[6px] sm:bottom-[8px] right-[3px] text-[9px] sm:text-[12px] font-bold">
              3
            </span>
          </Link>
          <div
            onClick={() => {
              toggleLogout();
              // toggleSidebar();
            }}
            className="absolute sm:static top-4 right-4 sm:flex items-center gap-1"
          >
            <div className="flex items-center space-x-1 sm:space-x-2">
              <img className="size-8 sm:size-10" src={assets.intern} />{" "}
              <p className="hidden sm:block">Interns</p>
            </div>
            <div className="hidden sm:block">
              <FaAngleDown />
            </div>
            <div
              className={`${
                logout ? "opacity-0 sm:relative sm:opacity-100" : "hidden"
              } top-20 right-5 w-0 h-15 rounded-md flex items-center px-2 text-red-600`}
            >
              <Link
                onClick={toggleLogout}
                to={"/sign-up"}
                className="z-50 absolute px-4  w-[200px] h-15 rounded-lg flex gap-2 items-center bg-white border border-[#dddddd] right-[-30px]"
              >
                <AiOutlineLogout />
                <span className="text-[14px]">Log out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
