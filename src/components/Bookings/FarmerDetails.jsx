import React, { useContext } from "react";
import { ViewFarmerContext } from "../../pages/Bookings/Bookings";
import { assets } from "../../assets/assets";
import { FaMessage } from "react-icons/fa6";

const FarmerDetails = () => {
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
  const { activeFarmer } = useContext(ViewFarmerContext);
  console.log(activeFarmer);
  return (
    <div>
      {activeFarmer &&
        tableData.map((farmer) =>
          farmer.id === activeFarmer ? (
            <div className="mx-auto max-w-4xlspace-y-8 p-5">
              {/* TOP SECTION: Profile and Action Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center pb-6 gap-6 md:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src={farmer.farmerImage}
                    alt={farmer.farmerName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-md font-semibold text-gray-900 leading-tight">
                      {farmer.farmerName}
                    </h1>
                    <p className="text-md text-gray-600">
                      {farmer.farmerName.toLowerCase().replace(/\s/g, ".") +
                        "@gmail.com"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-2 bg-green-800 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-200">
                    Reschedule Booking
                  </button>
                  <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-200">
                    Cancel Booking
                  </button>
                </div>
              </div>

              {/* MIDDLE SECTION: Booking Details Form */}
              <div className="space-y-6">
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={farmer.farmerName}
                      readOnly // Use readOnly instead of contentEditable for inputs
                      className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Facility */}
                  <div>
                    <label
                      htmlFor="facility"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Facility
                    </label>
                    <input
                      type="text"
                      id="facility"
                      value={farmer.facility}
                      readOnly
                      className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Date & Time */}
                  <div>
                    <label
                      htmlFor="dateTime"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Date & Time
                    </label>
                    <input
                      type="text"
                      id="dateTime"
                      value={farmer.dateTime}
                      readOnly
                      className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label
                      htmlFor="duration"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      value={farmer.duration}
                      readOnly
                      className="form-input block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      id="status"
                      value={farmer.status}
                      readOnly
                      className={`form-input block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 cursor-not-allowed focus:outline-none`}
                    />
                  </div>
                </form>
              </div>

              {/* BOTTOM SECTION: Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Booked By:</h2>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600 text-2xl flex items-center justify-center">
                    <FaMessage />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      lindsey.stroud@gmail.com
                    </h3>
                    <p className="text-sm text-gray-500">1 hour ago</p>{" "}
                    {/* This '1 hour ago' might be dynamic based on booking time */}
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200">
                  Contact Farmer
                </button>
              </div>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default FarmerDetails;
