import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";


function AddSuccess() {
    return (
        <div className="">
            <div className="text-center space-y-5 px-10">
                <img src={assets.success} alt="success_img" className="w-[25%] mx-auto drop-shadow-xl"/>
                <h3 className="text-2xl font-bold">Successfull</h3>
                <p>You have successfully added your facility. </p>
                <Link
                    to='/my-facility'
                    className="bg-[#02402D] flex items-center justify-center font-bold text-green-50 py-3 rounded-md w-full"
                >
                    Return to My Facilities
                </Link>
            </div>
        </div>
    
    );
}

export default AddSuccess;