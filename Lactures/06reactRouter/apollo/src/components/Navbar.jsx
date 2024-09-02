import logo from '../assets/navlogo.jpg'
import {Link} from 'react-router-dom'

function Navbar (){
    return (
        <div className='flex border-2 border-black items-center justify-between p-4' >
            <div className='w-[10%]'>
                <img className='' src={logo} alt="nav logo" />
            </div>
            <div>
                <nav>
                    <ul className='flex gap-6'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar