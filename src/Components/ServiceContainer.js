import React from 'react'
import Card from './Card';

const ServiceContainer = () => {
    const cards = [
        {
          title: 'Black back flex',
          description: " ",
          image: 'card1.jpg',
        },
        {
          title: 'Backlight Flex',
          description: "",
          image: 'card2.jpg',
        },
        {
          title: 'Star Flex',
          description: "",
          image: 'card3.jpg',
        },
        {
            title: 'One Way Vision',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Reflective Flex',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Vinyl',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Glow Sign Board',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Delaer Board',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Wall painting',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Mesh Banner',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Flex Signages',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'Flex Standies and Canopy',
            description: "",
            image: 'card3.jpg',
          },
          {
            title: 'LED Sign Board',
            description: "",
            image: 'card3.jpg',
          },
      ];
    
      return (
        <div className="card-container">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>
      );
}

export default ServiceContainer