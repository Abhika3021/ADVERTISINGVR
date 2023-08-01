import React from 'react'
import OfferContainer from './OfferContainer';
import CarouselSlideshow from './Benefits/CarouselSlideshow';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { GiHumanTarget } from 'react-icons/gi'
import { Button } from '@mui/material';

const Home = () => {
    return (
        <section>
            <div className='home-container'>
                <div className='intro'>
                    <h2>BE VISIBLE, BE MEMORABLE</h2>
                    <p>
                        Despite the rise of digital
                        advertising and online media, outdoor branding through flex and hoardings continues to offer unique advantages in terms of
                    </p>
                    <ul>
                        <li><VisibilitySharpIcon /> Visibility</li>
                        <li>Brand reinforcement</li>
                        <li><GiHumanTarget /> Local targeting</li>
                    </ul>
                    <div className='read-button'>
                        <Button className='btn' style={{
                            backgroundColor:'#F7DC5A',
                            color: 'black',
                            borderRadius: 10,
                            fontSize: 16
                        }} variant="contained">Read More</Button>
                    </div>

                    <div className='intro-content'>
                        <p>
                        Driving down any city road or highway, you are sure to come across huge printed hoardings or small banner prints displaying commercial advertisements are strung up on the electric poles, compound walls and even on trees in our neighborhooh therefore making outdoor advertising the most suitable and economical solution for this marketing vertical.
                        </p>
                    </div>
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