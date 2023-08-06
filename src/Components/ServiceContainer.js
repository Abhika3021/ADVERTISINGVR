import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import { CARDS } from './Constant'
const ServiceContainer = () => {


  return (
    <div className="container mt-5 mb-4">
      <div className='row'>
        {CARDS.map((card, index) => (
          <div className='col-md-4 col-sm-6 col-xs'>
            <Link to={`/${card.route}`}>
            <Card key={index} title={card.title} description={card.description} image={card.image} />
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceContainer ;
