import React, { useContext } from 'react';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { OperatorContext } from '../../context/OperatorContext';

const AddFacility = () => {
  const { operatorData, setOperatorData } = useContext(OperatorContext);

  const { facilityName, address, type, capacity, operatingHours } = operatorData;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setOperatorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:gap-12 gap-4 bg-white md:w-[656px] w-[290px] md:p-8 p-3 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-sembold text-md md:text-[20px]">Facility Information</h1>
          <MdCancel className="text-[#98A2B3] text-2xl cursor-pointer" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label className="text-[16px]">Facility Name</label>
            <input
              type="text"
              name="facilityName"
              value={facilityName}
              onChange={handleChange}
              placeholder="Enter name of facility"
              className="text-[#98A2B3CC] p-2 border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[16px]">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter full address of facility"
              className="text-[#98A2B3CC] p-2 border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[16px]">Facility Type</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={handleChange}
              placeholder="Select Facility Type"
              className="text-[#98A2B3CC] p-2 border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[16px]">Capacity</label>
            <input
              type="text"
              name="capacity"
              value={capacity}
              onChange={handleChange}
              placeholder="Enter Capacity"
              className="text-[#98A2B3CC] p-2 border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[16px]">Operating hours</label>
            <input
              type="text"
              name="operatingHours"
              value={operatingHours}
              onChange={handleChange}
              placeholder="Enter operating hours"
              className="text-[#98A2B3CC] p-2 border rounded-lg"
            />
          </div>

          <Link to="/facilityimage">
            <button
              type="button"
              className="bg-[#02402d] w-full p-4 rounded-lg cursor-pointer text-white"
            >
              Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddFacility;
