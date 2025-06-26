import { Outlet } from "react-router-dom";
import Side from "../components/home/Side";



function FacilityOwnerLayout() {
    return (
        <div className="flex w-full">
            <Side />
            <div className="pl-0 md:pl-64 w-full"> 
                <Outlet />
            </div>
        </div>
    );
}

export default FacilityOwnerLayout;