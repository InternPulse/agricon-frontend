import React, { useState, useEffect } from 'react';
import { addFacilities } from "../../../actions/addFacility";
import { ClipLoader } from 'react-spinners';

function AddFacility({ onFacilityAdded }) {
    const [loading, setLoading] = useState(false);
    const id = localStorage.getItem('id')
    const [formData, setFormData] = useState({
        operatorId: `${id}`,
        location: '',
        pricePerDay: '',
        facilityType: '',
        available: '',
        contact: '',
        description: '',
        capacity: ''
    });
    const [operatorId, setOperatorId] = useState(null);

    useEffect(() => {
        const storedOperatorId = localStorage.getItem('operatorId');
        if (storedOperatorId) {
            setOperatorId(storedOperatorId);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // if (!operatorId) {
        //     alert("Error: Operator ID is missing. Please log in again.");
        //     setLoading(false);
        //     return;
        // }

        const dataToSend = {
            operatorId: operatorId,
            location: formData.location,
            pricePerDay: Number(formData.pricePerDay),
            type: formData.facilityType,
            available: formData.available === 'true' ? true : false,
            contact: formData.contact,
            description: formData.description,
        };

        try {
            const response = await addFacilities(dataToSend);
            console.log("Facility added successfully:", response);

            setFormData({
                operatorId: `${id}`,
                location: '',
                pricePerDay: '',
                facilityType: '',
                available: '',
                contact: '',
                description: '',
                capacity: ''
            });

            if (onFacilityAdded) {
                onFacilityAdded();
            }

        } catch (error) {
            console.error("Error adding facility:", error);
            if (error.response) {
                alert(`Failed to add facility: ${error.response.data.message || 'Please check your inputs and try again.'}`);
            } else if (error.request) {
                alert("Failed to add facility. No response from server. Check your network connection.");
            } else {
                alert("An unexpected error occurred while setting up the request.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <input type="text" name="operator" id="operator" value={operatorId} hidden/>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                    <input
                        id="location"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="pricePerDay" className="block text-gray-700 text-sm font-bold mb-2">Price Per Day</label>
                    <input
                        id="pricePerDay"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="pricePerDay"
                        value={formData.pricePerDay}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="facilityType" className="block text-gray-700 text-sm font-bold mb-2">Facility Type</label>
                    <select 
                        id="facilityType"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="facilityType"
                        value={formData.facilityType} 
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Select Facility Type</option> 
                        <option value="Drying Facility">Drying Facility</option>
                        <option value="Cold Storage">Cold Storage</option>
                        <option value="Storage Facility">Storage Facility</option>
                        <option value="Processing Unit">Processing Unit</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="available" className="block text-gray-700 text-sm font-bold mb-2">Available</label>
                    <select
                        id="available"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="available"
                        value={formData.available}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Availability Status</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Contact</label>
                    <input
                        id="contact"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="capacity" className="block text-gray-700 text-sm font-bold mb-2">Capacity</label>
                    <input
                        id="capacity"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <textarea
                        id="description"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#02402D] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <ClipLoader color={"#ffffff"} size={20} />
                        ) : (
                            'Save Facility'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddFacility;