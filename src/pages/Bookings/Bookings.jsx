import React, { createContext,  useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookingList from "../../components/Bookings/BookingList";
import FarmerDetails from "../../components/Bookings/FarmerDetails";

export const ViewFarmerContext = createContext();

const Bookings = () => {
  const [activeFarmer, setActiveFarmer] = useState(null);

  return (
    <section
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      <main
        className={`${
          open ? "hidden sm:flex" : "flex"
        }  flex-1 flex flex-col bg-white overflow-auto`}
        style={{ scrollbarWidth: "none" }}
      >
        <ViewFarmerContext.Provider value={{ activeFarmer, setActiveFarmer }}>
          <Routes>
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/farmer-details" element={<FarmerDetails />} />
          </Routes>
        </ViewFarmerContext.Provider>
      </main>
    </section>
  );
};

export default Bookings;
