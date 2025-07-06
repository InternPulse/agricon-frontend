// import React, { useState, useEffect } from 'react';
// import { addFacilities } from "../../../actions/addFacility";
// import { ClipLoader } from 'react-spinners';
// // import UploadImage from './UploadImage';

// function AddFacility({ onFacilityAdded }) {
//     const [loading, setLoading] = useState(false);
//     //getting operator details from the local storage
//     const operatorDetailsString = localStorage.getItem("operatorProfile")
//     //parsing the data intp json format
//     const operatorDetails = operatorDetailsString ? JSON.parse(operatorDetailsString) : null;
//     //destructuring the details and getting the actual id
//     const { id } = operatorDetails;
//     console.log(id);
//     const [formData, setFormData] = useState({
//         operatorId: `${id}`,
//         location: '',
//         pricePerDay: '',
//         facilityType: '',
//         available: '',
//         contact: '',
//         description: '',
//         capacity: ''
//     });

    
//     useEffect(() => {
        
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         // if (!operatorId) {
//         //     alert("Error: Operator ID is missing. Please log in again.");
//         //     setLoading(false);
//         //     return;
//         // }

//         const dataToSend = {
//             operatorId: id,
//             location: formData.location,
//             pricePerDay: Number(formData.pricePerDay),
//             type: formData.facilityType,
//             available: formData.available === 'true' ? true : false,
//             contact: formData.contact,
//             description: formData.description,
//         };

//         try {
//             const response = await addFacilities(dataToSend);
//             console.log("Facility added successfully:", response);

//             setFormData({
//                 operatorId: `${id}`,
//                 location: '',
//                 pricePerDay: '',
//                 facilityType: '',
//                 available: '',
//                 contact: '',
//                 description: '',
//                 capacity: ''
//             });

//             if (onFacilityAdded) {
//                 onFacilityAdded();
//             }

//         } catch (error) {
//             console.error("Error adding facility:", error);
//             if (error.response) {
//                 alert(`Failed to add facility: ${error.response.data.message || 'Please check your inputs and try again.'}`);
//             } else if (error.request) {
//                 alert("Failed to add facility. No response from server. Check your network connection.");
//             } else {
//                 alert("An unexpected error occurred while setting up the request.");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4">
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="operator"
//                     id="operator"
//                     value={formData.operatorId}
//                     onChange={handleChange}
//                     hidden
//                 />
//                 <div className="mb-4">
//                     <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
//                     <input
//                         id="location"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         placeholder='Enter full address of facility'
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="pricePerDay" className="block text-gray-700 text-sm font-bold mb-2">Daily Rate (#)</label>
//                     <input
//                         id="pricePerDay"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="number"
//                         name="pricePerDay"
//                         placeholder='5000'
//                         value={formData.pricePerDay}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="facilityType" className="block text-gray-700 text-sm font-bold mb-2">Facility Type</label>
//                     <select
//                         id="facilityType"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         name="facilityType"
//                         value={formData.facilityType}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="" disabled hidden>Select Facility Type</option>
//                         <option value="DRYER">Drying Facility</option>
//                         <option value="COLD">Cold Storage</option>
//                         <option value="STORAGE">Storage Facility </option>
//                         <option value="PROCESSING">Processing Unit</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="available" className="block text-gray-700 text-sm font-bold mb-2">Available</label>
//                     <select
//                         id="available"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         name="available"
//                         value={formData.available}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="" disabled hidden>Availability Status</option>
//                         <option value="true">Yes</option>
//                         <option value="false">FALSE</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Contact</label>
//                     <input
//                         id="contact"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="text"
//                         name="contact"
//                         value={formData.contact}
//                         onChange={handleChange}
//                         placeholder='+234 91*****741'
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="capacity" className="block text-gray-700 text-sm font-bold mb-2">Capacity</label>
//                     <input
//                         id="capacity"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="number"
//                         name="capacity"
//                         value={formData.capacity}
//                         onChange={handleChange}
//                         placeholder='Enter capacity'
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
//                     <textarea
//                         id="description"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         name="description"
//                         placeholder='Additional details about the facility'
//                         value={formData.description}
//                         onChange={handleChange}
//                         rows="3"
//                         required
//                     ></textarea>
//                 </div>
//                 {/* <div className="mb-4">
//                     <label htmlFor="facilityImage" className="block text-gray-700 text-sm font-bold mb-2">Facility Image</label>
//                     <input
//                         id="facilityImage"
//                         className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 h-20 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         type="file"
//                         name="facilityImage"
//                         value={formData.capacity}
//                         onChange={handleChange}
//                         accept="image/*"
//                         required
//                     />
                    
//                 </div> */}
//                 {/* <UploadImage /> */}
//                 <div className="flex justify-end">
//                     <button
//                         type="submit"
//                         className="bg-[#02402D] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ClipLoader color={"#ffffff"} size={20} />
//                         ) : (
//                             'Save Facility'
//                         )}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default AddFacility;




import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FaUpload } from 'react-icons/fa';

const AddFacility = () => {
    // Getting operator details from the local storage
    const operatorDetailsString = localStorage.getItem("operatorProfile");
    const accessToken = localStorage.getItem('access_token');
    const operatorDetails = operatorDetailsString ? JSON.parse(operatorDetailsString) : null;

    // Destructure the operatorId once. This will be a number.
    const operatorId = operatorDetails ? operatorDetails.id : null;

    // State for form data
    const [formData, setFormData] = useState({
        operatorId: operatorId,
        location: '',
        pricePerDay: 0,
        type: '',
        available: 'true',
        capacity: 0,
        contact: '',
        name: '', // Initialize name as empty string, will be filled by user input
        description: '',
        facilityImage: null,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);


    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        // Payload for creating the facility details
        const facilityDetailsPayload = {
            operatorId: formData.operatorId,
            location: formData.location,
            pricePerDay: parseInt(formData.pricePerDay, 10), // Changed to parseInt
            type: formData.type,
            available: formData.available === 'true',
            capacity: parseInt(formData.capacity, 10),
            contact: formData.contact,
            name: formData.name, // Use the name provided by the user input
            description: formData.description,
        };

        try {
            // Step 1: Create the facility details
            const detailsResponse = await axios.post(
                'https://agricon-express-backend.onrender.com/api/v1/facilities/',
                facilityDetailsPayload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            const facilityId = detailsResponse.data.id; // Get the ID of the newly created facility

            // Step 2: Upload the facility image if one is selected
            if (formData.facilityImage) {
                const imageFormData = new FormData();
                imageFormData.append('image', formData.facilityImage);
                imageFormData.append('facilityId', facilityId); // Send facilityId in form data

                await axios.post(
                    `https://agricon-express-backend.onrender.com/api/v1/facilities/${operatorId}/image`,
                    imageFormData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }
                );
            } else {
                console.warn("No image provided for facility, but facility details were created.");
            }

            alert('Facility and image added successfully!');
            navigate('/operator/my-facilities');

        } catch (err) {
            console.error('Full Axios Error Object:', err);
            console.error('Backend Error Response Data:', err.response?.data);

            let displayMessage = 'Failed to add facility. Please try again.';

            if (err.response) {
                if (err.response.data) {
                    if (typeof err.response.data === 'string') {
                        displayMessage = err.response.data;
                    } else if (err.response.data.message) {
                        displayMessage = err.response.data.message;
                    } else if (err.response.data.detail) {
                        displayMessage = err.response.data.detail;
                    } else if (Object.keys(err.response.data).length > 0) {
                        displayMessage = 'Validation failed: ' + JSON.stringify(err.response.data);
                    }
                } else {
                    displayMessage = `Server error: ${err.response.status} ${err.response.statusText}`;
                }
            } else if (err.request) {
                displayMessage = "No response from server. Check your network connection.";
            } else {
                displayMessage = `Error: ${err.message}`;
            }
            setError(displayMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Facility Name</label>
                <input
                    id="name"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='e.g., Agricon Cold Storage, XYZ Processing Plant'
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input
                    id="location"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder='Enter full address of facility'
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="pricePerDay" className="block text-gray-700 text-sm font-bold mb-2">Daily Rate (₦)</label>
                <input
                    id="pricePerDay"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="pricePerDay"
                    placeholder='5000'
                    value={formData.pricePerDay}
                    onChange={handleChange}
                    required
                    min="0"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Facility Type</label>
                <select
                    id="type"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled hidden>Select Facility Type</option>
                    <option value="DRYER">Drying Facility</option>
                    <option value="COLD">Cold Storage</option>
                    <option value="STORAGE">Storage Facility </option>
                    <option value="PROCESSING">Processing Unit</option>
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
                <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                <input
                    id="contact"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder='+234 9123456789'
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="capacity" className="block text-gray-700 text-sm font-bold mb-2">Capacity (Units)</label>
                <input
                    id="capacity"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder='Enter capacity (e.g., in tonnes, bags, etc.)'
                    required
                    min="1"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                    id="description"
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="description"
                    placeholder='Provide a detailed description of the facility, including features, specific dimensions, or any other relevant information.'
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
            </div>

            <div className="mb-6">
                <label htmlFor="facilityImage" className="block text-gray-700 text-sm font-bold mb-2">Facility Image</label>
                <input
                    id="facilityImage"
                    ref={fileInputRef}
                    className="hidden"
                    type="file"
                    name="facilityImage"
                    onChange={handleChange}
                    accept="image/*"
                    required
                />
                <button
                    type="button"
                    onClick={handleButtonClick}
                    className="flex items-center justify-center w-full py-2 px-3
                                bg-[#02402D] text-white rounded-md shadow-sm
                                hover:bg-green-800 transition
                                focus:outline-none focus:ring-2 focus:ring-green-700
                                text-sm font-medium"
                >
                    <FaUpload className="mr-2" />
                    {formData.facilityImage ? formData.facilityImage.name : 'Upload Image'}
                </button>
                {formData.facilityImage && (
                    <p className="text-gray-600 text-sm mt-2">Selected: {formData.facilityImage.name}</p>
                )}
            </div>

            {error && <p className="text-red-600 text-sm mb-4 bg-red-100 p-2 rounded-md border border-red-200">{error}</p>}

            <button
                type="submit"
                className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 transition disabled:opacity-50 flex items-center justify-center"
                disabled={loading}
            >
                {loading ? <ClipLoader color="#ffffff" size={20} /> : 'Add Facility'}
            </button>
        </form>
    );
};

export default AddFacility;