import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL1
export const logout = async () => {
  try {
    const accessToken = localStorage.getItem('access_token')?.trim();
    const refreshToken = localStorage.getItem('refresh_token')?.trim();

    const response = await axios.post(
      `${base_url}/api/v1/auth/logout/`,
      { refresh: refreshToken },  
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        }
      }
    );

    // Clean localStorage
    ['access_token','refresh_token','userRole','email','farmerProfile','operatorProfile']
      .forEach(k => localStorage.removeItem(k));

    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    ['access_token','refresh_token','userRole','email','farmerProfile','operatorProfile']
      .forEach(k => localStorage.removeItem(k));
    throw error;
  }
};
