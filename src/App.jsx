import { Routes, Route } from 'react-router-dom'
import SignupLanding from './pages/authentication/SignupLanding'
import PasswordReset from './pages/authentication/PasswordReset'
import EmailOTP from "./pages/authentication/EmailOtp";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";
import ForgotPassword from './pages/authentication/ForgotPassword';
import Home from './pages/home/Home'
import Services from './pages/home/Services';
import AboutUs from './pages/home/AboutUs';
import Contact from './pages/home/Contact';
// import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Farmer-Profile-Management/Settings";
import ChangePassword from "./pages/Farmer-Profile-Management/changePassword"; 
import BookingForm from "./pages/infrastructure/BookingForm";
import FacilityDetails from "./pages/infrastructure/FacilityDetails";
import Facility from "./pages/infrastructure/Facility";
import RootLayout from './layout/RootLayout';
// import UsersLayout from './layout/UsersLayout';
import FacilityLayout from './pages/infrastructure/Root';
import SettingsLayout from './pages/Farmer-Profile-Management/SettingsLayout';
import ResetPasswordOTP from './pages/authentication/RepasswordOTP';
import ResetPassword from './components/authentication/ResetPasswordForm';
import BookingHistory from './pages/BookingHistory/BookingHistory';
import FacilityOwnerLayout from './layout/FacilityOwnerLayout';
import FarmerLayout from './layout/Farmerlayout';
import FarmerDashboard from './pages/Dashboard/FarmerDashboard';
import FacilityOwnerDashboard from './pages/Dashboard/FacilityOwnerDashboard';
import { AuthProvider } from './context/AuthContext.jsx';
import MyFacilityLayout from './layout/MyFacilityLayout.jsx';
import MyFacilityPage from './pages/my-facility/MyFacilityPage.jsx';
import AllNotification from './pages/NotificationPage/AllNotification.jsx'
import Bookings from './pages/Bookings/Bookings.jsx';
import BookingHistoryLayout from './layout/BookingHistoryLayout.jsx';
import BookingList from './components/Bookings/BookingList.jsx';
import FarmerDetails from './components/Bookings/FarmerDetails.jsx';
import FacilityOwnerProfileLayout from './pages/facilityOwnerProfile/FacilityOwnerProfileLayout.jsx';
import SubHeader from './pages/facilityOwnerProfile/SubHeader.jsx';


function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/services' element={<Services />}/>
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/roles' element={<SignupLanding />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/verifyemailotp' element={<EmailOTP />}/>
            <Route path='/forgot-password' element={<ForgotPassword />}/>
            <Route path='/reset-password' element={<PasswordReset />} />
            <Route path='/reset-password-otp' element={<ResetPasswordOTP />} />
            <Route path='/successful-reset-password-form' element={<ResetPassword />} />
          </Route>

          {/* Routes for farmer Dashboard */}
          <Route path='farmer' element={<FarmerLayout />}>
              <Route index element={< FarmerDashboard />} />
              <Route path='notification' element={<AllNotification />}/>
              <Route path="facility" element={<FacilityLayout />}>
                  <Route index element={<Facility />}/>
                  <Route path=":id" element={<FacilityDetails />} />
                  <Route path="bookings" element={<BookingForm />} />
              </Route> 
              <Route path="booking-history" element={<BookingHistory />} />
              <Route path="settings/*" element={<SettingsLayout />} >
                  <Route index element={<Settings />} />
                  <Route path="change-password" element={<ChangePassword />} />
              </Route>  
        </Route>
        
            {/* Route for facility owner/operator */}
          <Route path="operator" element={<FacilityOwnerLayout />}>
                <Route index element={<FacilityOwnerDashboard />}/>
                <Route path='notification' element={<AllNotification />} />
                <Route path="bookings" element={<BookingHistoryLayout />} >
                  <Route index element={<BookingList />} />
                  <Route path=":id" element={<FarmerDetails />} />
                </Route>
                <Route path='my-facility' element={<MyFacilityLayout />}>
                  <Route index element={<MyFacilityPage />}/>
            </Route>
            <Route path="settings/*" element={<FacilityOwnerProfileLayout />} >
                  <Route index element={<SubHeader />} />
                  <Route path="change-password" element={<ChangePassword />} />
              </Route> 
          </Route>
          
        </Routes>
    </AuthProvider>
  )
}


export default App;

