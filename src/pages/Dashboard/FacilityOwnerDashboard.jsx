import SideBar from "../../components/Dashboard/sideBar";
import { assets } from "../../assets/assets";
import Welcome from "../../components/Dashboard/Welcome";
import { FaBuilding } from "react-icons/fa6";
import Header from "../../components/Dashboard/Header";
import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import Date from "../../components/Dashboard/Date";
import { Link } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import Stats from "../../components/Dashboard/Stats";
import FacilityTransaction from "../../components/Dashboard/FacilityTransaction";
import StorageFacilities from "../../components/Dashboard/StorageFacilities";
import RecentBookings from "../../components/Dashboard/RecentBookings";

export default function FacilityOwnerDashboard({ role }) {
  return (
    <div
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      <SideBar role={role} />
      <main
        className=" flex-1 flex flex-col bg-white overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <Header role={role} />
        <section className="flex flex-wrap md:flex-nowrap">
          <div className="firstt px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD] w-full">
            <div className="container flex flex-col gap-6">
              <div className="greeting w-full flex justify-between items-center">
                <Welcome />
                <Date />
              </div>
              <div className="bottom w-full flex flex-col gap-[27px]">
                <Stats />
                <div className="flex flex-wrap xl:flex-nowrap gap-[27px]">
                  <div className="left h-full w-full w-[715px] flex flex-col gap-8">
                    <FacilityTransaction />
                  </div>
                  <div className="right w-full xl:w-[354px] flex flex-wrap md:flex-nowrap xl:flex-col gap-4">
                    <StorageFacilities />
                    <RecentBookings />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
