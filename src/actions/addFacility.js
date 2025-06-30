import axios from 'axios';

export const addFacilities = async (facilityData) => { 
  try {
    const response = await axios.post(
      'https://agricon-express-backend.onrender.com/api/v1/facilities/', 
      facilityData, 
      { 
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUxMTk1NDc4LCJpYXQiOjE3NTExNTk0NzgsImp0aSI6ImQwNDllMjk5NzFmNjQzMjU4OWY5MWNkY2U5YmJiYjE3IiwidXNlcl9pZCI6IjIyYWEyYjMwLTc1NWQtNDFlNC05NWY4LTZmZjc3ZjJmMGNlOCIsImVtYWlsIjoibWFqZWZhbW91c0BnbWFpbC5jb20iLCJyb2xlIjoiT1BFUkFUT1IifQ.e9gMHoIiCrau8XWaRiOQEGqQTDnOHOmx7UvqnMlD6VE', 
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding facility:', error); 
    throw error;
  }
};