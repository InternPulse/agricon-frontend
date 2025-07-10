import React, { useCallback, useEffect, useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllFacilities } from "../../actions/getFacilities";

const StorageFacilities = () => {
  const [totalFacilities, setTotalFacilities] = useState(0);
  const [vacant, setVacant] = useState(0);
  const [occupied, setOccupied] = useState(0);
 

  const fetchFacilitiesData = useCallback(async () => {
    try {
      const data = await getAllFacilities();
      const facilitiesArray = Array.isArray(data?.facilities) ? data.facilities : [];

      // Calculate total number of facilities
      setTotalFacilities(facilitiesArray.length);

      // Filter for facilities with available: true and count them
      const available = facilitiesArray.filter(facility => facility.available === true);
      setVacant(available.length);

      const notAvailable = facilitiesArray.filter(facility => facility.available === false);
      setOccupied(notAvailable.length)

    } catch (err) {
      console.error("Error getting facilities:", err);
      setTotalFacilities(0); 
      setVacant(0);
    } 
  }, []);

  useEffect(() => {
    fetchFacilitiesData();
  }, [fetchFacilitiesData]);

 

  return (
    <div
      className="mb-5 flex flex-col justify-between bg-[#02402D] rounded-xl min-h-[320px] w-full sm:min-w-85 p-5 text-white/80 gap-10"
    >
      <div className="flex gap-5 items-center justify-between">
        <div className="w-full h-5">
          <h2 className="font-medium text-[14px]">Last 30 Days</h2>
        </div>
        <Link to={"/"} className="flex items-center justify-center">
          <div className="flex items-center gap-[4px] px-2 py-[1px] border border-[#D0D5DD]/80 rounded-full">
            <CgArrowTopRight size={10} />
            <button className="text-[10px] w-9">View all</button>
          </div>
        </Link>
      </div>
      <div className="flex flex-col h-[180px] justify-between">
        <div className="flex gap-3 items-center">
          <div className="size-16 flex justify-center items-baseline">
            <FaBuilding fill="orange" size="100%" />
          </div>
          <div className="w-[132px] space-y-[4px]">
            <h1 className="text-[32px] font-[600] text-white">{totalFacilities}</h1>
            <p className="text-[16px] text-[#E4E7EC]">All Facilities</p>
          </div>
        </div>
        <div className="box bg-white flex justify-between gap-5 py-2 px-4 text-black rounded-lg w-full">
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">{vacant}</p>
            <p className="text-xs text-gray-600">Vacant</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">{occupied}</p>
            <p className="text-xs text-gray-600">Occupied</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold">0</p>
            <p className="text-xs text-gray-600">Unlisted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageFacilities;