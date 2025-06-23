import SideBar from "../../components/Dashboard/sideBar";
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
import { Link } from "react-router-dom";

const PIE_DATA = [
  { name: "Total Earmings", value: 40, color: "#10B981" }, // Green
  { name: "Saved Produce", value: 27, color: "#FACC15" }, // Yellow
  { name: "Bookings", value: 33, color: "#3B82F6" }, // Blue (Adjusted to total 100 with 40+27)
];
const COLORS_PIE = ["#10B981", "#FACC15", "#3B82F6"];

export default function Dashboard({ role }) {
  const recentBookings = [
    {
      img: "assets.bookings.chinoso",
      name: "Chinoso Okafor",
      email: "nonso@gmail.com",
      price: 8500,
      location: "Ibadan",
    },
    {
      img: "assets.bookings.chinoso",
      name: "Tunde Adebayo",
      email: "tunde.adebayo@gmail.com",
      price: 7900,
      location: "Enugu",
    },
    {
      img: "assets.bookings.chinoso",
      name: "Adaobi Nwosu",
      email: "a.nwoankwo@gmail.com",
      price: 6750,
      location: "Abuja",
    },
    {
      img: "assets.bookings.chinoso",
      name: "Emeka Ibe",
      email: "emeka.ibe@gmail.com",
      price: 5600,
      location: "Lagos",
    },
  ];
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

                <div className="bottom w-full flex flex-col gap-[27px]">
                  {/*Stats */}
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
                  <div className="flex gap-10">
                    <div className="left w-[715px] flex flex-col gap-8">
                      {/*Expense Report */}
                      <div className="expense border border-[#D0D5DD] rounded-xl w-full min-h-[294px] flex flex-col gap-3">
                        <div className="head flex justify-between items-center p-4">
                          <h2 className="font-semibold text-[#333333]">
                            Expense Report
                          </h2>
                          <div className="text-xs font-semibold text-[#6b6b6b] space-x-4">
                            <button className="border border-[#cccccc] rounded h-6 px-2 text-xs">
                              6 months
                            </button>
                            <button>3 months</button>
                            <button>30 Days</button>
                            <button>7 Days</button>
                          </div>
                          <button className="border border-[#cccccc] rounded h-6 px-2 text-[10px] font-semibold">
                            Export PDF
                          </button>
                        </div>
                        <div className="chart">Chart...</div>
                      </div>
                      <Transaction
                        title="Transactions"
                        hvalue1=""
                        hvalue2="See all..."
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
                    <div className="right flex flex-col gap-8">
                      <div className="one flex flex-col justify-between bg-[#02402D] rounded-xl min-h-[294px] p-5 text-white/80">
                        <div className="flex justify-between ">
                          <div className="w-full">
                            <h2 className="font-medium">Last 30 Days</h2>
                          </div>
                          <div>
                            <button className="text-xs w-20 font-medium border rounded-full self-end">
                              View all
                            </button>
                          </div>
                          <div></div>
                        </div>
                        <div className="flex gap-5">
                          <FaBuilding fill="orange" size={60} />
                          <div>
                            <h1 className="text-3xl font-semibold text-white">
                              98
                            </h1>
                            <p>Storage Facilities</p>
                          </div>
                        </div>
                        <div className="box bg-white flex justify-between gap-5  py-2 px-4 text-black rounded-lg w-full">
                          <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold">8</p>
                            <p className="text-xs text-gray-600">Vacant</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold">64</p>
                            <p className="text-xs text-gray-600">Occupied</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold">26</p>
                            <p className="text-xs text-gray-600">Unlisted</p>
                          </div>
                        </div>
                      </div>
                      <div className="two p-5 border border-[#D0D5DD] space-y-5 rounded-xl ">
                        <div>
                          <h1 className="font-semibold text-lg">
                            Recent Bookings
                          </h1>
                          <p className="text-sm text-gray-700 font-medium">
                            Hurray! check out farmers who booked your facility
                          </p>
                        </div>
                        <div className="space-y-2">
                          {recentBookings.map((person, i) => (
                            <div className="flex gap-2 items-center">
                              <div>
                                <img src={person.img} alt="" />
                              </div>
                              <div className="flex w-full justify-between items-center">
                                <div>
                                  <p className="font-semibold text-md">
                                    {person.name}
                                  </p>
                                  <p className="text-gray-600 text-md">
                                    {person.email}
                                  </p>
                                </div>
                                <div>
                                  <p className="font-semibold text-md">
                                    ${person.price}
                                  </p>
                                  <p className="text-gray-600 text-md">
                                    {person.location}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div><Link>See all Bookings</Link></div>
                      </div>
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
