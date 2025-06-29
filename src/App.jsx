import React from 'react';
import {  Route, Routes, Outlet, Navigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import Header from './components/Header';

import PrivacyAndSecurity from './page/facilityOwnerProfile/PrivacyAndSecurity';
import FacilityOwnerProfileLayout from './page/facilityOwnerProfile/FacilityOwnerProfileLayout';
import OTP from './page/OTP';
import ChangePassword from './page/facilityOwnerProfile/ChangePassword';
import SuccesfulPasswordChange from './page/facilityOwnerProfile/SuccesfulPasswordChange';
import Profile from './page/facilityOwnerProfile/Profile';
import Notifications from './page/facilityOwnerProfile/Notification';

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="py-10 md:px-10 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-[#f8f3f3] inter">
      
    
      {/* <BrowserRouter> */}
        <Routes>
          <Route  path='/' element={<Navigate to='/profile' replace />}/>
          {/* Profile Routes */}
          <Route element={<FacilityOwnerProfileLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notifications />} />
            <Route path="privacy" element={<PrivacyAndSecurity />} />
          </Route>

          {/* Authentication / General Routes */}
          <Route path="otp" element={<OTP />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="passwordchanged" element={<SuccesfulPasswordChange />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
