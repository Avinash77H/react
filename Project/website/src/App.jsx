import Navbar from "./components/Layout"
import Topbar from "./components/Topbar"
import Home from "./pages/Home"
import { ObjectComp } from "./components/ObjectComp"

function App() {
  return (
    <div >
      <Topbar />
      {ObjectComp.layout}
      
    </div>
  )
}

export default App
