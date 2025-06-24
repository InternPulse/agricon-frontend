import React from "react";
import { FaBuilding, FaChevronRight } from "react-icons/fa6";

const Discover = () => {
  return (
    <div className="wrapper min-w-55 flex-1 bg-[#02402D] w-[226px] h-[182px] text-white rounded-[12px] flex justify-center items-center">
      <div className="container w-[194px]">
        <div className="top space-y-2">
          <div className="first flex gap-[6px] items-start">
            <FaBuilding className="w-6 h-6 text-white" />
            <h2 className="text-[14px] font-semibold">
              Discover
              <br />
              Infrastructures
            </h2>
          </div>
          <p className="second text-[12px] text-[#E4E7EC] mb-4">
            Find trusted cold rooms , dryers , and processors near you
          </p>
        </div>
        <div className="bottom w-full flex flex-col">
          <button className="flex h-[36px]  rounded-[8px] items-center justify-center bg-white text-[#02402D] hover:text-gray-100 transition text-base font-semibold">
            <span className="text-[14px]">Discover</span>
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
