import axios from 'axios';

export const DeleteFacilityById = async ({ facilityId }) => {
    const accessToken = localStorage.getItem("access_token");

    try {
      const response = await axios.delete(
            `https://agricon-express-backend.onrender.com/api/v1/facilities/${facilityId}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        console.log(response.data)
      return response.data;
    } catch (error) {
        console.error('Error deleting facility:', error);

        let displayMessage = 'Failed to delete facility. Please try again.'
        throw new Error(displayMessage);
    }
};