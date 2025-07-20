
import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL2;
export const getOperatorBookingById = async (bookingId) => {
    const accessToken = localStorage.getItem("access_token");

    try {
        const response = await axios.get(
            `${base_url}/api/v1/bookings/${bookingId}`, 
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        console.log(response.data)
      return response.data;
    } catch (error) {
        console.error('Error getting single bookings:', error);

        let displayMessage = 'Failed to  get single bookings:. Please try again.'
        throw new Error(displayMessage);
    }
};