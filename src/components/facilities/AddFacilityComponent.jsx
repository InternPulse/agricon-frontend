import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OperatorContext } from '../../context/OperatorContext';


const AddFacilityComponent = ({ nextModal  }) => {
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
      <div className="flex flex-col md:gap-12 gap-4  md:w-[656px] w-[290px] md:p-8 p-3  rounded-lg">
        
        {/* Form */}
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:gap-4 gap-2">
            <label className="md:text-[16px] text-[12px]">Facility Name</label>
            <input
              type="text"
              name="facilityName"
              value={facilityName}
              onChange={handleChange}
              placeholder="Enter name of facility"
              className="text-[#98A2B3CC] md:p-2 p-1 border rounded-lg"
            />
          </div>

          <div className="flex flex-col md:gap-4 gap-2">
            <label className="md:text-[16px] text-[12px]">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="Enter full address of facility"
              className="text-[#98A2B3CC] md:p-2 p-1 border rounded-lg"
            />
          </div>

          <div className="flex flex-col md:gap-4 gap-2">
            <label className="md:text-[16px] text-[12px]">Facility Type</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={handleChange}
              placeholder="Select Facility Type"
              className="text-[#98A2B3CC] md:p-2 p-1 border rounded-lg"
            />
          </div>

          <div className="flex flex-col md:gap-4 gap-2">
            <label className="md:text-[16px] text-[12px]">Capacity</label>
            <input
              type="text"
              name="capacity"
              value={capacity}
              onChange={handleChange}
              placeholder="Enter Capacity"
              className="text-[#98A2B3CC] md:p-2 p-1 border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <label className="md:text-[16px] text-[12px]">Operating hours</label>
            <input
              type="text"
              name="operatingHours"
              value={operatingHours}
              onChange={handleChange}
              placeholder="Enter operating hours"
              className="text-[#98A2B3CC] md:p-2 p-1 border rounded-lg"
            />
          </div>

          
            <button
              type="button"
              onClick={nextModal}
              className="bg-[#02402d] w-full md:p-4 p-2 rounded-lg cursor-pointer text-white"
            >
              Continue
            </button>
         
        </form>
      </div>
    </div>
  );
};

export default AddFacilityComponent;
