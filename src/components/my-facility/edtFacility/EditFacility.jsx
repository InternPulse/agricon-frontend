

function Editfacility({onSaveSuccess}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd handle form submission here (e.g., API call)
    console.log("Saving facility...");
    
    // Simulate a successful save and trigger the success callback
    if (onSaveSuccess) {
      onSaveSuccess();
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="facilityName" className="block text-gray-700 text-sm font-bold mb-2">Facility Name</label>
          <input
            id="facilityName"
            className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="facilityName"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            id="address"
            className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="facilityType" className="block text-gray-700 text-sm font-bold mb-2">Facility Type</label>
          <input
            id="facilityType"
            className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="facilityType"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="climateControlType" className="block text-gray-700 text-sm font-bold mb-2">Climate control Type</label>
          <input
            id="climateControlType"
            className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="climateControlType"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="powerSource" className="block text-gray-700 text-sm font-bold mb-2">Power Source</label>
          <input
            id="powerSource"
            className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="powerSource"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="hourlyRate" className="block text-gray-700 text-sm font-bold mb-2">Hourly Rate</label>
          <input
            id="hourlyRate"
            className="shadow appearance-none border border-gray-400 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="hourlyRate"
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

export default Editfacility;