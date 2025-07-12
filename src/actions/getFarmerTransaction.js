import axios from 'axios';

export const getFarmerTransaction = async () => {
    const accessToken = localStorage.getItem("access_token");
    const farmerDetails = localStorage.getItem("farmerProfile")
    const userId = farmerDetails ? JSON.parse(farmerDetails) : null;
    const { id } = userId || 'N/A'
    console.log(userId)

    try {
        const response = await axios.get(
            `https://agricon-dotnet-backend.onrender.com/api/v1/transaction/usertransactions/${id}`, 
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        console.log(response.data)
      return response.data;
    } catch (error) {
        console.error('Error getting your transactions:', error);

        let displayMessage = 'Failed to load your transactions. Please try again.'
        throw new Error(displayMessage);
    }
};