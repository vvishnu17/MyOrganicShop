import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <li className='home'><Link to='/home' className='homelink'>Home</Link></li>
            <li><Link to='/about-us'>AboutUs</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/contact'>Contact</Link></li> 
        </nav>
    )
}

export default Navbar
