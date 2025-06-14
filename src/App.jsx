import { Routes, Route } from 'react-router-dom'
import AgriconHome from './pages/landingPage/AgriconHome'
import SignupLanding from './pages/authentication/SignupLanding'
import PasswordReset from './pages/authentication/PasswordReset'
import OTP from "./pages/authentication/OTP";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";
import ForgotPassword from './pages/authentication/ForgotPassword';
import ResetPassword from './pages/authentication/ResetPassword'

function App() {
  return (
    <Routes>
        <Route path='/' element={<AgriconHome />}/>
        <Route path='/roles' element={<SignupLanding />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
        <Route path='/reset-success' element={<ResetPassword />}/>
        <Route path='/otp' element={<OTP />}/>
    </Routes>
  )
}

export default App;
