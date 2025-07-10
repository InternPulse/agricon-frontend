import { FaHouse } from "react-icons/fa6";


function EmptyBookings() {
    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="space-y-5 text-center">
                <FaHouse size={120} className="mx-auto"/>
                <h6 className="font-bold text-2xl">Your Bookings is Empty</h6>
                <p>Create a Facility so Farmers can book.</p>
           </div>
        </div>
    );
}

export default EmptyBookings;