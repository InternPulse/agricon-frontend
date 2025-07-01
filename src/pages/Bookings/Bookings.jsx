import React, { createContext, useContext, useState } from "react";
import Header from "../../components/Dashboard/Header";
import SideBar from "../../components/Dashboard/sideBar";
import { SidebarContext } from "../../App";
import { Route, Routes } from "react-router-dom";
import BookingList from "../../components/Bookings/BookingList";
import FarmerDetails from "../../components/Bookings/FarmerDetails";

export const ViewFarmerContext = createContext();

const Bookings = ({ role }) => {
  const [activeFarmer, setActiveFarmer] = useState(null);
  const { open } = useContext(SidebarContext);

  return (
    <section
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      <SideBar role={role} />
      <main
        className={`${
          open ? "hidden sm:flex" : "flex"
        }  flex-1 flex flex-col bg-white overflow-auto`}
        style={{ scrollbarWidth: "none" }}
      >
        <Header role={role} />
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
