import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get roles from localStorage
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole); // Store it in another string variable
    }
    setLoading(false); 
  }, []);

  //get roles from login
  const login = (role) => {
    setUserRole(role);
    localStorage.setItem('userRole', role); // Store the role string
  };


  // Helper to check if a user is logged in
  const isAuthenticated = !!userRole;

  return (
    <AuthContext.Provider value={{ userRole, login, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};