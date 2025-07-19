
import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL2

export const getOperatorBookings = async () => {
    const accessToken = localStorage.getItem("access_token");

    try {
        const response = await axios.get(
            `${base_url}/api/v1/bookings/operator/me`, 
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        // console.log(response.data)
      return response.data;
    } catch (error) {
        console.error('Error getting your bookings:', error);

        let displayMessage = 'Failed to load your bookings. Please try again.'
        throw new Error(displayMessage);
    }
};