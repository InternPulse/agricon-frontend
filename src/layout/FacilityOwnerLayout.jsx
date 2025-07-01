import { Outlet } from "react-router-dom";
import Side from "../components/home/Side";
import Header from '../components/Dashboard/Header';
import { useCallback, useEffect, useState } from "react";
import { getOperatorProfile } from "../api/getOperatorProfile";
import { ClipLoader } from "react-spinners";

const DEFAULT_USER_NAME = "Operator"; // Default name for the user
const DEFAULT_INITIAL_DISPLAY = "?"; 

function FacilityOwnerLayout() {
    const [farmerData, setFarmerData] = useState(() => {
        const savedProfile = localStorage.getItem("operatorProfile");
        return savedProfile ? JSON.parse(savedProfile) : null;
    });
    const [loading, setLoading] = useState(true);

    const getProfile = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getOperatorProfile();
            // Store the fetched data in localStorage
            localStorage.setItem("operatorProfile", JSON.stringify(data));
            console.log("Fetched operator profile:", data);
            setFarmerData(data); 
        } catch (error) {
            console.error("Error loading operator profile:", error);
            setFarmerData(null); 
            localStorage.removeItem("operatorProfile"); 
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    const displayUserName = farmerData?.firstName || farmerData?.name || DEFAULT_USER_NAME;

    // Use the first letter of displayUserName, or the default initial if displayName is empty
    const displayInitial = displayUserName.charAt(0).toUpperCase() || DEFAULT_INITIAL_DISPLAY;

    // Create the JSX element for the picture prop
    const displayPictureElement = (
        <span
            className="bg-[#FFAC00] text-2xl text-green-50 font-bold px-2 rounded-full"
        >
            {displayInitial}
        </span>
    );

    if (loading && !farmerData) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <ClipLoader color='#02402D' />
            </div>
        );
    }

    return (
        <div className="flex w-full">
            <Side />
            <div className="pl-0 md:pl-64 w-full">
                <div>
                    <Header
                        title='Operator'
                        userName={displayUserName}
                        picture={displayPictureElement} 
                    />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default FacilityOwnerLayout;