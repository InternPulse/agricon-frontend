import { Link } from "react-router-dom";
import { facilityDetails } from "../../data.jsx";

export default function Facility() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 mb-[4.5rem]">
        {facilityDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex gap-4 items-center">
              <p className="text-xl">{item.icon}</p>
              <p className="font-medium text-xl">{item.label}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <Link to="/user/facility/bookings" className="flex justify-center items-center rounded-lg py-2.5 mx-auto bg-[#02402D] text-white max-w-[756px]">Book Now</Link>
    </>
  );
}
