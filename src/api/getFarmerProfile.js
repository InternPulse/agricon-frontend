

import axios from 'axios';

export const getFarmerProfile = async () => { 
    const accessToken = localStorage.getItem("access_token")
  try {
    const response = await axios.get(
      'https://agricon-django-backend.onrender.com/api/v1/auth/profile/farmer/', 
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