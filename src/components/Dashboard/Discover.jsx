import { Link } from "react-router-dom";
import React from "react";
import { FaBuilding, FaChevronRight } from "react-icons/fa6";

const Discover = () => {
  return (
    <div className="w-full bg-[#02402D] h-[182px] text-white rounded-lg flex justify-center items-center">
      <div className="container p-5">
        <div className="top space-y-5">
          <div className="flex gap-8 items-center">
            <FaBuilding className="w-6 h-6 text-white" />
            <h2 className="text-xl font-semibold">
              Discover
              <br className="hidden"/> {" "}
              Infrastructures
            </h2>
          </div>
          <p className="text-[12px] text-[#E4E7EC] mb-4">
            Find trusted cold rooms, dryers, and processors near you
          </p>
        </div>
        <div className="w-full ">
          <Link
            to='/farmer/facility'
            className="flex py-2 rounded-md items-center justify-center bg-white text-[#02402D] font-semibold">
            Discover
            <FaChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
