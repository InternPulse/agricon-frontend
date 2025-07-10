import React, { useState, useEffect } from "react";
import { FaBook } from "react-icons/fa";

const FarmerBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = `${localStorage.getItem("access_token")}`;
        console.log(localStorage.getItem("access_token"));

        const response = await fetch(
          "https://agricon-express-backend.onrender.com/api/v1/bookings/farmer/me",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.data);

        setBookings(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      console.log(bookings);

      return bookings;
    };

    console.log(fetchBookings());
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        <p className="ml-4 text-gray-600">Loading farmer bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
        <p className="font-bold">Error fetching bookings:</p>
        <p>{error.message}</p>
        <p className="text-sm mt-2">
          Please ensure the token is valid and the backend is accessible.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white  overflow-x-auto">
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
          {bookings && bookings.length > 0 ? (
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((item, i) => (
                <tr key={i}>
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex gap-2 items-center">
                      <div
                        className={`flex items-center justify-center bg-[#eeeeee] h-8 w-8 text-sm text-[#222222] rounded ${
                          item.size ? "rounded-full" : ""
                        }`}
                      >
                        {item.img ? (
                          <img src={item.details.icon} alt="pic" />
                        ) : (
                          item.icon
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
                    {item.details.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex text-xs leading-5 font-semibold rounded-full  ${
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
          ) : (
            <tbody className="text-center text-gray-600 p-4 rounded-md bg-white">
              <tr>
                <td>No bookings found for your account.</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default FarmerBookings;
