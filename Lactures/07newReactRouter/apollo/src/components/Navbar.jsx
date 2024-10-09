import logo from '../assets/navlogo.jpg'
import {NavLink,Outlet} from 'react-router-dom'

function Navbar (){
    return (
        <div>
            <div className='flex border-2 border-black items-center justify-between p-4' >
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