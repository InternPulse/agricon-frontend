import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL2
export const addFacilities = async (facilityData) => { 
  const accessToken = localStorage.getItem("access_token");

  try {
    const payload = {
      ...facilityData,
      // Ensure facilityImage is an array of URLs, not a File object
      facilityImage: facilityData.facilityImageURLArray || []
    };

    const response = await axios.post(
      `${base_url}/api/v1/facilities/`,
      payload,
      { 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error adding facility:', error.response?.data || error.message); 
    throw error;
  }
};
