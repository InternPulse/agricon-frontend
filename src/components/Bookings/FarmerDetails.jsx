import { useCallback, useEffect, useState } from "react";
import { FaMessage } from "react-icons/fa6";
import  {getOperatorBookingById}  from "../../actions/getBookingsById";


const FarmerDetails = () => {
       const [booking, setBooking] = useState([]); 
         const [loading, setLoading] = useState(true);
       
       const fetchSinglebooking = useCallback(async () => {
             setLoading(true);
             try {
                 const data = await getOperatorBookingById();
                 setBooking(data.facilities); 
             } catch (error) {
                 console.error("Error getting facility", error); 
                 setBooking([]); 
             } finally {
                 setLoading(false);
             }
         }, []); 
       
         useEffect(() => {
          fetchSinglebooking();
         }, [fetchSinglebooking]);
  
  return (
    <div>
      {booking.map((operator) =>(
        <div
          key={operator.id}
              className="mx-auto max-w-[
                1096px] pt-10 space-y-8 p-5 px-10"
            >
              {/* TOP SECTION: Profile and Action Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center pb-6 gap-6 md:gap-0">
                <div className="flex items-center gap-4">
                  <img
                    src={operator.farmerImage}
                    alt={operator.farmerName}
                    className="w-25 h-25 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-[20px] font-semibold text-[#000000] leading-tight">
                      {operator.farmerName}
                    </h1>
                    <p className="text-[16px] text-[#000000]/40">
                      {operator.farmerName.toLowerCase().replace(/\s/g, ".") +
                        "@gmail.com"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="w-[152px] h-[49px] bg-[#02402D] font-[600] hover:bg-green-700 text-[#F9F9F9] text-[14px] rounded-lg transition-all duration-200 cursor-pointer">
                    Reschedule Booking
                  </button>
                  <button className="w-[152px] h-[49px] bg-[#FFAC00] font-[600] hover:bg-yellow-400 text-[#F9F9F9] text-[14px] rounded-lg transition-all duration-200 cursor-pointer">
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
                      className="block text-[16px] font-medium text-[#000000] mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={operator.farmerName}
                      readOnly // Use readOnly instead of contentEditable for inputs
                      className="form-input block w-full px-4 py-2 rounded-md bg-[#F9F9F9] text-[#000000]/40 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Facility */}
                  <div>
                    <label
                      htmlFor="facility"
                      className="block text-[16px] font-medium text-[#000000] mb-1"
                    >
                      Facility
                    </label>
                    <input
                      type="text"
                      id="facility"
                      value={operator.facility}
                      readOnly
                      className="form-input block w-full px-4 py-2 rounded-md bg-[#F9F9F9] text-[#000000]/40 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Date & Time */}
                  <div>
                    <label
                      htmlFor="dateTime"
                      className="block text-[16px] font-medium text-[#000000] mb-1"
                    >
                      Date & Time
                    </label>
                    <input
                      type="text"
                      id="dateTime"
                      value={operator.dateTime}
                      readOnly
                      className="form-input block w-full px-4 py-2 rounded-md bg-[#F9F9F9] text-[#000000]/40 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label
                      htmlFor="duration"
                      className="block text-[16px] font-medium text-[#000000] mb-1"
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      id="duration"
                      value={operator.duration}
                      readOnly
                      className="form-input block w-full px-4 py-2 rounded-md bg-[#F9F9F9] text-[#000000]/40 cursor-not-allowed focus:outline-none"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-[16px] font-medium text-[#000000] mb-1"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      id="status"
                      value={operator.status}
                      readOnly
                      className={`form-input block w-full px-4 py-2 rounded-md bg-[#F9F9F9] text-[#000000]/40 cursor-not-allowed focus:outline-none`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-[16px] font-medium text-[#000000] mb-1"
                    >
                      Booking ID
                    </label>
                    <input
                      type="text"
                      id="status"
                      value={operator.id}
                      readOnly
                      className={`form-input block w-full px-4 py-2 rounded-md bg-[#F9F9F9] text-[#000000]/40 cursor-not-allowed focus:outline-none`}
                    />
                  </div>
                </form>
              </div>

              {/* BOTTOM SECTION: Contact Info */}
              <div className="pt-6 space-y-4">
                <h2 className="text-[18px] font-bold text-[#000000]">
                  Booked By:
                </h2>
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 text-[#02402D] rounded-full bg-[#067956C7]/10 flex items-center justify-center">
                    <FaMessage className="w-[22px] h-[24px] " />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-black">
                      lindsey.stroud@gmail.com
                    </h3>
                    <p className="text-[16px] text-black/50">1 hour ago</p>{" "}
                    {/* This '1 hour ago' might be dynamic based on booking time */}
                  </div>
                </div>
                <button className="w-[152px] h-[49px] flex justify-center items-center bg-[#02402D] hover:bg-green-700 text-white text-[12px] rounded-lg transition-all duration-200 cursor-pointer">
                  Contact Farmer
                </button>
              </div>
            </div>
          ) )}
    </div>
  );
};

export default FarmerDetails;
