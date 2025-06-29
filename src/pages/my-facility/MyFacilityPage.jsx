import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import MyFacility from "../../components/my-facility/MyFacility";
import EmptyFacility from "../../components/my-facility/EmptyFacility";
import {ClipLoader} from 'react-spinners'

function MyFacilityPage() {
    const [hasFacilities, setHasFacilities] = useState(false);
    const [loading, setLoading] = useState(true); // Add a loading state

    // useEffect to simulate data fetching when the component mounts
    useEffect(() => {
        // --- Simulate fetching data ---
        const fetchFacilityData = () => {
            setLoading(true); // Set loading to true before fetching
            // In a real application, you would make an API call here, e.g.:
            // const response = await fetch('/api/facilities');
            // const data = await response.json();

            // Dummy data for demonstration:
            const dummyFacilities = [
                // { id: 1, name: "Grains Silos", /* ... other facility data ... */ },
                // { id: 2, name: "Cold Storage", /* ... */ }
            ]; // Uncomment facilities above to test 'MyFacility' rendering

            // Simulate network delay
            setTimeout(() => {
                if (dummyFacilities && dummyFacilities.length > 0) {
                    setHasFacilities(true);
                } else {
                    setHasFacilities(false);
                }
                setLoading(false); 
            }, 3000);
        };

        fetchFacilityData();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <ClipLoader color='#02402D' className='w-64'/>
            </div>
        );
    }

    return (
        <div className="py-10">
            <div className="px-10 flex items-center justify-end">
                <button
                    className="bg-[#02402D] text-green-50 px-5 py-4 rounded-md flex items-center gap-2"
                >
                    <FaPlus /> Added Facility
                </button>
            </div>

            {/* Conditionally render based on the hasFacilities state after loading */}
            {hasFacilities ? (
                <MyFacility />
            ) : (
                <EmptyFacility />
            )}
        </div>
    );
}

export default MyFacilityPage;