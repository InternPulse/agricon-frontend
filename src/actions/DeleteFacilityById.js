import axios from 'axios';


const base_url = import.meta.env.VITE_BASE_URL2
export const deleteFacilityById = async (facilityId) => {


  const accessToken = localStorage.getItem('access_token');
  
  if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.delete(
      `${base_url }/api/v1/facilities/${facilityId}`,  
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
