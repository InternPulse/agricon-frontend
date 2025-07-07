 import axios from 'axios';
 
 export const addFacilities = async (facilityData) => { 
   const accessToken = localStorage.getItem("access_token");
   
   try {
     const response = await axios.post(
       'https://agricon-express-backend.onrender.com/api/v1/facilities/25/image', 
       facilityData, 
       { 
         headers: {
           'Authorization': `Bearer ${accessToken}`
         }
       }
     );
     return response.data;
   } catch (error) {
     console.error('Error adding facility:', error); 
     throw error;
   }
 };
 