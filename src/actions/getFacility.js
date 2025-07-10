// src/actions/getFacilityById.js
import axios from 'axios';

export const getFacilityById = async (facilityId) => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.get(
      `https://agricon-express-backend.onrender.com/api/v1/facilities/${facilityId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error(`Error fetching facility with ID ${facilityId}:`, error.response?.data || error.message || error);
    throw error;
  }
};