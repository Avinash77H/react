import React from 'react'
import {useState} from 'react'
import logo from '../assets/logo.svg'
import navLogo from '../assets/nav-logo.png'
import xmark from '../assets/x-mark.svg'

const menuItem = [
  {name:'Home',
    href:'#'
  },
  {
    name:'Shop',
    href:'#'
  },
  {
    name:'Product',
    href:'#'
  },
  {
    name:'Pages',
    href:'#'
  },
  {
    name:'Blog',
    href:'#'
  },
  {
    name:'Buy now',
    href:'#'
  }
]

function OwnNav() {

  const [isMenuOpen,setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='relative w-full  py-4 px-8 flex justify-between items-center'>
      <div className='w-24 sm:w-36'>
        <img src={logo} alt="logo" className='w-full p-2 '/>
      </div>
      <div className='hidden lg:block'>
        <nav className='flex space-x-4'>
          {menuItem.map((item)=>(
            <a key={item.name} href={item.href} className='font-semibold hover:text-red-500 '>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
       
      </div>

      <div className='flex items-center'>
      <button className='bg-black text-white rounded-lg px-4 py-2 hidden lg:block'>
        button
      </button>
      <button onClick={toggleMenu} className='lg:hidden '>
        <img src={navLogo} alt="nav-logo" className='w-6 h-6' />
      </button>
      </div>
      
      {isMenuOpen && (
          <div className='absolute top-0 left-0 border-2 w-full bg-gray-100'>
            <div className='flex justify-between items-center  px-8 '>
              <img src={logo} alt="navLogo" className='w-20 h-10' />
              <button onClick={toggleMenu}>
              <img src={xmark} alt="xmark logo" className='w-6 h-6' />
              </button>
            </div>
              <div className='mt-4'>
                <nav className='grid gap-4'>
                  {menuItem.map((item)=>(
                    <a key={item.name} href={item.href} className='bg-gray-100 hover:bg-gray-200 font-semibold hover:text-red-500 pl-12'>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>

             <div className='pl-10  mt-4 ' >
             <button className='bg-black text-white rounded-lg p-2 py-1   '>
                button
              </button>
             </div>
                
            </div>
            
        )}
   
    </div>
  )
}

export default OwnNav
