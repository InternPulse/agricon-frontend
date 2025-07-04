import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const OperatorContext = createContext();

const OperatorProvider = ({ children }) => {
  const [operator, setOperator] = useState({});
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

  const token = import.meta.env.VITE_ACCESS_API_TOKEN;


  useEffect(() => {
    const fetchOperator = async () => {
      try {
        const response = await axios.get(
          'https://agricon-django-backend.onrender.com/api/v1/auth/profile/operator/',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOperator(response.data);
      } catch (error) {
        console.error('Error fetching operator profile:', error);
      }
    };
    fetchOperator();
  }, [token]);

  
  const changePassword = async (oldPassword, newPassword1, newPassword2) => {
    try {
      const response = await axios.post(
        'https://agricon-django-backend.onrender.com/api/v1/auth/change-password/',
        {
          old_password: oldPassword,
          new_password1: newPassword1,
          new_password2: newPassword2,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Password changed successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error changing password:', error.response?.data || error.message);
      throw error;
    }
  };

  
  const uploadToCloudinary = async (file) => {
    const cloudName = 'dvp0efq26';
    const uploadPreset = 'agricon-preset';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  };


  const addFacility = async (facilityData) => {
    try {
      const response = await axios.post(
        'https://agricon-express-backend.onrender.com/api/v1/facilities/',
        {
          operatorId: operator.id,
          location: facilityData.address,
          pricePerDay: parseFloat(facilityData.dailyRate),
          type: facilityData.type,
          available: true,
          capacity: parseInt(facilityData.capacity),
          contact: facilityData.contact || 'N/A',
          name: facilityData.facilityName,
          facilityImage: [facilityData.image], // single image in an array
          description: facilityData.description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
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
