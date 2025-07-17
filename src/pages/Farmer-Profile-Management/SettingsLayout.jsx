import { Outlet } from "react-router-dom";


function SettingsLayout() {
    return (
       
            <div className="w-full mt-20">
                <Outlet />
            </div>
    );
}

export default SettingsLayout;