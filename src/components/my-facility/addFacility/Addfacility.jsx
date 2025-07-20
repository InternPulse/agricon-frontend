import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { FaUpload } from 'react-icons/fa';
import Modal from '../modal/Modal';
import SuccessState from './AddSuccess';
import { useNavigate } from 'react-router-dom';

const base_url = import.meta.env.VITE_BASE_URL2
const AddFacility = () => {
    const operatorDetails = JSON.parse(localStorage.getItem('operatorProfile') || 'null');
    const accessToken = localStorage.getItem('access_token');
    const operatorId = operatorDetails?.id;

    const [formData, setFormData] = useState({
        operatorId,
        name: '',
        location: '',
        pricePerDay: '',
        type: '',
        available: 'true',
        capacity: '',
        contact: '',
        description: '',
        facilityImage: null, 
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleButtonClick = () => fileInputRef.current.click();

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            let uploadedImageUrls = [];

            //Upload image first if provided
            if (formData.facilityImage) {
                const imageForm = new FormData();
                imageForm.append('images', formData.facilityImage); 

                console.log('Uploading image...');

                const { data: imageUploadRes } = await axios.post(
                    `${base_url}/api/v1/facilities/images`,
                    imageForm,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );


                // imageUrls from imageUploadRes.data
                if (imageUploadRes.data && Array.isArray(imageUploadRes.data.imageUrls)) {
                    uploadedImageUrls = imageUploadRes.data.imageUrls;
                } else if (imageUploadRes.data && typeof imageUploadRes.data.imageUrls === 'string') {
                    //if backend returns and array
                    uploadedImageUrls = [imageUploadRes.data.imageUrls];
                } else {
                    console.warn('Unexpected image URLs format within response data:', imageUploadRes.data);
                }

            }

            // Create facility 
            const corePayload = {
                operatorId,
                name: formData.name.trim(),
                location: formData.location.trim(),
                pricePerDay: parseFloat(formData.pricePerDay),
                type: formData.type,
                available: formData.available === 'true',
                capacity: parseInt(formData.capacity, 10),
                contact: formData.contact.trim(),
                description: formData.description.trim(),
                facilityImage: uploadedImageUrls, 
            };

            const { data: coreRes } = await axios.post(
                `${base_url}/api/v1/facilities/`,
                corePayload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const facilityId = coreRes.data.id;
            console.log('Facility created successfully. Facility ID:', facilityId);

            setIsSuccessModalOpen(true);

            // Automatically close the success modal and navigate after 3 seconds
            setTimeout(() => {
                setIsSuccessModalOpen(false);
                navigate('/operator/my-facility');
            }, 3000);

        } catch (err) {
            console.error('Error creating facility:', err);
            setError('An error occurred, try again');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-medium">Facility Name *</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Cold Storage Facility"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="location" className="block mb-1 font-medium">Address *</label>
                <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="pricePerDay" className="block mb-1 font-medium">Daily Rate (₦) *</label>
                <input
                    id="pricePerDay"
                    name="pricePerDay"
                    type="number"
                    min="0"
                    required
                    value={formData.pricePerDay}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="type" className="block mb-1 font-medium">Facility Type *</label>
                <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="" disabled hidden>Select Facility Type</option>
                    <option value="DRYER">Drying Facility</option>
                    <option value="COLD">Cold Storage</option>
                    <option value="STORAGE">Storage Facility</option>
                    <option value="PROCESSING">Processing Unit</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="available" className="block mb-1 font-medium">Available? *</label>
                <select
                    id="available"
                    name="available"
                    required
                    value={formData.available}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="" disabled hidden>Select availability</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="capacity" className="block mb-1 font-medium">Capacity *</label>
                <input
                    id="capacity"
                    name="capacity"
                    type="number"
                    min="1"
                    required
                    value={formData.capacity}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="contact" className="block mb-1 font-medium">Contact Number *</label>
                <input
                    id="contact"
                    name="contact"
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block mb-1 font-medium">Description *</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <div className="mb-6">
                <label className="block mb-1 font-medium">Facility Image *</label>
                <div className='border flex items-center justify-center py-10 rounded-md'>
                    <input
                        ref={fileInputRef}
                        type="file"
                        name="facilityImage"
                        accept="image/*"
                        className="hidden"
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="flex items-center gap-2 px-4 py-2 bg-[#02402D] text-white rounded-md"
                    >
                        <FaUpload />
                        {formData.facilityImage ? formData.facilityImage.name : 'Upload Image'}
                    </button>
                </div>
            </div>

            {error && (
                <div className="mb-4 p-2 text-sm text-red-700 bg-red-100 border border-red-300 rounded">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#02402D] text-white py-2 rounded-md hover:bg-green-800 flex justify-center items-center"
            >
                {loading ? <ClipLoader color="#fff" size={20} /> : 'Add Facility'}
            </button>

            {/* Success Modal */}
            <Modal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
                title="Facility Added"
            >
                <SuccessState message="Facility created successfully!" />
            </Modal>
        </form>
    );
};

export default AddFacility;