import React, {useState} from "react";
import { assets } from "../assets/assets";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdOutlineHeadphones } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa6";

const SideBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const BookingHistoryIcon = (props) => (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  );

  return (
    <div
      className="sidebar sticky top-0 left-0 overflow-y-scroll h-screen z-50 hidden lg:flex flex-col w-[264px] bg-[#02402D] text-white shadow-xl py-5 px-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex items-center h-[66px]  px-2">
        <img
          src={assets.agriconLogoSvg}
          alt="Agrion Logo"
          className="size-30"
        />
      </div>
      <hr className="my-5 text-gray-600 border" />
      <div className="flex flex-col justify-between h-full">
        <nav className="flex-1 gap-[16px]">
          {[
            {
              id: "dashboard",
              label: "Dashboard",
              icon: RiDashboardHorizontalLine,
            },
            {
              id: "infrastructure",
              label: "Infrastructure",
              icon: FaRegBuilding,
            },
            {
              id: "booking-history",
              label: "Booking History",
              icon: BookingHistoryIcon,
            },
            { id: "settings", label: "Settings", icon: FiSettings },
            {
              id: "customer-support",
              label: "Customer Support",
              icon: MdOutlineHeadphones,
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenuItem(item.id)}
              className={`w-full flex items-center h-10 pl-2 rounded-lg text-left transition-colors duration-200
                          ${
                            activeMenuItem === item.id
                              ? "bg-[#FFAC00] text-white font-semibold shadow-md"
                              : "text-white"
                          }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="text-[14px]">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="profile py-5 px-3">
          {" "}
          <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
            <div className="flex items-center mb-3">
              <div className="top flex">
                <div className="circle relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
                  <div className="absolute border-r-4  border-green-800 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-black">
                      62%
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-[12px] font-semibold text-[#1D2739]">
                    Complete Profile
                  </h3>
                  <p className="text-[9px] text-[#344054]">
                    Complete profile to unlock all features
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
              Verify Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
