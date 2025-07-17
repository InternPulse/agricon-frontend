import React  from 'react';
import Welcome from "../../components/Dashboard/Welcome";
import { FaBook, FaMillSign } from "react-icons/fa6"; 
import { FaSolarPanel } from "react-icons/fa";
import Date from "../../components/Dashboard/Date";
import Discover from "../../components/Dashboard/Discover";
import Bookings from "../../components/Dashboard/Bookings";
import TotalFacilities from "../../components/Dashboard/TotalFacilities";
import CompleteProfile from "../../components/Dashboard/CompleteProfile";
import LevelUp from "../../components/Dashboard/LevelUp";
import FarmerBookings from "../../components/Dashboard/FarmerBookings";
import FacilityProvider from '../../components/infrastructure/FacilityContext';
import Transaction from '../../components/Dashboard/Transaction';

export default function FarmerDashboard() {
  const open = true;

  return (
    <div
      className="flex min-h-screen bg-gray-100 font-sans mt-18"
    >
      <main
        className={`${open ? 'flex' : 'flex'} flex-1 flex-col bg-white overflow-x-hidden`}
      >
        <section className="flex flex-wrap md:flex-nowrap">
          <div className="px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD] w-full">
            <div className=" flex flex-col gap-6">
              <div className="greeting w-full xl:pr-10 flex justify-between items-center">
                <Welcome />
                <Date />
              </div>

              <div className="flex items-center justify-between flex-wrap w-full gap-5 mb-8 px-5 sm:px-0">
                <Discover />
                  <FacilityProvider>
                    <Bookings />
                    <TotalFacilities />
                  </FacilityProvider>
              </div>

              <FarmerBookings />
              <Transaction/>
            </div>
          </div>
          <div className="secondd px-4 md:w-[350px] py-8 flex flex-wrap items-start gap-5">
            <CompleteProfile />
            <LevelUp />
          </div>
        </section>
      </main>
    </div>
  );
}