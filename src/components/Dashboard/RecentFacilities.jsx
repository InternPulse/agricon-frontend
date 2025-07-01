import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AssetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-green-500"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.85-3.375a.75.75 0 00-1.06-1.06L9.75 10.19V6.75a.75.75 0 00-1.5 0v3.44L6.18 8.565a.75.75 0 10-1.06 1.06L8.94 12l-3.72 3.72a.75.75 0 101.06 1.06L8.25 13.81v3.44a.75.75 0 001.5 0v-3.44l1.06 1.06a.75.75 0 101.06-1.06L11.06 12l3.045-3.045z"
      clipRule="evenodd"
    />
  </svg>
);

const RecentFacilities = () => {
  const details = [
    {
      status: "Completed",
      payment: "Visa card **** ****",
      type: "Card payment",
      price: "₦7,900",
      date: "Jun 17, 2025",
      facility: "Cold Room",
    },
    {
      status: "Completed",
      payment: "Mastercard **** ****",
      type: "Card payment",
      price: "₦8,500",
      date: "Jun 17, 2025",
      facility: "Miller Unit",
    },
    {
      status: "Completed",
      payment: "Account **** ****",
      type: "Bank payment",
      price: "₦5,600",
      date: "Jun 17, 2025",
      facility: "Solar Dryer",
    },
    {
      status: "Completed",
      payment: "Mastercard **** ****",
      type: "Card payment",
      price: "₦6,750",
      date: "Jun 17, 2025",
      facility: "Miller Unit",
    },
  ];
  const facilities = [
    {
      id: 1,
      image: "https://placehold.co/600x400/a3e635/000?text=Drying+Facilities",
      title: "Drying Facilities",
      description: "Grain and crop drying systems and dryers + equipments",
      link: "/facilities/drying", // Example link
    },
    {
      id: 2,
      image: "https://placehold.co/600x400/bfdbfe/000?text=Storage+Facilities",
      title: "Storage Facilities",
      description: "Secure storage spaces for harvested crops",
      link: "/facilities/storage", // Example link
    },
    {
      id: 3,
      image: "https://placehold.co/600x400/93c5fd/000?text=Cold+Storage",
      title: "Cold Storage",
      description: "Temperature-controlled storage facilities for aid",
      link: "/facilities/cold-storage", // Example link
    },
  ];
  return (
    <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white p-4 flex items-center flex gap-1">
      <div className="w-full flex flex-col gap-3">
        <h1 className="h-[26px] text-[16px] font-[500] text-gray-800">
          Recently added facilities
        </h1>
        <div className="items overflow-x-scroll items-center justify-around w-full max-w-[715px] gap-2 flex pb-4">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="flex-none w-[180px]
                       bg-white rounded-sm hover:shadow-xl
                       transition duration-200 transform hover:-translate-y-1
                       overflow-hidden flex flex-col"
            >
              <div>
                <div className="h-25 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-[106px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
                    }}
                  />
                </div>

                <div className="border-[0.5px] border-[#E4E7EC] border-t-none w-full h-20 py-1.5 px-3 flex justify-between">
                  <div className="mb-4">
                    <h3 className="text-[12px] font-[600] text-[#1D2739] mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-[10px] text-[#475367] line-clamp-2">
                      {facility.description}
                    </p>
                  </div>

                  <div className="flex w-[23px] h-[23px] justify-end mt-auto mb-2">
                    <AssetIcon />
                  </div>
                </div>
              </div>

              <Link
                to={facility.link}
                className="block text-center w-full h-7 mt-4 px-6 py-3
                           bg-[#02402D] hover:bg-green-800 text-[14px] text-white font-[600]
                           rounded-[8px] transition-all
                           duration-300 flex items-center justify-center gap-2"
              >
                View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 rotate-315"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}

          <div className="flex-none w-0 md:w-0 lg:w-0"></div>
        </div>
      </div>
      <div className="see-all">
        <Link
          to="/facilities/all" // Link to view all facilities
          className="flex flex-col gap-2 w-8 items-center text-[#40B869] hover:text-green-700 font-semibold text-[10px] transition-colors duration-200"
        >
          <div className="bg-[#F0F2F5] h-[29px] w-[29px] flex items-center justify-center text-[#40B869] rounded-full ">
            <ChevronRight width={20} />
          </div>
          See All
        </Link>
      </div>
    </div>
  );
};

export default RecentFacilities;
