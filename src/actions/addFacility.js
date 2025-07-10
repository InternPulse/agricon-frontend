import axios from 'axios';

export const addFacilities = async (facilityData) => { 
  const accessToken = localStorage.getItem("access_token");

  try {
    const payload = {
      ...facilityData,
      // Ensure facilityImage is an array of URLs, not a File object
      facilityImage: facilityData.facilityImageURLArray || []
    };

    const response = await axios.post(
      'https://agricon-express-backend.onrender.com/api/v1/facilities/',
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
