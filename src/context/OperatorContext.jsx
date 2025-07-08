import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const OperatorContext = createContext();

const OperatorProvider = ({ children }) => {
  //  I am using this for my token gotten from 
  const access = import.meta.env.VITE_ACCESS_TOKEN;
  const refresh = import.meta.env.VITE_REFRESH_TOKEN;

  //  Initializing my tokens it can also accept  to accepts logged in user token
  const [accessToken, setAccessToken] = useState(()=>localStorage.getItem('accessToken') ||  access);
  const [refreshToken, setRefreshToken] = useState(()=>localStorage.getItem('refreshToken')||refresh);

  useEffect(() => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}, [accessToken, refreshToken]);


  const [operator, setOperator] = useState(()=>{
    const savedOperator = localStorage.getItem('operator');
    return savedOperator ? JSON.parse(savedOperator):{}
  });
  const [operatorData, setOperatorData] = useState({
    id: '',
    facilityName: '',
    address: '',
    type: '',
    capacity: '',
    operatingHours: '',
    dailyRate: '',
    description: '',
    image: '',
    contact: '',
  });

  //my useEffect helps to save operator to localStorage whenever it changes
  useEffect(()=>{
    localStorage.setItem('operatoe', JSON.stringify(operator))
  },[operator])

  // i am putting this here for logged  in users
  const login = ({access, refresh})=>{
    setAccessToken(access);
    setRefreshToken(refresh)
  }

  //  Refresh token function 
  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/token/refresh/',
        { refresh: refreshToken }
      );
      setAccessToken(response.data.access);
      return response.data.access;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  
  const apiRequest = async (config) => {
    try {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      return await axios(config);
    } catch (error) {
      if (error.response?.status === 401 && refreshToken) {
        const newAccess = await refreshAccessToken();
        config.headers.Authorization = `Bearer ${newAccess}`;
        return await axios(config);
      }
      throw error;
    }
  };

  // function Fetching  operator details from postman
  const fetchOperator = async () => {
    try {
      const response = await apiRequest({
        url: 'https://agricon-django-backend.onrender.com/api/v1/auth/profile/operator/',
        method: 'GET',
      });
      setOperator(response.data);
    } catch (error) {
      console.error('Error fetching operator profile:', error);
    }
  };

  

  // this function runs when access token changes
  useEffect(() => {
    fetchOperator();
  }, []); 

  // function to allow user change password
  const changePassword = async (oldPassword, newPassword1, newPassword2) => {
    try {
      const response = await apiRequest({
        url: 'https://agricon-django-backend.onrender.com/api/v1/auth/change-password/',
        method: 'POST',
        data: {
          old_password: oldPassword,
          new_password1: newPassword1,
          new_password2: newPassword2,
        },
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Password changed successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error changing password:', error.response?.data || error.message);
      throw error;
    }
  };

  // fntion to upload facility image   to Cloudinary
  const uploadToCloudinary = async (file) => {
    const cloudName = 'dvp0efq26';
    const uploadPreset = 'agricon-preset';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  };

  //  Add Facility
  const addFacility = async (facilityData) => {
    try {
      const response = await apiRequest({
        url: 'https://agricon-express-backend.onrender.com/api/v1/facilities/',
        method: 'POST',
        data: {
          operatorId: operator.id,
          location: facilityData.address,
          pricePerDay: parseFloat(facilityData.dailyRate),
          type: facilityData.type,
          available: true,
          capacity: parseInt(facilityData.capacity),
          contact: facilityData.contact || 'N/A',
          name: facilityData.facilityName,
          facilityImage: [facilityData.image],
          description: facilityData.description,
        },
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Facility added successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding facility:', error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <OperatorContext.Provider
      value={{
        operator,
        setOperator,
        operatorData,
        setOperatorData,
        changePassword,
        addFacility,
        uploadToCloudinary,
      }}
    >
      {children}
    </OperatorContext.Provider>
  );
};

export default OperatorProvider;
