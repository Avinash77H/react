
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './Context/AppContext.jsx'



createRoot(document.getElementById('root')).render(

<AppContext>
  <App />
</AppContext>

 
  
)
