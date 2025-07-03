import axios from 'axios';

export const addFacilities = async (facilityData) => { 
  const acessToken = localStorage.getItem('access_token')
  try {
    const response = await axios.post(
      'https://agricon-express-backend.onrender.com/api/v1/facilities/', 
      facilityData, 
      { 
        headers: {
          'Authorization': `Bearer ${acessToken}`, 
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding facility:', error); 
    throw error;
  }
};