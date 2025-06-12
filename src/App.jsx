import { Routes, Route } from 'react-router-dom'
import AgriconHome from './pages/AgriconHome'
import SignupLanding from './pages/SignupLanding'

function App() {
  

  return (
    <Routes>
        <Route path='/' element={<AgriconHome />}/>
        <Route path='/roles' element={<SignupLanding />}/>
    </Routes>
  )
}


export default App;
