import React from "react";
import { assets } from "../../../assets/assets";

export default function NoNotification() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center space-y-6">
      {/* Image */}
      <img src={assets.image} alt="No notifications" className="w-[220px] md:w-auto" />

      {/* Text content */}
      <div className="space-y-2 max-w-md">
        <h1 className="text-lg md:text-xl font-bold leading-[36px]">
          No notifications yet!
        </h1>
        <p className="text-sm md:text-lg text-dark-gray-tone leading-[24px] tracking-tight">
          You don’t have any notifications at this moment. Please check back again.
        </p>
      </div>
    </div>
  );
}
