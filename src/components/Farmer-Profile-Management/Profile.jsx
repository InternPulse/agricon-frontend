import React, { useEffect, useState } from 'react';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { ClipLoader } from 'react-spinners';
import { farmerProfileReg } from '../../actions/farmerProfileReg';

// Helper component for displaying or editing a detail row
const DetailRow = ({ label, name, value, onChange, isEditing, type = 'text' }) => (
    <div className='flex flex-col gap-1'>
        <label className='text-[#475367] font-medium'>{label}</label>
        {isEditing ? (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
        ) : (
            <p className='text-[#1D2739] font-normal'>{value || 'N/A'}</p>
        )}
    </div>
);

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Define a constant for the localStorage key to avoid typos
    const FARMER_PROFILE_STORAGE_KEY = "farmerProfile";
    const EMAIL_STORAGE_KEY = "email"; // Assuming email is stored separately and consistently

    // Load initial data from localStorage when the component mounts
    useEffect(() => {
        const farmerData = localStorage.getItem(FARMER_PROFILE_STORAGE_KEY);
        const farmerEmail = localStorage.getItem(EMAIL_STORAGE_KEY);

        if (farmerData) {
            const parsedData = JSON.parse(farmerData);
            setProfileData({
                firstName: parsedData.firstName || '',
                lastName: parsedData.lastName || '',
                email: farmerEmail || '', // Email is separate but included in profileData state
                phone: parsedData.phone || '',
                address: parsedData.address || '',
            });
        } else {
            // If no farmerProfile data, at least set the email if available
            setProfileData(prev => ({ ...prev, email: farmerEmail || '' }));
        }
    }, []); // Empty dependency array means this runs only once on mount

    // Handler for input changes in edit mode
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to save/update the profile
    const handleSave = async () => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);
        try {
            // Send updated profileData to the backend
            const response = await farmerProfileReg(profileData);

            // After successful update, update localStorage using the correct key
            localStorage.setItem(FARMER_PROFILE_STORAGE_KEY, JSON.stringify({
                firstName: profileData.firstName,
                lastName: profileData.lastName,
                phone: profileData.phone,
                address: profileData.address,
            }));
            // Update email in localStorage if it was also changed/managed here
            localStorage.setItem(EMAIL_STORAGE_KEY, profileData.email);

            setSuccessMessage("Profile updated successfully!");
            setIsEditing(false); // Exit editing mode
        } catch (err) {
            console.error("Error updating profile:", err);
            // Accessing error message from response, or fallback to generic
            setError(err.response?.data?.message || err.message || "Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    // Function to cancel editing and revert to original data from localStorage
    const handleCancel = () => {
        const farmerData = localStorage.getItem(FARMER_PROFILE_STORAGE_KEY);
        const farmerEmail = localStorage.getItem(EMAIL_STORAGE_KEY);

        if (farmerData) {
            const parsedData = JSON.parse(farmerData);
            setProfileData({
                firstName: parsedData.firstName || '',
                lastName: parsedData.lastName || '',
                email: farmerEmail || '', // Make sure email reverts correctly
                phone: parsedData.phone || '',
                address: parsedData.address || '',
            });
        } else {
            // If no farmerProfile data, revert to empty or just the email if available
            setProfileData(prev => ({ 
                firstName: '', 
                lastName: '', 
                phone: '', 
                address: '', 
                email: farmerEmail || '' 
            }));
        }
        setIsEditing(false);
        setError(null);
        setSuccessMessage(null);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex inter flex-col gap-8 w-full'>
                <div className='flex flex-col gap-8 bg-white px-4 py-4 rounded'>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-[16px] text-[#1a1a1a]'>Personal details</h1>
                        <MdOutlineModeEditOutline
                            onClick={() => {
                                if (isEditing) {
                                    handleCancel();
                                } else {
                                    setIsEditing(true);
                                }
                            }}
                            className='border p-1 rounded-lg border-[#808080] text-3xl cursor-pointer'
                            title={isEditing ? 'Cancel' : 'Edit'}
                        />
                    </div>

                    {loading && <p className="text-blue-500 flex items-center gap-2"><ClipLoader color="#2563eb" size={18} />Updating profile...</p>}
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    {successMessage && <p className="text-green-500 text-sm mt-1">{successMessage}</p>}

                    <div className='grid md:grid-cols-2 gap-10 md:text-[14px] text-[12px]'>
                        <DetailRow
                            label='First Name'
                            name='firstName'
                            value={profileData.firstName}
                            onChange={handleChange}
                            isEditing={isEditing}
                        />
                        <DetailRow
                            label='Last Name'
                            name='lastName'
                            value={profileData.lastName}
                            onChange={handleChange}
                            isEditing={isEditing}
                        />
                        <DetailRow
                            label='Email Address'
                            name='email'
                            value={profileData.email}
                            onChange={handleChange}
                            isEditing={isEditing}
                            type='email'
                        />
                        <DetailRow
                            label='Phone Number'
                            name='phone'
                            value={profileData.phone}
                            onChange={handleChange}
                            isEditing={isEditing}
                            type='tel'
                        />
                        <DetailRow
                            label='Facility Address'
                            name='address'
                            value={profileData.address}
                            onChange={handleChange}
                            isEditing={isEditing}
                        />
                    </div>

                    {isEditing && (
                        <div className="flex justify-end gap-4 mt-3">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                disabled={loading}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-[#02402D] text-white rounded-md disabled:opacity-50 flex items-center justify-center gap-2"
                                disabled={loading}
                            >
                                {loading ? <ClipLoader color="#fff" size={20} /> : 'Save Changes'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;