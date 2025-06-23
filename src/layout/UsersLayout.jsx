import { Outlet } from "react-router-dom";
import Side from "../components/home/Side";

function UsersLayout() {
    return (
        <div className="flex w-full">
            <Side />
            <div className="pl-0 md:pl-64"> 
                <Outlet />
            </div>
        </div>
    )
}

export default UsersLayout;