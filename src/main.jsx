import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import OperatorProvider from './context/OperatorContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <OperatorProvider>
     <App />
        </OperatorProvider>
     </BrowserRouter>,
)
