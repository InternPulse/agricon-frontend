import { Routes, Route } from 'react-router-dom'
import PasswordReset from './pages/PasswordReset';


function App() {
  

  return (
    <div>
      <Routes>
          {/* reset-password */}
          <Route path='/' element={<PasswordReset />}/>
      </Routes>
    </div>
  )
}


export default App;
