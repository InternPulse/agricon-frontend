
import { useCallback, useEffect, useState } from "react";
import {getOperatorBookings} from '../../actions/getOperatorBookings';
import RecentBookingList from "./RecentBookingList";
import EmptyRecentBookings from "./EmptyRecentBookings";


const BookingList = () => {
  const [bookings, setBookings] = useState([]);


  const fetchAllbookings = useCallback(async () => {
    try {
      const data = await getOperatorBookings();
      setBookings(data?.facilities || []);
    } catch (error) {
      console.error("Error getting BookingList:", error);
      setBookings([]); 
    } 
  }, []);

  useEffect(() => {
    fetchAllbookings();
  }, [fetchAllbookings]);

  

  return (
    <div className="w-full">
      {bookings.length > 0 ? (
        <RecentBookingList
          facilities={bookings}
        />
      ) : (
        <EmptyRecentBookings />
      )}
    </div>
  );
};


export default BookingList;