import React, { useState } from 'react'; // Import useState
import { addFacilities } from "../../../actions/addFacility"; // Your action to send data

function AddFacility({ onFacilityAdded }) { // Accept a callback prop for when facility is added
    // State to hold form input values
    const [formData, setFormData] = useState({
        location: '',
        pricePerDay: '',
        facilityType: '',
        available: '',
        contact: '',
        description: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        try {
            // Call your addFacilities action with the form data
            const response = await addFacilities(formData); 
            console.log("Facility added successfully:", response);
            
            // Optionally clear the form or provide feedback
            setFormData({
                location: '',
                pricePerDay: '',
                facilityType: '',
                available: '',
                contact: '',
                description: '',
            });

            // If a callback is provided, invoke it (e.g., to close modal or show success message)
            if (onFacilityAdded) {
                onFacilityAdded();
            }

        } catch (error) {
            console.error("Error adding facility:", error);
            // Handle error (e.g., display error message to user)
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                    <input
                        id="location"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="location"
                        value={formData.location} // Bind value to state
                        onChange={handleChange}    // Handle changes
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="pricePerDay" className="block text-gray-700 text-sm font-bold mb-2">Price Per Day</label>
                    <input
                        id="pricePerDay" // Changed ID to match name
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="pricePerDay" // Changed name to be descriptive
                        value={formData.pricePerDay}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="facilityType" className="block text-gray-700 text-sm font-bold mb-2">Facility Type</label>
                    <input
                        id="facilityType"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="available" className="block text-gray-700 text-sm font-bold mb-2">Available</label>
                    <input
                        id="available"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="available"
                        value={formData.available}
                        onChange={handleChange}
                    />
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
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                    <input
                        id="description"
                        className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#02402D] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save Facility
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddFacility;