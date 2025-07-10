import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getOperatorBookings} from '../../actions/getOperatorBookings'


const BookingList = () => {
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true);


const fetchAllbookings = useCallback(async () => {
      setLoading(true);
      try {
          const data = await getOperatorBookings();
          setBookings(data.facilities); 
      } catch (error) {
          console.error("Error getting facility", error); 
          setBookings([]); 
      } finally {
          setLoading(false);
      }
  }, []); 

  useEffect(() => {
    fetchAllbookings();
  }, [fetchAllbookings]);

    
    
  return (
    <div
      className="overflow-x-auto sm:p-8 text-[12px]"
      style={{ scrollbarWidth: "none" }}
    >
      <table className="min-w-full bg-white overflow-hidden table-fixed">
        <thead className="bg-[#02402D] text-white">
          <tr>
            <th className="w-1/6 py-2 px-4 text-left text-[14px] font-medium tracking-wide">
              Farmer Name
            </th>
            <th className="w-1/6 py-2 px-4 text-left text-[14px] font-medium tracking-wide">
              Facility
            </th>
            <th className="w-1/6 py-2 px-4 text-left text-[14px] font-medium tracking-wide">
              Date/Time
            </th>
            <th className="w-1/12 py-2 px-4 text-left text-[14px] font-medium tracking-wide">
              Duration
            </th>
            <th className="w-1/12 py-2 px-4 text-left text-[14px] font-medium tracking-wide">
              Status
            </th>
            <th className="w-1/6 py-2 px-4 text-left text-[14px] font-medium tracking-wide">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="">
          {bookings.map((operator) => ( 
            <tr
              key={operator.id}
              className="hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img
                    src={operator.farmerImage}
                    alt={operator.farmerName}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <h3 className="text-[#323C47] text-[13px]">
                    {operator.farmerName}
                  </h3>
                </div>
              </td>
              <td className="py-4 px-4 text-[#323C47] text-[13px]">{operator.facility}</td>
              <td className="py-4 px-4 text-[#323C47] text-[13px]">{operator.dateTime}</td>
              <td className="py-4 px-4 text-[#323C47] text-[13px]">{operator.duration}</td>
              <td className="py-4 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    operator.status === "Upcoming"
                      ? "text-[#0B9D09] text-[13px]"
                      : operator.status === "Completed"
                      ? "text-[#09B5FF] text-[13px]"
                      : "text-[#ED0F13] text-[13px]"
                  }`}
                >
                  {operator.status}
                </span>
              </td>
              <td className="">
                <Link to={`operator/booking-history/${operator.id}`}>
                  <button
                    className="bg-[#02402D] w-[120px] xl:w-[160px] h-[27px] hover:bg-green-700 cursor-pointer text-white font-medium sm:py-1 sm:px-4 rounded-md text-xs transition-colors duration-200"
                  >
                   {loading ? <ClipLoader /> : "View Details"}
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
