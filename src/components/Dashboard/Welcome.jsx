import React from "react";
import { PiHandWavingFill } from "react-icons/pi";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="text-md sm:text-lg xl:text-[24px] font-semibold text-gray-900 mb-1 sm:mb-2 flex items-center gap-1">
        Welcome back,
        <PiHandWavingFill fill="#e49c00" />
      </h1>
      <p className="text-[#344054] text-[12px] sm:text-sm">
        Your farm facility , tracked with clarity .
      </p>
    </div>
  );
};

export default Welcome;
