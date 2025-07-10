import axios from 'axios';


//get operators facility
export const getAllFacilities = async () => {
    const accessToken = localStorage.getItem("access_token");
    const operatorDetailsString = localStorage.getItem("operatorProfile");
    const operatorDetails = operatorDetailsString ? JSON.parse(operatorDetailsString) : null;

    const operatorId = operatorDetails ? operatorDetails.id : null;

    try {
        const response = await axios.get(
            `https://agricon-express-backend.onrender.com/api/v1/facilities/${operatorId}/all`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
      return response.data;
    } catch (error) {
        console.error('Error getting your facility:', error);

        let displayMessage = 'Failed to load your facilities. Please try again.'
        throw new Error(displayMessage);
    }
};