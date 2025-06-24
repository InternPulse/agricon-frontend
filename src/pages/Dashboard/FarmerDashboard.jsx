import SideBar from "../../components/Dashboard/sideBar";
import { assets } from "../../assets/assets";
import Welcome from "../../components/Dashboard/Welcome";
import Transaction from "../../components/Transaction";
import { FaBook, FaMillSign } from "react-icons/fa6";
import Header from "../../components/Dashboard/Header";
import { FaSolarPanel } from "react-icons/fa";
import Date from "../../components/Dashboard/Date";
import Discover from "../../components/Dashboard/Discover";
import Bookings from "../../components/Dashboard/Bookings";
import TotalFacilities from "../../components/Dashboard/TotalFacilities";
import CompleteProfile from "../../components/Dashboard/CompleteProfile";
import LevelUp from "../../components/Dashboard/LevelUp";
export default function FarmerDashboard({ role }) {
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
              <div className="greeting w-full xl:pr-10 flex justify-between items-center">
                <Welcome />
                <Date />
              </div>

              {/* Top Metric Cards & Discover Infrastructure */}
              <div className="flex w-full gap-5 justify-start flex-wrap xl:flex-nowrap mb-8">
                <Discover />
                <div className="w- overflow-x-scroll flex gap-2">
                  <Bookings />
                  <TotalFacilities />
                </div>
              </div>

              <Transaction
                title="Booking history"
                hvalue1="Price"
                hvalue2="Status"
                details={[
                  {
                    icon: <FaBook />,
                    size: true,
                    title: "Cold Room-Akure Hub",
                    date: "Jun 14th 2025",
                    price: "₦27.000",
                    status: "Completed",
                    id: "ZTWHT24FGNC",
                  },
                  {
                    icon: <FaSolarPanel />,
                    size: true,
                    title: "Solar Dryer-Wuse Zone 3",
                    date: "May 27th 2025",
                    price: "₦14.000",
                    status: "Pending",
                    id: "FONCQ24TWHT",
                  },
                  {
                    icon: <FaMillSign />,
                    size: true,
                    title: "Milling Unit-Kano",
                    date: "Feb 6th 2025",
                    price: "₦32.000",
                    status: "Failed",
                    id: "QWER24TPOCY",
                  },
                ]}
              />
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
