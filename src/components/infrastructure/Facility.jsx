import { Link } from "react-router-dom";
import { facilityDetails } from "../../data.jsx";

export default function Facility({ facility }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 mb-[4.5rem]">
        {facilityDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 bg-gray-100 p-4 rounded-lg"
          >
            <div className="flex gap-4 items-center">
              <p className="text-xl">{item.icon}</p>
              <p className="font-medium text-xl">{item.label}</p>
            </div>
            {item.id === "type" && <p>{facility.type}</p>}
            {item.id === "capacity" && <p>{facility.capacity}</p>}
            {/* {item.id === hours && <p>{facility.name}</p>} */}
            {item.id === "price" && (
              <p>
                {facility.pricePerDay.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                })}
              </p>
            )}
          </div>
        ))}
      </div>

      <Link
        to="/booking"
        className="flex justify-center items-center rounded-lg py-2.5 mx-auto bg-[#02402D] text-white max-w-[756px]"
      >
        Book Now
      </Link>
    </>
  );
}
