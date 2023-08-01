import React from 'react'
import OfferContainer from './OfferContainer';
import CarouselSlideshow from './Benefits/CarouselSlideshow';

const Home = () => {
    return (
        <section>
            <div className='home-container'>
                <div className='intro'>
                    <h2>About Us</h2>
                    <p>
                        Welcome to VR Printers - Your Premier Outdoor Advertising Agency for Flex Printing and Hoardings
                        At VR Printers, we take pride in being a leading and reputed outdoor advertising agency specializing in flex printing and hoardings. With years of experience in the industry, we have established ourselves as a trusted name, providing top-notch advertising solutions to businesses and brands of all sizes.
                    </p>
                </div>
                
                <div className='offer'>
                    <h2>What we offer</h2>
                    <OfferContainer />
                </div>
                <div className='benefits'>
                    <CarouselSlideshow />
                    <p>Despite the rise of digital advertising and online media, outdoor branding through flex and hoardings continues to offer unique advantages in terms of visibility, brand reinforcement, and local targeting, making it an important component of comprehensive marketing strategies in today's world.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home;