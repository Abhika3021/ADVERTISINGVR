import Img from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='footer-logo col-sm-4 col-xs'>
                        <div>
                            <img src={Img} alt='image' style={{ height: '50px', width: '50px' }}></img>
                            <h2>VR PRINTERS</h2>
                            <div className='bottomnav'>
                                <Link to='/' className='nav-link'>Home</Link>
                                <Link to='/about-us' className='nav-link'>About us</Link>
                                <Link to='/services' className='nav-link'>Services</Link>
                                <Link to='/contact-us' className='nav-link'>Contact us</Link>
                            </div>
                        </div>
                    </div>

                    <div className='footer-contact col-sm-4 col-xs'>
                        <div>
                            <h2>
                                Contact Us!
                            </h2>
                            <p>
                                VR Printers<br />
                                Plot no.30, Near Fire Bridge,<br />
                                Swarg Asharam Road, Hapur,<br />
                                UttarPradesh, 245101
                            </p>

                            <a href="mailto:vrprinters245101@gmail.com">
                                <div className="icon">
                                    <MailOutlineIcon />
                                </div>
                                vrprinters245101@gmail.com
                            </a>

                            <a href="mailto:vrads245101@gmail.com">
                                vrads245101@gmail.com
                            </a>

                            <a href="tel: +91 8650067500" className="mb-2">
                                <div className="icon">
                                    <PhoneIcon />
                                </div>
                                +91 86500 67500

                            </a>
                            <a href="tel: +91 9758586358">
                                +91 97585 86358
                            </a>
                        </div>
                    </div>

                    <div className='footer-connect col-sm-4 col-xs'>
                        <div>
                            <h2>Get In Touch!</h2>
                            <div className='social-icons'>
                            <a href="#"><WhatsAppIcon /></a>
                            <a href="#"><LinkedInIcon /></a>
                            <a href="#"><FacebookIcon /></a>
                            <a href="#"><YouTubeIcon /></a>
                            <a href="#"><RoomIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">© <span className="currentyear"></span> VR Printers Hapur. All
                Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer