import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { MdLocationSearching } from "react-icons/md";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const AgriconHome = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  
  return (
    <section className=" w-screen h-full bg-[#F9FAFB] pt-2 sm:pt-10">
      <nav className="bg-[#F9FAFB] sticky top-0 z-2 w-8/10 sm:w-9/10 md:w-8/10 mx-auto flex justify-between items-center h-16">
        <div className="w-20 sm:w-auto flex items-center"><img src={assets.agriconLogo} /></div>
        <div>
          <ul className="hidden sm:flex gap-5 lg:gap-10 text-xs font-semibold items-center">
            <li className="hover:border-b-2 border-green-800 pb-1 text-[16px]">
              <Link to='/home'>Home</Link>
            </li>
            <li className="hover:border-b-2 border-green-800 pb-1 text-[16px]">
              <Link to='/about'>About Us</Link>
            </li>
            <li className="hover:border-b-2 border-green-800 pb-1 text-[16px]">
              <Link to='/solution'>Solution</Link>
            </li>
            <li className="hover:border-b-2 border-green-800 pb-1 text-[16px]">
              <Link to='/log-in'>Log In</Link>
            </li>
            <li className="bg-[#02402D] px-3 py-2 text-white text-[16px] rounded-sm">
              <Link to='/sign-up'>Sign Up</Link>
            </li>
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className="sm:hidden text-xl">
          {open ? <GiCancel/> : <FaBars />}
        </div>
      </nav>
      <main className="h-screen w-screen flex flex-col items-center mt-20 sm:mt-30">
        <h1 className="text-[30px] sm:text-5xl md:text-7xl text-center font-bold sm:leading-[70px] md:leading-[90px]">
          Are you Tired of <br />
          Post-Harvest Losses?
        </h1>
        <p className="my-2 max-w-9/10 md:max-w-150 text-center text-xs sm:text-[20px]">
          AgriCon connects farmers with cold rooms, dryers, and processing units
          to reduce post-harvest losses and increase profit.
        </p>
        <div className="flex gap-2 my-3">
          <input
            type="text"
            placeholder="Enter your location(e.g, Lagos, Abuja)"
            className="border border-[#eeeeee] bg-[white] text-sm sm:text-[16px] text-center px-2 w-40 sm:w-[300px] md:w-[430px] rounded-xs"
          />
          <button className="px-5 sm:w-[200px] md:w-[237px] sm:h-[56px] bg-[#02402D] text-white py-2 text-xs sm:text-md font-semibold rounded-sm flex items-center justify-center gap-[10px]">
            <MdLocationSearching className="size-[22px]"/> Find Facilities
          </button>
        </div>
        <div className={`${ open ?'fixed' : 'hidden'} sm:hidden left-0 top-5 h-screen w-full backdrop-filter backdrop-blur py-20 flex`}>
          <ul className={`bg-[#F9FAFB] w-40 h-full flex flex-col gap-5 items-center font-semibold text-[#222222]`}>
            <li className="active:border-b-2 active:text-green-800 pb-1">
              <a href="#">Home</a>
            </li>
            <li className="active:border-b-2 active:text-green-800 pb-1">
              <a href="#">About Us</a>
            </li>
            <li className="active:border-b-2 active:text-green-800 pb-1">
              <a href="#">Solution</a>
            </li>
            <li className="active:border-b-2 active:text-green-800 pb-1">
              <a href="#">Log In</a>
            </li>
            <li className="active:border-b-2 active:text-green-800 pb-1">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default AgriconHome;
