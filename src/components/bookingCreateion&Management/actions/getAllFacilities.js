import axios from 'axios';

export const fetchAllFacilities = async () => {
  try {
    const response = await axios.get('https://agricon-express-backend.onrender.com/api/v1/facilities/', {
      headers: {
        'Authorization': 'Bearer YOUR_AUTH_TOKEN' 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error Fetching Facilities:', error);
    throw error;
  }
};