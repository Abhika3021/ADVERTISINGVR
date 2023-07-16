import React from 'react'

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img src='src\images\logo.jpg' alt='Logo'></img>
            </div>
            <div className='header-links'>
                <a href='#'>Home</a>
                <a href='#'>About us</a>
                <a href='#'>Services</a>
                <a href='#'>Contact us</a>
            </div>
        </div>
    )
}

export default Header