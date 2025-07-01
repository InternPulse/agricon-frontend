import axios from 'axios';

export const logout = async () => {
  try {
    // Get the tokens from local storage before sending the request
    const accessToken = localStorage.getItem('access_token'); 
    const refreshToken = localStorage.getItem('refresh_token'); 

    const response = await axios.post(
      'https://agricon-django-backend.onrender.com/api/v1/auth/logout/',
      {
        refresh_token: refreshToken
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

   //clear local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('email');
    localStorage.removeItem('farmerProfile');

    return response.data; // Return data to backed

  } catch (error) {
    console.error('Error logging out:', error);

    //removing all user data from the local storage even if there is error or network issues
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('email');
    localStorage.removeItem('farmerProfile');
   

    throw error; 
  }
};