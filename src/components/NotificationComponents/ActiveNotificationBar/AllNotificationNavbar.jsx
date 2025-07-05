import React, { useState } from "react";

export default function AllNotificationNavbar() {
  const [activeLabel, setActiveLabel] = useState("All");
  const labels = ["All", "New", "Read", "Unread"];
  return (
    <div>
      {/* Notification count - visible on medium screens and above */}
      <p className="pb-5 text-veryDark-gray  md:block font-[400] text-[16px] leading-[100%]">
        You have 2 unread notifications
      </p>

      {/* Filter and Action Buttons */}
      <div className="lg:flex lg:justify-between lg:items-center bg-white lg:p-4 mb-8 ">
        {/* Filter Buttons */}
        <div className="flex justify-between lg:gap-5 p-1">
          {labels.map((label) => (
            <button
              key={label}
              onClick={() => setActiveLabel(label)}
              className={`p-2 rounded-md cursor-pointer ${
                activeLabel === label
                  ? "bg-mint-green text-black"
                  : "text-mid-gray"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mark All as Read Button (only on md and up) */}
        <button className="bg-deep-green text-white h-10 px-4 text-sm font-medium rounded hidden lg:block">
          Mark all as read
        </button>
      </div>
    </div>
  );
}
