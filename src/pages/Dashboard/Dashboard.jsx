// import SideBar from "../../components/Dashboard/sideBar";
import TotalViewPerformanceCard from "../../components/Dashboard/Performance";
// import { assets } from "../../assets/assets";

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Transaction from "../../components/Transaction";
import { FaBook } from "react-icons/fa6";
import Header from "../../components/Dashboard/Header";

const ChevronDownIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const InfrastructureIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h6m-6 4h6m-6 4h6"
    ></path>
  </svg>
);
const CalendarIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);
const BarChartIcon = (
  props // Used for "Level up your strategy" section
) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    ></path>
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);

// --- Dummy Data for Charts ---
// Pie Chart Data (Total view performance)
const PIE_DATA = [
  { name: "Total Earmings", value: 40, color: "#10B981" }, // Green
  { name: "Saved Produce", value: 27, color: "#FACC15" }, // Yellow
  { name: "Bookings", value: 33, color: "#3B82F6" }, // Blue (Adjusted to total 100 with 40+27)
];
const COLORS_PIE = ["#10B981", "#FACC15", "#3B82F6"]; // Corresponding colors

// Line Chart Data (Revenue) - Adjusted to visually match the image's trend
const REVENUE_DATA = [
  { name: "Jun", value: 70000 },
  { name: "Jul", value: 75000 },
  { name: "Aug", value: 72000 },
  { name: "Sept", value: 80000 },
  { name: "Oct", value: 87500 },
];

// Custom Tooltip for Recharts Line Chart
const CustomLineChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-md shadow-sm text-sm">
        <p className="font-semibold text-gray-800 mb-1">{`Month: ${label}`}</p>
        <p className="text-green-600">{`Revenue : ₦${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

// Custom Tooltip for Recharts Pie Chart (if needed, though legend often suffices)
const CustomPieChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-md shadow-sm text-sm">
        <p className="font-semibold text-gray-800 mb-1">{`${payload[0].name}`}</p>
        <p className="text-gray-700">{`Value: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

// --- Main Dashboard Component ---
export default function Dashboard() {
  return (
    <div
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      {/* Sideba */}
      {/* <SideBar /> */}

      {/* Main Content Area */}
      <div
        className=" flex-1 flex flex-col bg-white overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <Header/>

        <section className="flex flex-wrap md:flex-nowrap w-full">
          <div className="firstt px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD]">
            <div className="main flex flex-col gap-6">
              {/* Welcome Section */}
              <div className="w-full xl:pr-10 flex justify-between items-center">
                <div className="welcome">
                  <h1 className="text-lg xl:text-[24px] font-semibold text-gray-900 mb-2">
                    Welcome back,👋
                  </h1>
                  <p className="text-gray-600 text-sm xl:text-[16px]">
                    Your farm facility , tracked with clarity .
                  </p>
                </div>
                <div className="date w-[232px] flex items-center h-10 text-gray-700 px-3 py-2 rounded-full border border-gray-200">
                  <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="font-medium text-sm">
                    Jun 2025 - July 2025
                  </span>
                  <ChevronDownIcon className="w-4 h-4 ml-1 cursor-pointer text-gray-500" />
                </div>
              </div>

              {/* Top Metric Cards & Discover Infrastructure */}
              <div className="flex justify-around space-y-5 flex-wrap mb-8 space-x-5">
                {/* Discover Infrastructures Card */}
                <div className="wrapper bg-[#02402D] w-[226px] h-[182px] text-white rounded-[12px] flex justify-center items-center">
                  <div className="container w-[194px]">
                    <div className="top space-y-2">
                      <div className="first flex gap-[6px] items-start">
                        <InfrastructureIcon className="w-6 h-6 text-white" />
                        <h2 className="text-[14px] font-semibold">
                          Discover
                          <br />
                          Infrastructures
                        </h2>
                      </div>
                      <p className="second text-[12px] text-[#E4E7EC] mb-4">
                        Find trusted cold rooms , dryers , and processors near
                        you
                      </p>
                    </div>
                    <div className="bottom w-full flex flex-col">
                      <button className="flex h-[36px]  rounded-[8px] items-center justify-center bg-white text-[#02402D] hover:text-gray-100 transition text-base font-semibold">
                        <span className="text-[14px]">Discover</span>
                        <ChevronRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Total Bookings Card */}
                <div className="self-start bg-white w-[226px] h-[182px] p-6 rounded-xl border border-[#D0D5DD] flex flex-col justify-between">
                  <div className="container space-y-[32px] w-[194px] h-[134px]">
                    <div className="top flex flex-col h-[82px] w-full gap-[24px]">
                      <div className="h-[24px] w-full flex justify-between ">
                        <h3 className="text-[14px] font-medium text-gray-700 mb-2">
                          Total Bookings
                        </h3>
                      </div>
                      <div className="flex justify-between items-center mb-4 h-[34px] w-[137px]">
                        <div className="gap-[6px] flex items-baseline">
                          <span className="text-[28px] font-bold text-gray-900">
                            12
                          </span>
                          <i className="text-[14px] font-normal text-[#667185]">
                            reservations
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="bottom  h-[20px] text-[12px] flex items-center">
                      <span className="font-semibold text-green-600 mr-1">
                        Up 42%
                      </span>
                      <span>Month-over-month</span>
                    </div>
                  </div>
                </div>

                {/* Net Revenue Card */}
                <div className="bg-white w-[226px] h-[182px] p-6 rounded-xl border border-[#D0D5DD] flex flex-col justify-between">
                  <div className="container space-y-[32px] w-[194px] h-[134px]">
                    <div className="top flex flex-col h-[82px] w-full gap-[24px]">
                      <div className="h-[24px] w-full flex justify-between ">
                        <h3 className="text-[14px] font-medium text-gray-700 mb-2">
                          Net Revenue
                        </h3>
                      </div>
                      <div className="flex justify-between items-center mb-4 h-[34px] w-[137px]">
                        <div className="gap-[6px] flex items-baseline">
                          <span className="text-[28px] font-bold text-gray-900">
                            $87.500
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bottom  h-[20px] text-[12px] flex items-center">
                      <span className="font-semibold text-red-600 mr-1">
                        Down 17%
                      </span>
                      <span>Month-over-month</span>
                    </div>
                  </div>
                </div>
              </div>

              <Transaction
                title="Booking history"
                hvalue1="Price"
                hvalue2="Staus"
                details={[
                  {
                    img: <FaBook/>,
                    size: true,
                    title: "Cold Room-Akure Hub",
                    date: "Jun 14th 2025",
                    price: "₦27.000",
                    status: "Completed",
                    id: "ZTWHT24FGNC",
                  },
                  {
                    img: '',
                    size: true,
                    title: "Solar Dryer-Wuse Zone 3",
                    date: "May 27th 2025",
                    price: "₦14.000",
                    status: "Pending",
                    id: "FONCQ24TWHT",
                  },
                  {
                    img: '',
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
                hvalue1="Facility"
                hvalue2="Payment type"
                details={[
                  {
                    img: '',
                    name: "Stanley Benson",
                    facility: "Cold Room",
                    payment: "Wallet",
                  },
                  {
                    img: '',
                    name: "Ladicia Godspower",
                    facility: "Solar Dryer",
                    payment: "Bank Transfer",
                  },
                  {
                    img: '',
                    name: "Kingsley Okoro",
                    facility: "Milling Unit",
                    payment: "Card",
                  },
                  {
                    img: '',
                    name: "Kingsley Okoro",
                    facility: "Milling Unit",
                    payment: "Card",
                  },
                ]}
              />

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
          <div className="secondd px-5 py-8 w-[312px] h-screen flex flex-col items-center gap-5">
            <TotalViewPerformanceCard />

            <div className="bg-[#02402D] rounded-xl w-full  p-6">
              <div className="text-white w-full flex flex-col items-center gap-5">
                <div className="self-start p-4 w-22 h-22 grid place-items-center bg-[#101928] rounded-full">
                  <BarChartIcon className="text-[#95BF33]" />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-[22px] font-normal mb-2 leading-[30px]">
                    Level up your post-harvest strategy to the next level .
                  </h3>
                  <p className="text-[14px] text-gray-300 mb-6 leading-tight">
                    Book the right infrastructure , from cold rooms to dryers
                    and take full control of your harvest . Keep your produce
                    fresh cut down post-harvest losses .
                  </p>
                </div>
                <button className="px-8 h-10 bg-white text-[#02402D] font-bold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
                  Get started{" "}
                  <ChevronRightIcon className="inline w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
