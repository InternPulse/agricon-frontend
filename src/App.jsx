import { Routes, Route } from 'react-router-dom'
import SignupLanding from './pages/authentication/SignupLanding'
import PasswordReset from './pages/authentication/PasswordReset'
import OTP from "./pages/authentication/OTP";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/ResetPassword'
import Home from './pages/home/Home'
import Navbar from './components/home/Navbar';
import Services from './pages/home/Services';
import Footer from './components/home/Footer';
import AboutUs from './pages/home/AboutUs';
import Contact from './pages/home/Contact';
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Farmer-Profile-Management/Settings";
import ChangePassword from "./pages/Farmer-Profile-Management/changePassword"; 
import BookingForm from "./pages/infrastructure/BookingForm";
// import ComingSoon from "./pages/infrastructure/ComingSoon";
import FacilityDetails from "./pages/infrastructure/FacilityDetails";
import Facility from "./pages/infrastructure/Facility";
import BookingSummary from "./pages/infrastructure/BookingSummary";


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/change-password" element={<ChangePassword />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/facility-details" element={<FacilityDetails />} />
          <Route path="/bookings" element={<BookingForm />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;


