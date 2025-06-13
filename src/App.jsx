import { Routes, Route } from 'react-router-dom'
import AgriconHome from './pages/AgriconHome'
import SignupLanding from './pages/SignupLanding'
import PasswordReset from './pages/PasswordReset'
import OTP from "./pages/OTP";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword'

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
