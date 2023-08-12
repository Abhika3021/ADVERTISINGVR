import React from 'react';
import Card from '../Card';
import {OFFER} from '../Constant'
const OfferContainer = () => {

  return (
    <div className="container">
      <div className='row'>
        {OFFER.map((card, index) => (
          <div className='col-md-4 col-sm-6'>
            <Card key={index} title={card.title} description={card.description} image={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferContainer;