import React, { useState } from "react";
import { useEffect } from "react";
import { HiBell } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import UserDropdown from "../../components/Farmer-Profile-Management/userDropdown";

// 🔍 Settings Search Component
const SettingsSearch = ({ search, setSearch }) => {
  const settingsList = [
    { label: "Profile", path: "#profile" },
    { label: "Notification", path: "#notifications" },
    { label: "Privacy & Security", path: "#privacy" },
    { label: "Enable Desktop Notification", path: "#notifications" },
    { label: "Enable Email Alert", path: "#notifications" },
    { label: "Disable All Notification Sounds", path: "#notifications" },
    { label: "Update Password", path: "#privacy" },
    { label: "Change Password", path: "#privacy" },
  ];

  const filteredSettings = settingsList.filter(setting =>
    setting.label.toLowerCase().includes(search.toLowerCase())
  );

  if (!search) return null;

  return (
    <ul className="absolute top-full mt-2 bg-white border border-gray-300 rounded shadow-md w-full z-10">
      {filteredSettings.length > 0 ? (
        filteredSettings.map((setting, index) => (
          <li key={index}>
            <a
              href={setting.path}
              onClick={() => {
                setSearch("");
                window.location.hash = setting.path; // Force update
              }}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              {setting.label}
            </a>
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-sm text-gray-500">No matching settings found.</li>
      )}
    </ul>
  );
};


export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [desktop, setDesktop] = useState(true);
  // const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);
  const [muteAll, setMuteAll] = useState(false);
  // const [authentication, setAuthentication] = useState(false);

  const tabs = ["Profile", "Notifications", "Privacy & Security"];

  useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const section = hash.replace("#", "");

    if (section === "profile") {
      setActiveTab("Profile");
    } else if (section === "notifications") {
      setActiveTab("Notifications");
    } else if (section === "privacy") {
      setActiveTab("Privacy & Security");
    }

    // Delay scroll to give React time to render the tab content
    setTimeout(() => {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  }
}, []);

  const farmerDetailsString = localStorage.getItem("farmerProfile")
  const farmerEmail = localStorage.getItem("email")
  const farmerDetails = farmerDetailsString ? JSON.parse(farmerDetailsString) : null;
  const { firstName, address, lastName, phone } = farmerDetails || 'N/A'
 



  return (
    <div className="flex min-h-screen bg-[#f7f9fa]">
      <div className="flex-1">
        {/* Top Header */}
        {/* <div className="flex items-center justify-between bg-[#f5f8fa] px-10 py-6 border-b border-blue-200 relative">
          <h1 className="text-2xl font-semibold text-gray-700">Account Settings</h1>
          <div className="flex items-center gap-4 w-full max-w-md relative">
            <div className="relative w-full">
              <input
                type="serach"
                placeholder="Search settings"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none w-full"
              />
              <SettingsSearch search={search} setSearch={setSearch} />

            </div>

            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full bg-[#D5F0E8] flex justify-center items-center">
                <HiBell className="text-[#047D58]" />
              </div>
              <img src="user-avatar.jpg" alt="User" className="w-8 h-8 rounded-full border" />
              <span className="text-sm font-medium text-gray-700">Interns</span>
              <UserDropdown />
            </div>
          </div>
        </div> */}

        {/* Tabs & Content Wrapper */}
        <div className="px-10 pb-10 pt-4 bg-[#f7f9fa] min-h-screen">
          <div className="w-full">
            {/* Tabs */}
            <div className="bg-white py-3 mb-4 rounded-lg">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`ms-4 px-6 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-[#e6f4ea] text-green-700 font-semibold"
                        : "bg-transparent text-gray-500 hover:text-green-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* --- Tab Content --- */}
            {activeTab === "Profile" && (
              <div id="profile" className="bg-white rounded-xl shadow p-8">
                <h2 className="text-lg font-semibold mb-6 text-gray-800">Personal details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Full name</label>
                    <div className="text-base text-gray-900 font-medium">{firstName + lastName}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Email address</label>
                    <div className="text-base text-gray-900 font-medium">{farmerEmail}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Phone number</label>
                    <div className="text-base text-gray-900 font-medium">{phone}</div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-500 mb-1">Farm Address</label>
                    <div className="text-base text-gray-900 font-medium">{address}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Notifications" && (
              <>
                <div id="notifications" className="bg-white rounded-xl shadow p-8">
                  <h2 className="text-lg font-semibold mb-6 text-black">Notifications</h2>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="font-medium text-md text-black">Enable Desktop Notification</div>
                        <div className="text-gray-400 text-sm">Stay notified in real time on your Desktop</div>
                      </div>
                      <button
                        onClick={() => setDesktop(!desktop)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 ${
                          desktop ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`bg-white w-5 h-5 rounded-full shadow transform ${
                            desktop ? "translate-x-6" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="font-medium text-md text-black">Enable Email Alert</div>
                        <div className="text-gray-400 text-sm">Get updates delivered to your inbox</div>
                      </div>
                      <button
                        onClick={() => setEmail(!email)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 ${
                          email ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`bg-white w-5 h-5 rounded-full shadow transform ${
                            email ? "translate-x-6" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl my-5 shadow p-8">
                  <h2 className="text-xl font-semibold mb-6 text-black">Sounds</h2>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="font-medium text-md text-black">Disable All Notification Sounds</div>
                      <div className="text-gray-400 text-sm">Mute all alert sounds instantly</div>
                    </div>
                    <button
                      onClick={() => setMuteAll(!muteAll)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 ${
                        muteAll ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`bg-white w-5 h-5 rounded-full shadow transform ${
                          muteAll ? "translate-x-6" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === "Privacy & Security" && (
              <>
                <div id="privacy" className="bg-white rounded-xl my-5 shadow p-8">
                  <h2 className="text-lg font-bold mb-6 text-black">Account Details</h2>
                  <div className="space-y-8">
                    {/* <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="font-medium text-md text-black">Verify Email Address</div>
                        <div className="text-gray-400 text-sm">Ensure your email is verified</div>
                      </div>
                      <Link to="#">
                        <div className="flex items-center gap-2 text-sm text-[#02402D] font-semibold">
                          Verify Email <IoIosArrowForward />
                        </div>
                      </Link>
                    </div> */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="font-medium text-md text-black">Update Password</div>
                        <div className="text-gray-400 text-sm">Change your password</div>
                      </div>
                      <Link to="change-password">
                        <div className="flex items-center gap-2 text-sm text-[#02402D] font-semibold">
                          Change Password <IoIosArrowForward />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
