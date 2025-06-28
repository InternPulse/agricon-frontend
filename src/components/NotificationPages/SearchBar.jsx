import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function SearchBar() {
  return (
    <section className="bg-[#F7F9FC] h-[80px] pt-[16px] pl-[40px] pr-[40px] pb-[16px] flex justify-between shadow-sm">
      <div>
        <p className="text-[#344054] text-[20px] font-[500]">Notifications</p>
      </div>
      <div className="flex gap-10">
        <div className="border border-[#8B8B8B] rounded-[8px] gap-[8px] w-[382px] flex items-center h-[40px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] ">
          <img
            src={assets.searchIcon}
            alt="searchIcon"
            className="h-[22px] w-[22px] text-[#8B8B8B] text-[14px] font-[400]"
          />
          <input type="text" placeholder="Search here" className="outline-0" />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#D5F0E8] w-[40px] h-[40px] flex  items-center rounded-full justify-center">
            <Link to="/notification" className="cursor-pointer">
              <img src={assets.Notification} alt="notification" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={assets.profilePics}
              alt="profilepics"
              className="cursor-pointer"
            />

            <p className="text-[#000000] text-[16px] leading-[24px] font-[500]">
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
