import Img from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container-fluid'>
                <div className='logo'>
                    <img src={Img} alt='image' style={{ height: '50px', width: '50px' }}></img>
                    <h2>VR PRINTERS</h2>
                </div>
                <nav>
                    <div className='header-links nav'>
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/about-us' className='nav-link'>About us</Link>
                        <Link to='/services' className='nav-link'>Services</Link>
                        <Link to='/contact-us' className='nav-link'>Contact us</Link>
                    </div>
                </nav>

            </div>

            <div className='logo-center'>
                <img src={Img} alt='image'></img>
                <h2>VR PRINTERS</h2>
                <p>PRINTING | ADVERTISING | MARKETING</p>
            </div>
        </header>
    )
}

export default Header