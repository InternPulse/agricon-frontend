import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { ViewFarmerContext } from "../../pages/Bookings/Bookings";

const BookingList = () => {
  const {activeFarmer, setActiveFarmer} = useContext(ViewFarmerContext);
  console.log(activeFarmer);

  const tableData = [
    {
      id: 1,
      farmerName: "Lindsey Stroud",
      farmerImage: assets.Ladicia,
      facility: "SunHarvest Drying Yard",
      dateTime: "Jul 2, 2025, 10:AM",
      duration: "2 hours",
      status: "Upcoming",
    },
    {
      id: 2,
      farmerName: "John Doe",
      farmerImage: assets.Ladicia,
      facility: "GreenFields Processing",
      dateTime: "Jul 3, 2025, 2:PM",
      duration: "4 hours",
      status: "Completed",
    },
    {
      id: 3,
      farmerName: "Jane Smith",
      farmerImage: assets.Ladicia,
      facility: "AquaFarm Innovations",
      dateTime: "Jul 4, 2025, 9:AM",
      duration: "1.5 hours",
      status: "Cancelled",
    },
  ];
  return (
    <div
      className="overflow-x-auto sm:p-8 text-[12px]"
      style={{ scrollbarWidth: "none" }}
    >
      <table className="min-w-full bg-white overflow-hidden table-fixed">
        <thead className="bg-green-800 text-white">
          <tr>
            <th className="w-1/6 py-2 px-4 text-left text-[12px] font-medium tracking-wide">
              Farmer Name
            </th>
            <th className="w-1/6 py-2 px-4 text-left text-[12px] font-medium tracking-wide">
              Facility
            </th>
            <th className="w-1/6 py-2 px-4 text-left text-[12px] font-medium tracking-wide">
              Date/Time
            </th>
            <th className="w-1/12 py-2 px-4 text-left text-[12px] font-medium tracking-wide">
              Duration
            </th>
            <th className="w-1/12 py-2 px-4 text-left text-[12px] font-medium tracking-wide">
              Status
            </th>
            <th className="w-1/6 py-2 px-4 text-left text-[12px] font-medium tracking-wide">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map((farmer) => (
            <tr
              key={farmer.id}
              className="hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img
                    src={farmer.farmerImage}
                    alt={farmer.farmerName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h3 className="text-gray-900 font-medium">
                    {farmer.farmerName}
                  </h3>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700">{farmer.facility}</td>
              <td className="py-4 px-4 text-gray-700">{farmer.dateTime}</td>
              <td className="py-4 px-4 text-gray-700">{farmer.duration}</td>
              <td className="py-4 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    farmer.status === "Upcoming"
                      ? "text-green-500"
                      : farmer.status === "Completed"
                      ? "text-blue-400"
                      : "text-red-500"
                  }`}
                >
                  {farmer.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <Link to={"/farmer-details"}>
                  <button
                    className="bg-green-900 hover:bg-blue-600 text-white font-medium py-1 px-4 rounded-md text-xs transition-colors duration-200"
                    onClick={() => {
                      setActiveFarmer(farmer.id);
                    }}
                  >
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
