import Welcome from "../../components/Dashboard/Welcome";
import Date from "../../components/Dashboard/Date";
import Stats from "../../components/Dashboard/Stats";
import FacilityTransaction from "../../components/Dashboard/FacilityTransaction";
import StorageFacilities from "../../components/Dashboard/StorageFacilities";
import RecentBookings from "../../components/Dashboard/RecentBookings";
import RecentFacilities from "../../components/Dashboard/RecentFacilities";

export default function FacilityOwnerDashboard() {
  return (
    <div
      className="min-h-screen bg-gray-100 font-sans w-full mt-20"
    >
      
      <main
        className='flex flex-col bg-white overflow-auto'
      >
        
        <section className="flex flex-wrap">
          <div className="p-5 md:border-r border-[#D0D5DD] w-full">
            <div className="flex-col gap-6">
              <div className="w-full flex justify-between items-center mb-5">
                <Welcome />
                <Date />
              </div>
              <div className="bottom w-full flex flex-col gap-[27px]">
                <Stats />
                <div className="flex flex-wrap xl:flex-nowrap gap-[27px] ">
                  <div className="h-full w-full flex flex-col gap-8">
                    <RecentFacilities />
                    <FacilityTransaction />
                  </div>
                  <div className="w-full xl:w-[354px] flex flex-wrap sm:flex-nowrap xl:flex-col gap-4">
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
