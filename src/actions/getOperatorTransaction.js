import axios from 'axios';


const base_url = import.meta.env.VITE_BASE_URL2

export const getOperatortransaction = async () => {
    const accessToken = localStorage.getItem("access_token");
    const operatorDetails = localStorage.getItem("operatorProfile")
    const userId = operatorDetails ? JSON.parse(operatorDetails) : null;
    const { id } = userId || 'N/A'

    try {
        const response = await axios.get(
            `${base_url}/api/v1/transaction/usertransactions/${id}`, 
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        // console.log(response.data)
      return response.data;
    } catch (error) {
        console.error('Error getting your transactions:', error);

        let displayMessage = 'Failed to load your transactions. Please try again.'
        throw new Error(displayMessage);
    }
};