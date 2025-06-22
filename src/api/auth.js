// src/api/auth.js
import axios from 'axios';

const API_URL = 'https://agricon-django-backend.onrender.com/api/v1/auth/';

// Register user
export const register = async (email, password, password2, role) => {
  try {
    const response = await axios.post(
      `${API_URL}register/`,
      { email, password, password2, role },
      { headers: { 'Content-Type': 'application/json' } }
    );
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Registration failed' };
  }
};

// Verify OTP
export const verifyOTP = async (email, code) => {
  try {
    const response = await axios.post(
      `${API_URL}verify-email-otp/`,
      { email, code },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'OTP verification failed' };
  }
};

// Resend OTP
export const resendOTP = async (email) => {
  try {
    const response = await axios.post(
      `${API_URL}otp/resend/`,
      { email },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Failed to resend OTP' };
  }
};

// Login (assumed endpoint)
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}login/`,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Login failed' };
  }
};

// Forgot Password (assumed endpoint)
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      `${API_URL}password/reset/`,
      { email },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Failed to send reset OTP' };
  }
};

// Verify Reset OTP (assumed endpoint)
export const verifyResetOTP = async (email, code) => {
  try {
    const response = await axios.post(
      `${API_URL}password/reset/verify-otp/`,
      { email, code },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Invalid OTP' };
  }
};

// Reset Password (assumed endpoint)
export const resetPassword = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}password/reset/confirm/`,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Password reset failed' };
  }
};

// Refresh Token
export const refreshToken = async () => {
  try {
    const response = await axios.post(
      `${API_URL}token/refresh/`,
      { refresh: localStorage.getItem('refresh_token') },
      { headers: { 'Content-Type': 'application/json' } }
    );
    localStorage.setItem('access_token', response.data.access);
    return response.data;
  } catch (error) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    throw error.response?.data || { detail: 'Token refresh failed' };
  }
};

// Axios Interceptor for Token Refresh
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
        return axios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);