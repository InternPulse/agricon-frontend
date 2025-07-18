import { ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllFacilities } from "../../actions/getFacilities";
import { assets } from "../../assets/assets";
import { useMediaQuery } from "react-responsive";

const AssetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-green-500"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.85-3.375a.75.75 0 00-1.06-1.06L9.75 10.19V6.75a.75.75 0 00-1.5 0v3.44L6.18 8.565a.75.75 0 10-1.06 1.06L8.94 12l-3.72 3.72a.75.75 0 101.06 1.06L8.25 13.81v3.44a.75.75 0 001.5 0v-3.44l1.06 1.06a.75.75 0 101.06-1.06L11.06 12l3.045-3.045z"
      clipRule="evenodd"
    />
  </svg>
);

const RecentFacilities = () => {
  const [recentNo, setRecent] = useState(window.innerWidth > 450 ? 3 : 2);
  const mediaQuery = () => {
    setRecent(window.innerWidth > 768 ? 3 : 2);
  };
  useEffect(() => {
    window.addEventListener("resize", mediaQuery);

    return () => {
      window.removeEventListener("resize", mediaQuery);
    };
  });

  const [facilities, setFacilities] = useState([]);

  const fetchFacilities = useCallback(async () => {
    try {
      const data = await getAllFacilities();
      const facilitiesData = Array.isArray(data?.facilities)
        ? data.facilities
        : [];
      const trimmedFacilities = facilitiesData.slice(0, 3);
      setFacilities(trimmedFacilities);
    } catch (err) {
      console.error("Error getting facilities:", err);
      setFacilities([]);
    }
  }, []);

  useEffect(() => {
    fetchFacilities();
  }, [fetchFacilities]);

  const facilitiesToRender =
    facilities.length > 0
      ? facilities
      : [
          {
            id: "default-1",
            image: assets.dryingFacilities,
            name: "Drying Facilities",
            description:
              "Grain and crop drying systems and dryers + equipments",
            type: "DRYING",
            link: "/facilities/drying",
          },
          {
            id: "default-2",
            image: assets.store,
            name: "Storage Facilities",
            description: "Secure storage spaces for harvested crops",
            type: "STORAGE",
            link: "/facilities/storage",
          },
          {
            id: "default-3",
            image: assets.cold,
            name: "Cold Storage",
            description: "Temperature-controlled storage facilities for aid",
            type: "COLD",
            link: "/facilities/cold-storage",
          },
        ];

  return (
    <div className="relative w-full sm:border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white sm:px-4 py-2 flex items-center gap-1">
      <div className="w-full flex flex-col gap-3">
        <h1 className="h-[26px] text-[14px] sm:text-[16px] sm:font-[500] text-gray-800">
          Recently added facilities
        </h1>
        <div className="w-full gap-2 grid grid-cols-2 grid-rows-1 md:grid-cols-3">
          {facilitiesToRender.map(
            (facility, i) =>
              facility &&
              i < recentNo && (
                <div
                  key={facility.id}
                  className="border-[0.5px] border-[#E4E7EC] border-t-none rounded sm:rounded-none  sm:border-none flex-none w-full bg-white rounded-sm hover:shadow-xl transition duration-200 transform hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  <div>
                    <div className="h-25 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                      <img
                        src={facility.image || assets.greenhouseImage}
                        alt={facility.name || "Facility Image"}
                        className="w-full h-[106px] object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
                        }}
                      />
                    </div>

                    <div className="border-non sm:border-[0.5px] border-[#E4E7EC] border-t-none w-full h-20 py-1.5 px-3 flex justify-between">
                      <div className="mb-4">
                        <h3 className="text-[12px] font-[600] text-[#1D2739] mb-2">
                          {facility.name || facility.title || "N/A"}
                        </h3>
                        <p className="text-[10px] text-[#475367] line-clamp-2">
                          {facility.description || "No description available."}
                        </p>
                        <p className="text-[10px] text-[#475367] line-clamp-2">
                          {facility.type || "N/A"}
                        </p>
                      </div>

                      <div className="flex w-[23px] h-[23px] justify-end mt-auto mb-2">
                        <AssetIcon />
                      </div>
                    </div>
                  </div>

                  <Link
                    to={facility.link}
                    className=" text-center w-7/10 mx-auto mb-2 sm:w-full h-5 sm:h-7 mt-1 sm:mt-4 px-6 py-3
                           bg-[#02402D] hover:bg-green-800 text-xs sm:text-[14px] text-white font-[600]
                           rounded-[6px] transition-all
                           duration-300 flex items-center justify-center gap-2"
                  >
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3.5 sm:h-4.5 sm:w-4.5 rotate-315"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              )
          )}

          <div className="flex-none w-0 md:w-0 lg:w-0"></div>
        </div>
      </div>
      <div className="see-all absolute sm:static right-4 top-4 sm:top-6 sm:right-6">
        <Link
          to="my-facility"
          className="flex flex-col gap-2 w-8 items-center text-[#40B869] hover:text-green-700 font-semibold text-[10px] transition-colors duration-200"
        >
          <div className="bg-[#F0F2F5] h-[29px] w-[29px] sm:flex items-center justify-center text-[#40B869] rounded-full hidden">
            <ChevronRight width={20} />
          </div>
          See All
        </Link>
      </div>
    </div>
  );
};

export default RecentFacilities;
