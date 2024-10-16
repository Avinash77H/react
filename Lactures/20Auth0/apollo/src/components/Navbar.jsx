import { useAuth0 } from '@auth0/auth0-react'
import logo from '../assets/navlogo.jpg'
import {NavLink,Outlet} from 'react-router-dom'

function Navbar (){
    const{loginWithRedirect,logout,isAuthenticated} = useAuth0()
    return (
        <div>

            <div className='flex border-2 border-black items-center justify-between p-4'>

            <div className='w-[10%]'>
                <img className='' src={logo} alt="nav logo" />
            </div>

            <div>
                <nav>
                    <ul className='flex gap-6'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>

                        {isAuthenticated ? (
                            <div className='flex gap-2'>
                                 <li><NavLink to='/user'>User</NavLink></li>
                                 <li><NavLink><button onClick={()=>logout({returnTo:window.location.origin})}>Logout</button></NavLink></li>
                            </div>
                            
                        ):(
                            <li><NavLink><button onClick={()=>loginWithRedirect()}>LogIn</button></NavLink></li>
                        )}
                    </ul>
                </nav>
            </div>
            </div>
            
            <div>
            <Outlet/>
            </div>

        </div>
        
    )
}
export default Navbar