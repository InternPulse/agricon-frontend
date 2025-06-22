import { Routes, Route,Navigate } from 'react-router-dom'
import AgriconHome from './pages/landingPage/AgriconHome'
import SignupLanding from './pages/authentication/SignupLanding'
import PasswordReset from './pages/authentication/PasswordReset'
import EmailOTP from "./pages/authentication/EmailOtp";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/SuccessPasswordReset'; 
import ResetPasswordOTP from './pages/authentication/RepasswordOTP';


function App() {
  return (
    <Routes>
        <Route path='/' element={<AgriconHome />}/>
        <Route path='/roles' element={<SignupLanding />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/reset-password-otp' element={<ResetPasswordOTP />} />
        <Route path='/login' element={<Login />}/>

        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
        <Route path='/reset-success' element={<ResetPassword />}/>
        <Route path='/verifyemailotp' element={<EmailOTP />}/>
        <Route path='/successful-reset-password-form' element={<ResetPassword />} />
    </Routes>
  )
}

export default App;
