import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { assets } from "../../assets/assets";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import Donut from "./Donut";
import { FcCustomerSupport } from "react-icons/fc";

const SideBar = ({ role }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  return (
    <div
      className="sidebar sticky top-0 left-0 overflow-y-scroll h-screen z-50 hidden lg:flex flex-col w-[264px] bg-[#02402D] text-white shadow-xl py-5 px-4"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center h-[66px] border-b-[0.5px] border-[#FFAC00]/70 h-[66px] pl-2 pb-5">
          <img src={assets.agriconLogo2} alt="Agrion Logo" className="w-25" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <nav className="flex flex-col gap-4 mb-15">
            {[
              {
                id: "dashboard",
                label: "Dashboard",
                icon: LuLayoutDashboard,
              },
              {
                id: "infrastructure",
                label: "My Facilities",
                icon: LuBoxes,
              },
              {
                id: "booking-history",
                label:
                  role === "Facility Owner" ? "Bookings" : "Booking History",
                icon: TbReportSearch,
              },
              {
                id: "settings",
                label: role === "Facility Owner" ? "Earnings" : "Settings",
                icon: MdOutlineSettings,
              },
              role === "Facility Owner"
                ? {
                    id: "profile",
                    label: "Profile",
                    icon: AiOutlineCustomerService,
                  }
                : "",
            ].map((item) =>
              item.icon && item.label ? (
                <button
                  key={item.id}
                  onClick={() => setActiveMenuItem(item.id)}
                  className={`w-full flex items-center h-10 pl-2 rounded-lg text-left hover:bg-green-400/40 transition-colors duration-200
                          ${
                            activeMenuItem === item.id
                              ? "bg-[#FFAC00] text-white font-semibold shadow-md"
                              : "text-white"
                          }`}
                >
                  {item.icon ? <item.icon className="w-5 h-5 mr-3" /> : ""}
                  <span className="text-[14px]">{item.label}</span>
                </button>
              ) : (
                ""
              )
            )}
          </nav>
          <div className="profile py-5 px-3">
            {" "}
            <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
              <div className="flex items-center mb-3">
                <div className="top flex gap-1">
                  <div className="w-full">
                    <Donut completionPercentage={62} />
                  </div>
                  <div>
                    <h3 className="text-[12px] font-semibold text-[#1D2739]">
                      Refer & Earn
                    </h3>
                    <p className="text-[9px] text-[#344054]">
                      Invite fellow farmers to join AGRICON and earn rewards
                      when they sign up and book their first facility
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
    </div>
  );
};

export default SideBar;
