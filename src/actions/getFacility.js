
import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL2
//get single facility
export const getFacilityById = async (facilityId) => {
  const accessToken = localStorage.getItem('access_token');
  // if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.get(
      `${base_url}/api/v1/facilities/${facilityId}`,
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