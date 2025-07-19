import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL2;


//get operators facility
export const getAllFacilities = async () => {
    const accessToken = localStorage.getItem("access_token");
    const operatorDetailsString = localStorage.getItem("operatorProfile");
    const operatorDetails = operatorDetailsString ? JSON.parse(operatorDetailsString) : null;

    const operatorId = operatorDetails ? operatorDetails.id : null;

    try {
        const response = await axios.get(
            `${base_url}/api/v1/facilities/${operatorId}/all`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error getting your facility:', error);

        let displayMessage = 'Failed to load your facilities. Please try again.'
        throw new Error(displayMessage);
    }
};