import axios from 'axios';

export const editFacilityById = async (facilityId, updatedData) => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.put(
      `https://agricon-express-backend.onrender.com/api/v1/facilities/${facilityId}`,
      updatedData, 
      { 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error editing facility:', error.response?.data || error.message || error);
    throw error; 
  }
};