import './App.css'
import CreatePost from './components/CreatePost'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {

  const [togglePage,setTogglePage] = useState('posts')

  const RenderPage = (page)=>{
    setTogglePage(page)
  }

  return (
    <div>
      <div className='flex'>
        <Sidebar togglePage={togglePage} setTogglePage={setTogglePage}/>
        <Navbar/>
        <div className='absolute top-16 left-[50%]'>
        {togglePage === 'posts' ?<Posts/>:<CreatePost/>}
        </div>
      </div>
      
    </div>
  )
}

export default App
