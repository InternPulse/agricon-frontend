import Welcome from "../../components/Dashboard/Welcome";
import Header from "../../components/Dashboard/Header";
import Date from "../../components/Dashboard/Date";
import Stats from "../../components/Dashboard/Stats";
import FacilityTransaction from "../../components/Dashboard/FacilityTransaction";
import StorageFacilities from "../../components/Dashboard/StorageFacilities";
import RecentBookings from "../../components/Dashboard/RecentBookings";
import RecentFacilities from "../../components/Dashboard/RecentFacilities";

export default function FacilityOwnerDashboard() {
  return (
    <div
      className="flex min-h-screen bg-gray-100 font-sans"
      style={{ scrollbarWidth: "none" }}
    >
      
      <main
        className={`${open ? 'hidden sm:flex' : 'flex'}  flex-1 flex flex-col bg-white overflow-auto`}
        style={{ scrollbarWidth: "none" }}
      >
        
        <section className="flex flex-wrap md:flex-nowrap">
          <div className="firstt px-5 xl:pl-8 xl:pr-5 py-4 md:border-r border-[#D0D5DD] w-full">
            <div className="container flex flex-col gap-6">
              <div className="greeting w-full flex justify-between items-center">
                <Welcome />
                <Date />
              </div>
              <div className="bottom w-full flex flex-col gap-[27px]">
                <Stats />
                <div className="flex flex-wrap xl:flex-nowrap gap-[27px] overflow-x-scroll">
                  <div className="left h-full w-full sm:w-[715px] flex flex-col gap-8">
                    <RecentFacilities/>
                    <FacilityTransaction />
                  </div>
                  <div className="right w-full xl:w-[354px] flex flex-wrap md:flex-nowrap xl:flex-col gap-4">
                    <StorageFacilities />
                    <RecentBookings />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
