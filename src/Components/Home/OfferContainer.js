import React from 'react';
import Card from '../Card';
import { OFFER } from '../Constant';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const OfferContainer = () => {
  return (
    <div className="container">
      <div className='offer-laptop'>
        <div className='row'>
          {OFFER.map((card, index) => (
            <div className='col-md-4 col-sm-6'>
              <Card key={index} title={card.title} description={card.description} image={card.image} />
            </div>
          ))}
        </div>
      </div>
      <div className='offer-mobile'>
        <Carousel>
          {OFFER.map((card, index) => (
            <Carousel.Item key={index}>
              <Card title={card.title} description={card.description} image={card.image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OfferContainer;
