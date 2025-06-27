import React, { useContext } from "react";
import Header from "../../components/Dashboard/Header";
import SideBar from "../../components/Dashboard/sideBar";
import { SidebarContext } from "../../App";
import { assets } from "../../assets/assets";

const Bookings = ({ role }) => {
  const { open } = useContext(SidebarContext);
  const farmers = [ {
    name: 'Lindsey Stroud',
    facility: 'SunHarvest Drying Yard',
    date: 'Jul, 2, 2025',
    time: '10:00AM',
    duration: '2 hours',
    status: 'Upcoming'
  }]
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
        <div className="p-5">
          <table className="w-full whitespace-nowrap">
            <thead className="w-full whitespace-nowrap bg-green-800 text-white">
              <tr className="flex whitespace-nowrap justify-between w-full p-2 text-sm">
                <td>Farmer Name</td>
                <td>Facility</td>
                <td>Date/Time</td>
                <td>Duration</td>
                <td>Status</td>
                <td>Details</td>
              </tr>
            </thead>
            <tbody className="w-full whitespace-nowrap">
              <tr className="flex whitespace-nowrap justify-between w-full p-2 text-sm">
                <td>
                  <div className="flex gap-2 items-center">
                    <img src={assets.Ladicia} className="w-5 rounded-full" />
                    <h3>Lindsey Stroud</h3>
                  </div>
                </td>
                <td>SunHarvest Drying Yard</td>
                <td>Jul 2, 2025, 10:AM</td>
                <td>2 hours</td>
                <td>Upcoming</td>
                <td><button>View Details</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default Bookings;
