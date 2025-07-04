import { FaHouse } from "react-icons/fa6";


function EmptyFacility() {
    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="space-y-5 text-center">
                <FaHouse size={120} className="mx-auto"/>
                <h6 className="font-bold text-2xl">Your Facility is Empty</h6>
                <p>Click the add button to start adding your facility.</p>
           </div>
        </div>
    );
}

export default EmptyFacility;