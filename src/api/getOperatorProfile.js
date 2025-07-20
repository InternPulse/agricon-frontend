import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL1

export const getOperatorProfile = async () => { 
    const accessToken = localStorage.getItem("access_token")
  try {
    const response = await axios.get(
      `${base_url}/api/v1/auth/profile/operator/`,
      { 
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error loading Operator Details:', error); 
    throw error;
  }
};
