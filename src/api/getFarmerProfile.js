

import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL1
export const getFarmerProfile = async () => { 
    const accessToken = localStorage.getItem("access_token")
  try {
    const response = await axios.get(
      `${base_url}/api/v1/auth/profile/farmer/`, 
      { 
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error loading farmer details:', error); 
    throw error;
  }
};