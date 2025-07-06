import { Outlet } from "react-router-dom";
import Side from "../components/home/Side";
import { getFarmerProfile } from "../api/getFarmerProfile";
import { useCallback, useEffect, useState } from "react";
import { ClipLoader } from 'react-spinners';
import Header from '../components/Dashboard/Header';

// Define your default profile details
const DEFAULT_PROFILE_DETAILS = {
    name: "Farmer", 
    firstName: "Farmer", 
    address: "N/A", 
    phone: "N/A", 
};

const DEFAULT_INITIAL_DISPLAY = "?";

function FarmerLayout() {
    // If localStorage is empty or parsing fails, use DEFAULT_PROFILE_DETAILS.
    const [farmerData, setFarmerData] = useState(() => {
        const savedProfile = localStorage.getItem("farmerProfile");
        if (savedProfile) {
            try {
                return JSON.parse(savedProfile);
            } catch (e) {
                console.error("Failed to parse farmerProfile from localStorage:", e);
                localStorage.removeItem("farmerProfile"); // Clear corrupt data
                return DEFAULT_PROFILE_DETAILS;
            }
        }
        return DEFAULT_PROFILE_DETAILS;
    });

    const [loading, setLoading] = useState(true);

    const getProfile = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getFarmerProfile(); 
            console.log("Fetched farmer profile:", data);

            // Store the fetched data in localStorage
            localStorage.setItem("farmerProfile", JSON.stringify(data));
            setFarmerData(data); 
        } catch (error) {
            console.error("Error loading farmer profile:", error);
            // If fetching fails, ensure localStorage has default data
            localStorage.setItem("farmerProfile", JSON.stringify(DEFAULT_PROFILE_DETAILS));
            setFarmerData(DEFAULT_PROFILE_DETAILS); 
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    // Determine the user name to display
    const displayUserName = farmerData?.firstName || farmerData?.name || DEFAULT_PROFILE_DETAILS.name;

    // Determine the first letter for the picture display
    const displayInitial = displayUserName.charAt(0).toUpperCase() || DEFAULT_INITIAL_DISPLAY;

    // Create the JSX element for the picture prop
    const displayPictureElement = (
        <span
            className="bg-[#044b1c] text-2xl text-green-50 font-bold px-2 rounded-full"
        >
            {displayInitial}
        </span>
    );

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <ClipLoader color='#02402D' />
            </div>
        );
    }

    return (
        <div className="flex w-full">
            <Side
                userName={displayUserName}
                picture={displayPictureElement}
            />
            <div className="pl-0 lg:pl-64 w-full">
                <div>
                    <Header
                        title='Farmer'
                        userName={displayUserName}
                        picture={displayPictureElement}
                    />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default FarmerLayout;