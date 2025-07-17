
import { Route, Routes } from "react-router-dom";
import BookingList from "../../components/Bookings/BookingList";
import FarmerDetails from "../../components/Bookings/FarmerDetails";


const Bookings = () => {

  return (
    <section
      className="flex min-h-screen bg-gray-100 font-sans mt-15"
      style={{ scrollbarWidth: "none" }}
    >
      <main
        className={`${
          open ? "hidden sm:flex" : "flex"
        }  flex-1 flex flex-col bg-white overflow-auto`}
        style={{ scrollbarWidth: "none" }}
      >
       
          <Routes>
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/farmer-details" element={<FarmerDetails />} />
          </Routes>
  
      </main>
    </section>
  );
};

export default Bookings;
