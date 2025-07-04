import React, { useState, useEffect, useCallback } from 'react';
import { FaPlus } from "react-icons/fa";
import MyFacility from "../../components/my-facility/MyFacility";
import EmptyFacility from "../../components/my-facility/EmptyFacility";
import { ClipLoader } from 'react-spinners';
import Modal from '../../components/my-facility/modal/Modal';
import AddFacility from '../../components/my-facility/addFacility/Addfacility';
import { getAllFacilities } from '../../actions/getFacilities'; // Assuming this fetches all facilities

function MyFacilityPage() {
    const [facilities, setFacilities] = useState([]); // Store the actual facilities data
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    // Function to fetch facilities, wrapped in useCallback to prevent unnecessary re-creations
    const fetchFacilities = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getAllFacilities();
            setFacilities(data); 
            console.log(setFacilities)
        } catch (error) {
            console.error("Error loading facilities:", error);
            setFacilities([]); 
        } finally {
            setLoading(false);
        }
    }, []); 

    
    useEffect(() => {
        fetchFacilities();
    }, [fetchFacilities]); 

    const handleFacilityAdded = () => {
        setIsAddModalOpen(false); 
        fetchFacilities(); 
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <ClipLoader color='#02402D' />
            </div>
        );
    }

    return (
        <div className="py-10">
            <div className="px-10 flex items-center justify-end">
                <button
                    className="bg-[#02402D] text-green-50 px-5 py-4 rounded-md flex items-center gap-2"
                    onClick={handleOpenAddModal}
                >
                    <FaPlus /> Add Facility
                </button>
            </div>

            {facilities.length > 0 ? (
                <MyFacility facilities={facilities} /> 
            ) : (
                <EmptyFacility />
            )}

            <Modal
                isOpen={isAddModalOpen}
                onClose={handleCloseAddModal}
                title="Add New Facility"
            >
                <AddFacility onFacilityAdded={handleFacilityAdded} />
            </Modal>
        </div>
    );
}

export default MyFacilityPage;