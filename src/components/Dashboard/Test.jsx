import React, { useState, useEffect } from "react";
import { FaBook, FaSolarPanel, FaMillSign } from "react-icons/fa6"; // Import necessary icons

// Transaction component - This is the UI structure you provided
const Transaction = ({ title, hvalue1, hvalue2, details }) => {
  return (
    <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="h-16">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[24px] font-[500] text-[#1D2739]"
            >
              {title}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              {hvalue1}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              {hvalue2}
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
          {/* Check if details is an array before mapping */}
          {Array.isArray(details) && details.length > 0 ? (
            details.map((item, i) => (
              <tr key={item.id || i}>
                {" "}
                {/* Use item.id for key if available, fallback to index */}
                <td className="p-4 whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`flex items-center justify-center bg-[#eeeeee] h-8 w-8 text-sm text-[#222222] rounded ${
                        item.size ? "rounded-full" : ""
                      }`}
                    >
                      {/* Assuming 'img' is not used, only 'icon' */}
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {item.title || item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.date || "owner"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 font-medium">
                  {item.price || item.facility}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === "Completed" || item.payment === "Paid"
                        ? "text-green-500"
                        : item.status === "Pending" ||
                          item.payment === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status || item.payment}
                  </span>
                  <div className="text-[10px] text-gray-500 mt-1">
                    {item.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-8 text-gray-500">
                No booking history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Main App component that integrates data fetching and passes to Transaction
const App = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Retrieve token from localStorage as per your logic
        const token = localStorage.getItem("access_token");
        console.log("Access Token from localStorage:", token);

        if (!token) {
          throw new Error(
            "Authentication token not found in localStorage. Please ensure you are logged in."
          );
        }

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
        // Assuming the API response has a 'data' array containing booking objects
        console.log("API Response Data:", data.data);

        // Transform API data to fit the Transaction component's 'details' prop format
        const transformedBookings = data.data.map((booking) => ({
          id: booking.id,
          icon: <FaBook />, // Default icon, you can add logic to choose based on booking type if available
          size: true, // Assuming all items should have a rounded icon background
          title: booking.details || "Booking Details N/A", // Using 'details' from API as 'title'
          date: new Date(booking.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }), // Format date
          price: "Price N/A", // API response doesn't seem to have price, using placeholder
          status: booking.status, // Use status directly from API
        }));

        setBookings(transformedBookings);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); // Empty dependency array means this runs once on mount

  // Conditional rendering for loading and error states
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <p className="ml-4 text-gray-600">Loading farmer bookings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
        <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <p className="font-bold">Error fetching bookings:</p>
          <p>{error.message}</p>
          <p className="text-sm mt-2">
            Please ensure the token is valid and the backend is accessible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Agricon Express Bookings
        </h1>
        {/* Render the Transaction component with fetched and transformed data */}
        <Transaction
          title="Booking history"
          hvalue1="Price"
          hvalue2="Status"
          details={bookings} // Pass the transformed bookings array
        />
      </div>
    </div>
  );
};

export default App;
