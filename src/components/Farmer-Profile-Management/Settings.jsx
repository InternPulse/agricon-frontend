import React, { useState } from "react";
// import SideBar from "../sideBar";
import { HiBell } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import Profile from "./Profile";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [desktop, setDesktop] = useState(true);
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const [muteAll, setMuteAll] = useState(false);

  const tabs = ["Profile", "Notifications", "Privacy & Security"];

  return (
    <div className="flex min-h-screen bg-[#f7f9fa] w-full">
      {/* <SideBar /> */}
      <div className="flex-1">
        {/* Top Header */}
        <div className="flex items-center justify-between bg-[#f5f8fa] px-10 py-6 border-b border-blue-200">
          <h1 className="text-2xl font-semibold text-gray-700">Account Settings</h1>
          <div className="flex items-center gap-4 w-full max-w-md">
            <input
              type="search"
              placeholder="Search here"
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none w-full"
            />
            <div className="flex items-center gap-2">
              <span className="relative">
                <div className="w-[40px] h-[40px] rounded-full bg-[#D5F0E8] flex justify-center items-center">
                  <span className="text-[#047D58] flex justify-center items-center">
                    <HiBell />
                  </span>
                </div>
              </span>
              <img src="user-avatar.jpg" alt="User" className="w-8 h-8 rounded-full border" />
              <span className="text-sm font-medium text-gray-700">Interns</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tabs & Content Wrapper */}
        <div className="px-10 pb-10 pt-4 bg-[#f7f9fa] min-h-[calc(100vh-120px)]">
          <div className="mx-auto">
            {/* Tabs */}
            <div className="bg-white py-3 mb-4 rounded-lg">
              <div className="flex space-x-8 ">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`ms-4 px-6 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-[#e6f4ea] text-green-700 font-semibold"
                        : "bg-transparent text-gray-500 hover:text-green-700"
                    }`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            {activeTab === "Profile" && (
              <Profile />
            )}

            {/* Notifications Tab Content */}
            {activeTab === "Notifications" && (
              <div className="bg-white rounded-xl shadow p-8">
                <h2 className="text-lg font-semibold mb-6 text-black">Notifications</h2>
                <div className="space-y-8">
                  {/* Desktop Notification */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Enable Desktop Notification</div>
                      <div className="text-gray-400 text-sm">Stay notified in real time on your Destop</div>
                    </div>
                    <button
                      onClick={() => setDesktop((v) => !v)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                        desktop ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${
                          desktop ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {/* SMS Alert */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Enable SMS Alert</div>
                      <div className="text-gray-400 text-sm">Receive quick alerts via text message</div>
                    </div>
                    <button
                      onClick={() => setSms((v) => !v)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                        sms ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${
                          sms ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {/* Email Alert */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Enable Email Alert</div>
                      <div className="text-gray-400 text-sm">Get updates delivered to your inbox</div>
                    </div>
                    <button
                      onClick={() => setEmail((v) => !v)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                        email ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${
                          email ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Notifications" && (
              <div className="bg-white rounded-xl my-5 shadow p-8">
                  <h2 className="text-xl font-semibold mb-6 text-black">Sounds</h2>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Disable All Notification Sounds</div>
                      <div className="text-gray-400 text-sm">Mute all alert sounds instantly</div>
                    </div>
                    <button
                      onClick={() => setMuteAll((v) => !v)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                        muteAll ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${
                          muteAll ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
            )}
            {activeTab === "Privacy & Security" && (
              <div className="bg-white rounded-xl my-5 shadow p-8">
                <h2 className="text-lg font-bold mb-6 text-black">Account Details</h2>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Update Password</div>
                      <div className="text-gray-400 text-sm">Change your password to update & protect your Account</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm text-[#02402D] font-semibold">Change Password</div>
                        <div><IoIosArrowForward /> </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Privacy & Security" && (
              <div className="bg-white rounded-xl my-5 shadow p-8">
               <h2 className="text-lg font-bold mb-6 text-black">Two-factor Authentication</h2>
               <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Enable Authentication</div>
                      <div className="text-gray-400 text-sm">Mute all alert sounds instantly</div>
                    </div>
                    <button
                      onClick={() => setMuteAll((v) => !v)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                        muteAll ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ${
                          muteAll ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}