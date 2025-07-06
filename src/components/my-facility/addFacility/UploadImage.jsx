import React, { useRef } from 'react';
import { FaUpload } from 'react-icons/fa'; 

const UploadImage = ({ handleChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mb-4">
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
      </button>
    </div>
  );
};

export default UploadImage; 