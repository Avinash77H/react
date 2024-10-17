import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
