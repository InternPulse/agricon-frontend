import axios from 'axios';

export const deleteFacilityById = async (facilityId) => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.delete(
      `https://agricon-express-backend.onrender.com/api/v1/facilities/${facilityId}`,  
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error deleting facility:', error);
  }
};
