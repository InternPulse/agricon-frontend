import React, { useState, useEffect } from 'react'; // Import useEffect
import { editFacilityById } from '../../../actions/editFacilityById';
import { ClipLoader } from 'react-spinners';
import { getFacilityById } from '../../../actions/getFacility';

function Editfacility({ facilityId, onSaveSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    pricePerDay: '',
    type: '',
    available: '',
    capacity: '',
    contact: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Effect to fetch facility data when the component mounts or facilityId changes
  useEffect(() => {
    const fetchFacilityData = async () => {
      if (!facilityId) {
        setInitialLoading(false);
        setError("No facility ID provided for editing.");
        return;
      }
      try {
        setInitialLoading(true);
        setError(null);
        const facilityData = await getFacilityById(facilityId);
        console.log('EditFacility: Fetched facility data:', facilityData);

        // Pre-populate formData with fetched data
        setFormData({
          name: facilityData.facility.name || '',
          location: facilityData.facility.location || '',
          pricePerDay: facilityData.facility.pricePerDay ? String(facilityData.facility.pricePerDay) : '',
          type: facilityData.facility.type || '',
          available: String(facilityData.facility.available),
          capacity: facilityData.facility.capacity ? String(facilityData.facility.capacity) : '',
          contact: facilityData.facility.contact || '',
          description: facilityData.facility.description || '',
        });
        
      } catch (err) {
        console.error('Error fetching facility data:', err);
        setError(err.response?.data?.message || err.message || 'Failed to load facility data.');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchFacilityData();
  }, [facilityId]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null); 

    try {
      // Prepare data for submission, ensuring correct types for backend
      const dataToSubmit = {
        name: formData.name.trim(),
        location: formData.location.trim(),
        pricePerDay: parseFloat(formData.pricePerDay), 
        type: formData.type,
        available: formData.available === 'true', 
        capacity: parseInt(formData.capacity, 10), 
        contact: formData.contact.trim(),
        description: formData.description.trim(),
      };

      const response = await editFacilityById(facilityId, dataToSubmit); 
      console.log('Facility updated successfully:', response);

      if (onSaveSuccess) {
        onSaveSuccess();
      }
    } catch (err) {
      console.error('Failed to save facility:', err);
      setError(err.response?.data?.message || err.message || 'Failed to update facility.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <ClipLoader size={30} color={"#02402D"} />
        <p className="ml-2">Loading facility data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-700 bg-red-100 border border-red-300 rounded">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
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

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#02402D] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color={"#ffffff"} /> : "Save Facility"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editfacility;