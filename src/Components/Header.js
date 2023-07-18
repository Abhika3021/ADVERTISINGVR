import Img from '../images/logo.jpg';

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
                        <a className='nav-link' href='#'>Home</a>
                        <a className='nav-link' href='#'>About us</a>
                        <a className='nav-link' href='#'>Services</a>
                        <a className='nav-link' href='#'>Contact us</a>
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