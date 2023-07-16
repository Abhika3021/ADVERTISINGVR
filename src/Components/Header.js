import React from 'react'
import Img from '../images/logo.jpg';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <img src={Img} alt='image' style={{ height: '50px', width: '50px' }}></img>
                    <h2>VR PRINTERS</h2>
                </div>
                <div className='header-links'>
                    <a href='#'>Home</a>
                    <a href='#'>About us</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact us</a>
                </div>

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