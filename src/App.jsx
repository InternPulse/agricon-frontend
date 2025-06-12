import { Routes, Route } from 'react-router-dom'
import AgriconHome from './pages/AgriconHome'
import SignupLanding from './pages/SignupLanding'
import PasswordReset from './pages/PasswordReset'
import OTP from "./page/OTP";


function App() {
  

  return (
    <Routes>
        <Route path='/' element={<AgriconHome />}/>
        <Route path='/roles' element={<SignupLanding />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
        <Route path='/otp' element={<OTP />}/>
    </Routes>
  )
}


export default App;
