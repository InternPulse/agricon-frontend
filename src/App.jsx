import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Settings from "./pages/Farmer-Profile-Management/Settings";
import ChangePassword from "./pages/Farmer-Profile-Management/changePassword"; 

const App = () => {
  return (
    
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/settings/change-password" element={<ChangePassword />} />
    {/* other routes */}
  </Routes>
  )
}

export default App
