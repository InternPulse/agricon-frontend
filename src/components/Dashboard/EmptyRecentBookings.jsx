import { FaHouse } from "react-icons/fa6";


function EmptyRecentBookings() {
    return (
        <div className="flex items-center justify-center p-5 min-h-[60vh] border border-gray-300 rounded-xl md:min-h-[29vh] lg:min-h-[50vh]">
            <div className="space-y-5 text-center">
                <FaHouse size={100} className="mx-auto"/>
                <h6 className="font-bold text-xl">You don't have any recent Bookings</h6>
                <p>Create a Facility so Farmers can book.</p>
           </div>
        </div>
    );
}

export default EmptyRecentBookings;