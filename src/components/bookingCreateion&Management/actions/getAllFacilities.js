import axios from 'axios';

export const fetchAllFacilities = async () => {
  try {

    const accessToken = localStorage.getItem('accessToken'); 
    const response = await axios.get('https://agricon-express-backend.onrender.com/api/v1/facilities/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error Fetching Facilities:', error);
    throw error;
  }
};