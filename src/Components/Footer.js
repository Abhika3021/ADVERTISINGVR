import React from 'react'
import Img from '../images/logo.jpg';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src={Img} alt='image' style={{ height: '50px', width: '50px' }}></img>
                    <h2>VR PRINTERS</h2>
                    <div className='bottomnav'>
                        <a href='#'>Home</a>
                        <a href='#'>About us</a>
                        <a href='#'>Services</a>
                        <a href='#'>Contact Us</a>
                    </div>
                </div>

                <div className='footer-contact'>
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
                        <div class="icon">
                            <img src="icons/gmail.png" />
                        </div>
                        vrprinters245101@gmail.com
                    </a>

                    <a href="mailto:vrads245101@gmail.com">
                        vrads245101@gmail.com
                    </a>

                    <a href="tel: +91 8650067500" class="mb-2">
                        <div class="icon">
                            <img src="icons/telephone-call.png" />
                        </div>
                        +91 86500 67500

                    </a>
                    <a href="tel: +91 9758586358">
                        +91 97585 86358
                    </a>
                </div>

                <div className='footer-connect'>
                    <h2>Get In Touch!</h2>
                    <a href="#">WhatsApp</a>
                    <a href="#">Linkedin</a>
                    <a href="#">facebook</a>
                    <a href="#">YouTube</a>
                    <a href="#">GoogleMap</a>
                </div>
            </div>

            <div className="copyright">© <span className="currentyear"></span> VR Printers Hapur. All
                Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer