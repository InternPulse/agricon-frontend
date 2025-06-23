// import SideBar from "../../components/Dashboard/sideBar";
import { assets } from "../../assets/assets";
import Welcome from "../../components/Dashboard/Welcome";
import Transaction from "../../components/Transaction";
import {
  FaBook,
  FaBuilding,
  FaChevronDown,
  FaChevronRight,
  FaMillSign,
} from "react-icons/fa6";
import Header from "../../components/Dashboard/Header";
import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from "lucide-react";
import { PiCalendarCheck, PiCalendarCheckBold } from "react-icons/pi";
import { TbDots } from "react-icons/tb";
import { FaSolarPanel } from "react-icons/fa";
import { LuWarehouse } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import Donut from "../../components/Dashboard/Donut";
import Date from "../../components/Dashboard/Date";
import Discover from "../../components/Dashboard/Discover";
import Bookings from "../../components/Dashboard/Bookings";
import TotalFacilities from "../../components/Dashboard/TotalFacilities";
import CompleteProfile from "../../components/Dashboard/CompleteProfile";
import LevelUp from "../../components/Dashboard/LevelUp";

const PIE_DATA = [
  { name: "Total Earmings", value: 40, color: "#10B981" }, // Green
  { name: "Saved Produce", value: 27, color: "#FACC15" }, // Yellow
  { name: "Bookings", value: 33, color: "#3B82F6" }, // Blue (Adjusted to total 100 with 40+27)
];
const COLORS_PIE = ["#10B981", "#FACC15", "#3B82F6"];

export default function Dashboard({ role }) {
  return (
    <div
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      {/* <SideBar role={role} /> */}
      <main
        className=" flex-1 flex flex-col bg-white overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <Header role={role} />
        {role === "Farmer" ? (
          <section className="flex flex-wrap md:flex-nowrap">
            <div className="firstt px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD] w-full">
              <div className="container flex flex-col gap-6">
                <div className="greeting w-full xl:pr-10 flex justify-between items-center">
                  <Welcome />
                  <Date />
                </div>

                {/* Top Metric Cards & Discover Infrastructure */}
                <div className="flex w-full gap-5 justify-start flex-wrap mb-8">
                  <Discover />
                  <Bookings />
                  <TotalFacilities />
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
        ) : role === "Facility Owner" ? (
          <section className="flex flex-wrap md:flex-nowrap">
            <div className="firstt px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD] w-full">
              <div className="container flex flex-col gap-6">
                <div className="greeting w-full flex justify-between items-center">
                  <Welcome />
                  <Date />
                </div>

                <div className="stats flex flex-wrap gap-2">
                  <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-19/20 min-w-50">
                    <div className="text-[#667185] text-[12px]">
                      TODAY'S EARNINGS
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[24px] font-bold">0</p>
                      <p className="text-[12px] text-[#22C55E] flex items-center font-semibold">
                        + 36%{" "}
                        <span>
                          <ArrowUp className="w-[12px]" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-19/20 min-w-50">
                    <div className="text-[#667185] text-[12px]">
                      TOTAL EARNED
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[24px] font-bold">0</p>
                      <p className="text-[12px] text-[#EF4444] flex items-center font-semibold">
                        - 14%{" "}
                        <span>
                          <ArrowDown className="w-[12px]" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-19/20 min-w-50">
                    <div className="text-[#667185] text-[12px]">
                      TOTAL BOOKED
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[24px] font-bold">0</p>
                      <p className="text-[12px] text-[#22C55E] flex items-center font-semibold">
                        + 36%{" "}
                        <span>
                          <ArrowUp className="w-[12px]" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-19/20 min-w-50 md:max-w-70">
                    <div className="text-[#667185] text-[12px]">
                      TOTAL BOOKING
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[24px] font-bold">0</p>
                      <p className="text-[12px] text-[#22C55E] flex items-center font-semibold">
                        + 25%{" "}
                        <span>
                          <ArrowUp className="w-[12px]" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Revenue Chart & Sales Report */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Revenue
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ₦87.500
                    </span>
                    <div className="flex items-center text-green-600 text-sm font-semibold">
                      <span className="mr-1">Up 42 %</span>
                      <span className="text-gray-500">Month-over-month</span>
                    </div>
                  </div>
                  <div className="h-64 w-full">
                    
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={REVENUE_DATA}
                        margin={{ top: 5, right: 0, left: -20, bottom: 5 }} // Adjust margins to fit
                      >
                        <XAxis
                          dataKey="name"
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 12, fill: "#6B7280" }}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 12, fill: "#6B7280" }}
                          tickFormatter={(value) =>
                            `₦${value.toLocaleString()}`
                          }
                        />
                        <Tooltip content={<CustomLineChartTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#04D957"
                          strokeWidth={3}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-around text-xs text-gray-600 mt-4">
                  </div>
                </div>

                //Sales Report
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Sales report
                  </h2>
                  <div className="space-y-4 mb-6">
                    //Produce Processed
                    <div>
                      <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>Produce Processed</span>
                        <span>(124)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{ width: `${(124 / 400) * 100}%` }}
                        ></div>{" "}
                        //Scaled width
                      </div>
                    </div>
                    //Ongoing Project
                    <div>
                      <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>Ongoing Project</span>
                        <span>(32)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full"
                          style={{ width: `${(32 / 400) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    //Produce Sold
                    <div>
                      <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>Produce Sold</span>
                        <span>(315)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-purple-500 h-2.5 rounded-full"
                          style={{ width: `${(315 / 400) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-4">
                      <span className="font-semibold mr-1">Net sales</span>
                      <span className="text-green-600">
                        Up 42 % Month-over-manth
                      </span>
                    </div>
                  </div>
                  //Horizontal scale 
                  <div className="flex justify-between text-xs text-gray-500 mt-6 pt-2 border-t border-gray-200">
                    <span>0</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                    <span>400</span>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}