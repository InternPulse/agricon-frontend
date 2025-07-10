// import SideBar from "../../components/Dashboard/sideBar";
import { assets } from "../../assets/assets";
import Welcome from "../../components/Dashboard/Welcome";
import Transaction from "../../components/Transaction";
import { FaBook, FaMillSign } from "react-icons/fa6";
import { FaSolarPanel } from "react-icons/fa";
import Date from "../../components/Dashboard/Date";
import Discover from "../../components/Dashboard/Discover";
import Bookings from "../../components/Dashboard/Bookings";
import TotalFacilities from "../../components/Dashboard/TotalFacilities";
import CompleteProfile from "../../components/Dashboard/CompleteProfile";
import LevelUp from "../../components/Dashboard/LevelUp";
import FarmerBookings from "../../components/Dashboard/FarmerBookings";

export default function FarmerDashboard() {
  
  return (
    <div
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      
      <main
        className={`${open ? 'flex' : 'flex'} flex-1 flex-col bg-white overflow-x-hidden`}
        style={{ scrollbarWidth: "none" }}
      >

        <section className="flex flex-wrap md:flex-nowrap">
          <div className="firstt px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD] w-full">
            <div className="container flex flex-col gap-6">
              <div className="greeting w-full xl:pr-10 flex justify-between items-center">
                <Welcome/>
                <Date />
              </div>
              

              <div className="flex w-full gap-5 justify-start flex-wrap xl:flex-nowrap mb-8">
                <Discover />
                <div className="w- overflow-x-scroll flex gap-2">
                  <Bookings />
                  <TotalFacilities />
                </div>
              </div>

              <FarmerBookings/>
              <Transaction
                title="Facilities"
                hvalue1="Category"
                hvalue2="Payment type"
                details={[
                  {
                    img: assets.stanley,
                    name: "Stanley Benson",
                    facility: "Cold Room",
                    payment: "Wallet",
                  },
                  {
                    img: assets.Ladicia,
                    name: "Ladicia Godspower",
                    facility: "Solar Dryer",
                    payment: "Bank Transfer",
                  },
                  {
                    img: assets.kingsley,
                    name: "Kingsley Okoro",
                    facility: "Milling Unit",
                    payment: "Card",
                  },
                  {
                    img: assets.kingsley,
                    name: "Kingsley Okoro",
                    facility: "Milling Unit",
                    payment: "Card",
                  },
                ]}
              />
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