import { Outlet } from "react-router-dom";
import Side from "../components/home/Side";
import { assets } from "../assets/assets";
import Header from '../components/Dashboard/Header'



function FacilityOwnerLayout() {
    return (
        <div className="flex w-full">
            <Side />
            <div className="pl-0 md:pl-64 w-full"> 
                <div>
                    <Header
                        title='Facility'
                        userName='Interns'
                        picture={<img src={assets.intern} alt='profile_img'/>}
                    />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default FacilityOwnerLayout;