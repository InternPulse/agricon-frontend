
import axios from 'axios';


//get Farmer personal bookings
export const getFarmerBookings = async () => {
  const accessToken = localStorage.getItem('access_token');
  // if (!accessToken) throw new Error('Access token is missing.');

  try {
    const { data } = await axios.get(
      "https://agricon-express-backend.onrender.com/api/v1/bookings/farmer/me",
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