import { useCallback, useEffect, useState } from "react";
import {getOperatorBookings} from '../../actions/getOperatorBookings';
import List from "./List";
import EmptyBookings from "./EmptyBookings";
import { ClipLoader } from "react-spinners";


const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchAllbookings = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getOperatorBookings();
      setBookings(data?.facilities || []);
    } catch (error) {
      console.error("Error getting facility:", error);
      setBookings([]); 
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllbookings();
  }, [fetchAllbookings]);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <ClipLoader color='#02402D' />
      </div>
    );
  }

  return (
    <div className="p-10">
      {bookings.length > 0 ? (
        <List
          facilities={bookings}
        />
      ) : (
        <EmptyBookings />
      )}
    </div>
  );
};


export default BookingList;