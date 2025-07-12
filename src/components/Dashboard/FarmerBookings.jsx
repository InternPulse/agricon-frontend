import React, { useState, useEffect, useCallback } from "react";
import { FaBook } from "react-icons/fa"; 
import { getFarmerBookings } from "../../actions/getFarmerBookings";
import { FaHouse } from "react-icons/fa6";

const FarmerBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const fetchBookings = useCallback(async () => { 
    setError(null);
    try {
      const data = await getFarmerBookings();
      const bookingsArray = Array.isArray(data?.data) ? data.data : []; 
      setBookings(bookingsArray);
    } catch (err) { 
      console.error("Error fetching farmer bookings:", err); 
      setError(err); 
      setBookings([]);
    } 
  }, []);

  
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]); 

  

  if (error) {
    return (
      <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
        <p className="font-bold">Error fetching bookings:</p>
      </div>
    );
  }

  // If there are no bookings after loading, display a message
  if (bookings.length === 0 ) {
    return (
      <div className="flex items-center justify-center w-full border border-[#D0D5DD] rounded-md py-10">
        <div className="text-gray-600">
          <FaHouse size={55} className="fill-black mx-auto"/>
          <p className="py-4">No bookings found for your account.</p>
        </div>
     </div>
    );
  }


  return (
    <>
      <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="h-16">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[24px] font-[500] text-[#1D2739]"
              >
                Booking history
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
              >
                ...
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((item, i) => (
              <tr key={item.id || i}> 
                <td className="p-4 whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`flex items-center justify-center bg-[#eeeeee] h-8 w-8 text-sm text-[#222222] rounded ${
                        item.size ? "rounded-full" : ""
                      }`}
                    >
                      {/* Check item.details.icon as per your structure */}
                      {item.details && item.details.icon ? (
                        <img src={item.details.icon} alt="icon" />
                      ) : (
                        item.icon || <FaBook /> 
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Title {item.id} 
                      </div>
                      <div className="text-xs text-gray-500">{item.date}</div> 
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 font-medium">
                  {item.details && item.details.price} 
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === "Completed"
                        ? "text-green-500"
                        : item.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status} 
                  </span>
                  <div className="text-[10px] text-gray-500 mt-1">
                    {item.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FarmerBookings;