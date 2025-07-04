import axios from 'axios';

export const getAllFacilities = async (facilityData) => { 
    const accessToken = localStorage.getItem("access_token")
  try {
    const response = await axios.get(
      'https://agricon-express-backend.onrender.com/api/v1/facilities/', 
      facilityData, 
      { 
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding facility:', error); 
    throw error;
  }
};