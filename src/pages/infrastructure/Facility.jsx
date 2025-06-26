import Card from "../../components/infrastructure/ui/Card";
import { cardData } from "../../data";
import { IoIosSearch } from "react-icons/io";
// import { IoFilterSharp } from "react-icons/io5";
// import Facilities from "../../components/infrastructure/Facilities";
import Pagination from "../../components/infrastructure/ui/Pagination";
import { useContext, useMemo, useState } from "react";
import Button from "../../components/infrastructure/ui/Button";
import { Link } from "react-router-dom";
import { FacilityContext } from "../../components/infrastructure/FacilityContext";

export default function Facility() {
  const { facilities } = useContext(FacilityContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const facilitiesPerPage = 5;

  // Filter and search logic
  const filteredFacilities = useMemo(() => {
    return (facilities ?? []) //	Uses [] only if facilities is null or undefined
      .filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) => (filter === "All" ? true : item.type === filter));
  }, [facilities, searchTerm, filter]);

  // Pagination logic
  const indexOfLast = currentPage * facilitiesPerPage;
  const indexOfFirst = indexOfLast - facilitiesPerPage;
  const currentFacilities = filteredFacilities.slice(indexOfFirst, indexOfLast);

  const pageCount = Math.ceil(filteredFacilities.length / facilitiesPerPage);

  return (
    <>
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white border border-gray-300 py-6 px-3.5 rounded-[10px]">
        <div className="flex flex-wrap justify-between mt-7">
          <div>
            <h2 className="max-xl:mb-2 text-[#667185] mb-4">
              42 facilities available across 12 locations in Nigeria
            </h2>
            <div className="flex items-center gap-2 pl-4 pr-3 lg:mb-5 border border-[#8B8B8B] rounded-lg h-[36px] ">
              <IoIosSearch />
              <input
                type="text"
                placeholder="Search infrastructure"
                className="w-full focus:outline-none"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset on search
                }}
              />
            </div>
          </div>

          {/* ✅ Dropdown Filter */}
          <div className="flex items-center gap-2 my-2">
            <label
              htmlFor="filter"
              className="text-sm font-medium text-gray-600"
            >
              Filter by type:
            </label>
            <select
              id="filter"
              className="border border-gray-400 rounded px-2 py-1"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1); // Reset on filter change
              }}
            >
              <option value="All">All</option>
              <option value="Dryer">Dryer</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Storage Facility">Storage Facility</option>
              <option value="Cold Storage">Cold Storage</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col gap-1.5 border border-gray-300 rounded-t-[10px] mb-4">
          <div className="flex flex-wrap items-center bg-gray-200 py-3.5 px-7.5 font-semibold text-sm">
            <p className="flex items-center truncate w-[243px] h-10.5 text-[#475367]">
              Facility Name
            </p>
            <p className="flex items-center truncate w-[181px] h-10.5 text-[#475367]">
              Facility Type
            </p>
            <p className="flex items-center truncate w-[243px] h-10.5 text-[#475367]">
              Address
            </p>
          </div>

          {currentFacilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between items-center gap-4 bg-white hover:bg-gray-50 py-3.5 px-7.5"
            >
              <div className="flex flex-wrap">
                <p className="flex items-center truncate w-[243px] h-10.5 text-[#475367]">
                  {facility.name}
                </p>
                <p className="flex items-center truncate w-[181px] h-10.5 text-[#475367]">
                  {facility.type}
                </p>
                <p className="flex items-center truncate w-[243px] h-10.5 text-[#475367]">
                  {facility.location}
                </p>
              </div>

              <div className="flex gap-2">
                <Button className="bg-[#E4E7EC] hover:bg-gray-300 font-medium px-5">
                  View Details
                </Button>
                <Link
                  to="facility-details"
                  className="flex justify-center items-center rounded-lg py-2.5 bg-[#02402DA6] hover:bg-[#02402D] text-white font-medium px-6"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          totalPages={pageCount}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />

        {/* <div className="flex my-7.5">
            <button className="flex justify-between items-center gap-2 px-3 border border-[#8B8B8B] rounded-lg h-[36px]">
              <IoFilterSharp />
              <p className="max-sm:hidden">Filter</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 border border-gray-300 rounded-t-[10px] mb-[74px]">
          <Facilities />
        </div>
        <Pagination
          totalPages={pageCount}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        /> */}
      </section>
    </>
  );
}
