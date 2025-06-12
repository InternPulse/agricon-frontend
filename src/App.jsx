import { Routes, Route } from 'react-router-dom'
import AgriconHome from './pages/AgriconHome'
import SignupLanding from './pages/SignupLanding'
import PasswordReset from './pages/PasswordReset'

function App() {
  

  return (
    <Routes>
        <Route path='/' element={<AgriconHome />}/>
        <Route path='/roles' element={<SignupLanding />}/>
        <Route path='/reset-password' element={<PasswordReset />}/>
    </Routes>
  )
}


export default App;
