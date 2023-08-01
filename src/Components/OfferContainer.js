import React from 'react';
import Card from './Card';

const OfferContainer = () => {

  const cards = [
    {
      title: 'Flex Printing',
      description: "We are masters in flex printing, offering a wide range of high-quality flex materials that ensure vibrant colors, excellent resolution, and durability. Whether it's banners, posters, backdrops, or any other promotional materials, our skilled team ensures that your message stands out and reaches your target audience effectively.",
      image: 'card1.jpg',
    },
    {
      title: 'Hoardings',
      description: "Our expertise in designing and erecting hoardings is second to none. With strategically located hoardings in prime locations, we help your brand gain maximum exposure and create a lasting impression on passersby.",
      image: 'card2.jpg',
    },
    {
      title: 'Customized Solutions',
      description: "We understand that every business is unique, and cookie-cutter approaches won't cut it. That's why we take a personalized approach to every project, tailoring our services to meet your specific advertising needs and objectives.",
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
};

export default OfferContainer;