import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL1

export const operatorProfileReg = async (profileData) => {
    const accessToken = localStorage.getItem("access_token");

    // --- Added validation for profileData ---
    if (!profileData || !profileData.firstName || !profileData.lastName || !profileData.phone || !profileData.address) {
        console.error('Error: Missing required profile data fields for registration.');
        throw new Error('All profile fields are required.');
    }
    try {
        const response = await axios.post(
            `${base_url}/api/v1/auth/profile/operator/`,
            profileData, 
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
            }
        );
        
        return response.data;
    } catch (error) {
        console.error('Error registering your profile:', error);
    }
};