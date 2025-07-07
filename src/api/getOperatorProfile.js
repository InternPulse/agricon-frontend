

import axios from 'axios';

export const getOperatorProfile = async () => { 
    const accessToken = localStorage.getItem("access_token")
  try {
    const response = await axios.get(
      'https://agricon-django-backend.onrender.com/api/v1/auth/profile/operator/',
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
