import { Routes, Route } from 'react-router-dom'
import SignupLanding from './pages/authentication/SignupLanding'
import PasswordReset from './pages/authentication/PasswordReset'
import OTP from "./pages/authentication/OTP";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/ResetPassword'
import Home from './pages/home/Home'
import Services from './pages/home/Services';
import AboutUs from './pages/home/AboutUs';
import Contact from './pages/home/Contact';
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Farmer-Profile-Management/Settings";
import ChangePassword from "./pages/Farmer-Profile-Management/changePassword"; 
import BookingForm from "./pages/infrastructure/BookingForm";
import FacilityDetails from "./pages/infrastructure/FacilityDetails";
import Facility from "./pages/infrastructure/Facility";
import BookingSummary from "./pages/infrastructure/BookingSummary";
import RootLayout from './layout/RootLayout';
import Side from './components/home/Side';
import UsersLayout from './layout/UsersLayout';
import FacilityLayout from './pages/infrastructure/Root';
import SettingsLayout from './pages/Farmer-Profile-Management/SettingsLayout';


function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/services' element={<Services />}/>
            <Route path='/about' element={<AboutUs />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/roles' element={<SignupLanding />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/forgot-password' element={<ForgotPassword />}/>
            <Route path='/reset-password' element={<PasswordReset />}/>
            <Route path='/reset-success' element={<ResetPassword />}/>
            <Route path='/otp' element={<OTP />}/>
          </Route>

          <Route path='user' element={<UsersLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<SettingsLayout />} >
              <Route index element={<Settings />} />
              <Route path="change-password" element={<ChangePassword />} />
             </Route> 
            <Route path="facility" element={<FacilityLayout />}>
              <Route index element={<Facility />}/>
              <Route path=":id" element={<FacilityDetails />} />
              <Route path="bookings" element={<BookingForm />} />
              <Route path="booking-summary" element={<BookingSummary />} />
            </Route>  
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;


