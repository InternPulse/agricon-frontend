import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function SearchBar() {
  return (
    <section className="bg-ice-blue py-4 px-4 lg:px-10 flex-col md:flex-row justify-between items-center gap-4 md:gap-2  shadow-sm w-full hidden md:flex">
      {/* Title */}
      <div className="w-full md:w-auto text-right md:text-left">
        <p className="text-charcoal-blue text-[18px] md:text-[20px] font-medium">
          Notifications
        </p>
      </div>

      {/* Search + Icons */}
      <div className="flex sm:flex-row lg:flex-row justify-between items-center gap-4  w-full md:w-auto">
        {/* Search Input */}
        <div className="flex items-center border border-mid-gray rounded-[8px] px-4 py-2 w-full sm:w-[300px] md:w-[100px] lg:w-[382px]">
          <img
            src={assets.searchIcon}
            alt="searchIcon"
            className="h-[20px] w-[20px]"
          />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none ml-2 w-full text-sm bg-transparent"
          />
        </div>

        {/* Notification + Profile */}
        <div className="flex  items-center gap-4 flex-wrap lg:flex-nowrap">
          <div className="bg-mint-green w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <Link to="/notification" className="cursor-pointer">
              <img src={assets.Notification} alt="notification" />
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <img
              src={assets.profilePics}
              alt="profilepics"
              className="cursor-pointer w-8 h-8"
            />
            <p className="text-dark text-[14px] sm:text-[16px] font-medium">
              Interns
            </p>
            <button className="cursor-pointer">
              <img
                src={assets.arrowDown}
                alt="arrowDown"
                className="w-[10px] h-[5px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
