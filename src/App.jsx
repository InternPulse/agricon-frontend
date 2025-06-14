import { Routes, Route } from 'react-router-dom'
import PasswordReset from './pages/PasswordReset';
import Form from './components/form';
import Cards from './pages/Cards';


function App() {
  

  return (
    <div>
      <Routes>
          {/* reset-password */}
          <Route path='/' element={<Cards />}/>
          <Route path='/password-reset' element={<PasswordReset />}/>
      </Routes>
    </div>
  )
}


export default App;
