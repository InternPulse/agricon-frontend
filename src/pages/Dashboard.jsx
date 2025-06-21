import React from "react";
import SideBar from "../components/sideBar";
import { HiBell } from "react-icons/hi";
import UserDropdown from "../components/Farmer-Profile-Management/userDropdown";

export default function FacilityOwnerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans" style={{ scrollbarWidth: "none" }}>
      <SideBar />

      <div className="flex-1">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#f5f8fa] px-4 md:px-10 py-4 md:py-6 gap-4 border-b border-blue-200">
          <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
          
          <div className="flex items-center gap-4 w-full max-w-md">
            <input
              type="search"
              placeholder="Search here"
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none w-full"
            />

            <div className="flex items-center gap-2">
              <div className="relative w-[40px] h-[40px] rounded-full bg-[#D5F0E8] flex justify-center items-center">
                <HiBell className="text-[#047D58]" />
              </div>
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="w-8 h-8 rounded-full border"
              />
              <span className="text-sm font-medium text-gray-700">Interns</span>
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
