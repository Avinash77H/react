
import './App.css'
import Navbar from './Products/components/Navbar'
import Home from './Products/pages/Home'
import Layout from './Products/pages/Layout'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Layout/>
      <ToastContainer/>
    </>
  )
}

export default App
