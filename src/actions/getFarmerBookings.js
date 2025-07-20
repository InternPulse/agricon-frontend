
import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL2

//get Farmer personal bookings
export const getFarmerBookings = async () => {
  const accessToken = localStorage.getItem('access_token');
  // if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.get(
      `${base_url}/api/v1/bookings/farmer/me`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return data;
  } catch (error) {
    console.error('Error geting bookings error.messaga', error);
    throw error;
  }
};