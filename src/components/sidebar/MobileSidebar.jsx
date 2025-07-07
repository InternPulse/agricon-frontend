import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FaBars, FaCog, FaTimes } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function MobileSidebar({
  showMobileMenu,
  setShowMobileMenu,
  inactiveClass,
  isActive,
  activeClass,
}) {
  return (
    <div
      className={`fixed inset-0 z-10  transition-opacity duration-300 ease-in-out
                            ${
                              showMobileMenu
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                            }`}
      onClick={() => setShowMobileMenu(false)}
    >
      <div
        className={`fixed md:hidden top-0 bottom-0 left-0 w-full bg-deep-green  text-gray-800 dark:text-white
                                shadow-lg transform transition-transform duration-300 ease-in-out z-50
                                ${
                                  showMobileMenu
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                                }`}
      >
        <div className="flex justify-between items-center p-3 mb-2 ">
          <div className="flex items-center space-x-1 font-bold ml-3">
            <img
              src={assets.agriconLogoWhite}
              alt="Agricon_img"
              className="ml-6 hidden lg:block "
            />

            <Link to="/notification">
              <img
                src={assets.NotificationsYellow}
                className=" block lg:hidden"
              />
            </Link>
          </div>

          <div>
            <img
              src={assets.exportClose}
              onClick={() => setShowMobileMenu(false)}
              className="cursor-pointer rounded-md "
            />
          </div>

          {/* <FaTimes
              onClick={() => setShowMobileMenu(false)}
             
            /> */}
        </div>

        <div className="border-b border-vivid-yellow mx-2 "></div>

        <ul className="flex flex-col gap-2 mt-5 px-5 text-lg font-medium">
          {/* Mobile Navigation Links */}
          <Link
            onClick={() => setShowMobileMenu(false)}
            to={"/"}
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive("/") ? activeClass : inactiveClass
            }`}
          >
            <MdOutlineDashboard className="w-5 h-5 mr-3" /> Dashboard
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to={"/facilities"}
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive("/facilities") ? activeClass : inactiveClass
            }`}
          >
            <FaCubes className="w-5 h-5 mr-3" /> Facilities
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to={"/booking-history"}
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive("/booking-history") ? activeClass : inactiveClass
            }`}
          >
            <AiOutlineFileSearch className="w-5 h-5 mr-3" /> Booking History
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to={"payment"}
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive("/payment") ? activeClass : inactiveClass
            }`}
          >
            <FaMoneyBillAlt className="w-5 h-5 mr-3" /> Payment
          </Link>
          <Link
            onClick={() => setShowMobileMenu(false)}
            to={"settings"}
            className={`flex items-center py-3 px-4 rounded-lg ${
              isActive("/settings") ? activeClass : inactiveClass
            }`}
          >
            <FaCog className="w-5 h-5 mr-3" /> Settings
          </Link>

          {/* profileIcon */}

          <div className="flex flex-col md:hidden gap-2 mt-25 px-5 text-lg font-medium w-full space-y-4 ">
            <div className="flex  items-center gap-4">
              <img src={assets.profilePics} />
              <p>Intern</p>
            </div>
            <button className="flex items-center gap-4 bg-white w-full p-2 rounded-md cursor-pointer">
              <img  src={assets.signoutIcon} alt="sigoutIcon"/>
              <p className="text-alert-red">Sign Out</p>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
