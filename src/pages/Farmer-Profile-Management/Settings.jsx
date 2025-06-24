import React, { useState } from "react";
// import SideBar from "../../components/sideBar";
import { HiBell } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../../components/Dashboard/Header";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [desktop, setDesktop] = useState(true);
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const [muteAll, setMuteAll] = useState(false);

  
  const tabs = ["Profile", "Notifications", "Privacy & Security"];

  return (
    <div className="flex items-center w-full min-h-screen border">
      {/* <SideBar /> */}
      <div className="w-full">
        {/* Top Header */}
        <Header />

        {/* Tabs & Content Wrapper */}
        <div className="px-10 pb-10 pt-4 bg-[#f7f9fa] min-h-screen">
          <div className="w-full">
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
              <div className="bg-white rounded-xl shadow p-8">
                <h2 className="text-lg font-semibold mb-6 text-gray-800">Personal details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Full name</label>
                    <div className="text-base text-gray-900 font-medium">Yings Alex Ayoola</div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Email address</label>
                    <div className="text-base text-gray-900 font-medium">Yings.alex.ayoola@gmail.com</div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Phone number</label>
                    <div className="text-base text-gray-900 font-medium">080123456789</div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Farm Address</label>
                    <div className="text-base text-gray-900 font-medium">Mahanttan freeway, Lagos</div>
                  </div>
                </div>
              </div>
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
                      <div className="font-medium text-md text-black">Verify Email Adress</div>
                      <div className="text-gray-400 text-sm">Stay notified in real time on your Dnesktop</div>
                    </div>
                    <Link to="#">
                      <div className="flex items-center gap-2">
                        <div className="text-sm text-[#02402D] font-semibold">Verify Email</div>
                        <div><IoIosArrowForward /></div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Update Password</div>
                      <div className="text-gray-400 text-sm">Change your password to update & protect your Account</div>
                    </div>
                    <Link to="/user/settings/change-password">
                      <div className="flex items-center">
                          <div className="text-sm text-[#02402D] font-semibold">Change Password</div>
                          <div><IoIosArrowForward /> </div>
                      </div>
                    </Link>
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