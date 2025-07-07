import { Outlet } from "react-router-dom";


function SettingsLayout() {
    return (
       
            <div className="w-full">
                <Outlet />
            </div>
    );
}

export default SettingsLayout;