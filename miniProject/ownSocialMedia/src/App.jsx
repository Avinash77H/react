import Home from './components/Home'
import CreatePost from './components/CreatePost'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/createpost" element={ <CreatePost/>}></Route>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}

export default App
