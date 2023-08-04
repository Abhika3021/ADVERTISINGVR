import React from 'react'
import Card from './Card';
import { Route, Link, Routes } from 'react-router-dom';
import BackLightFlex from './Services/BackLightFlex';
import BlackBackFlex from './Services/BlackBackFlex';
import LedSignBoard from './Services/BackLightFlex';
import StarFlex from './Services/StarFlex';
import OneWayVision from './Services/OneWayVision';
import WallPainting from './Services/WallPainting';
import MeshBanner from './Services/MeshBanner';
import Vinyl from './Services/Vinyl';
import FlexSignages from './Services/FlexSignages';
import FlexStandiesAndCanopy from './Services/FlexStandiesAndCanopy';
import GlowSignBoard from './Services/GlowSignBoard';
import DealerBoard from './Services/DealerBoard';
import ReflectiveFlex from './Services/ReflectiveFlex';
const ServiceContainer = () => {
  const cards = [
    {
      title: 'Black back flex',
      description: " ",
      image: 'card1.jpg',
      route: 'black-back-flex',
      component: <BlackBackFlex />
    },
    {
      title: 'Backlight Flex',
      description: "",
      image: 'card2.jpg',
      route: 'backlight-flex',
      component: <BackLightFlex />
    },
    {
      title: 'Star Flex',
      description: "",
      image: 'card3.jpg',
      route: 'star-flex',
      component: <StarFlex />
    },
    {
      title: 'One Way Vision',
      description: "",
      image: 'card3.jpg',
      route: 'one-way-vision',
      component: <OneWayVision />
    },
    {
      title: 'Reflective Flex',
      description: "",
      image: 'card3.jpg',
      route: 'reflective-flex',
      component: <ReflectiveFlex />
    },
    {
      title: 'Vinyl',
      description: "",
      image: 'card3.jpg',
      route: 'vinyl',
      component: <Vinyl />
    },
    {
      title: 'Glow Sign Board',
      description: "",
      image: 'card3.jpg',
      route: 'glow-sign-board',
      component: <GlowSignBoard />
    },
    {
      title: 'Delaer Board',
      description: "",
      image: 'card3.jpg',
      route: 'dealer-board',
      component: <DealerBoard />
    },
    {
      title: 'Wall painting',
      description: "",
      image: 'card3.jpg',
      route: 'wall-painting',
      component: <WallPainting />
    },
    {
      title: 'Mesh Banner',
      description: "",
      image: 'card3.jpg',
      route: 'mesh-banner',
      component: <MeshBanner />
    },
    {
      title: 'Flex Signages',
      description: "",
      image: 'card3.jpg',
      route: 'flex-signages',
      component: <FlexSignages />
    },
    {
      title: 'Flex Standies and Canopy',
      description: "",
      image: 'card3.jpg',
      route: 'flex-standies-and-canopy',
      component: <FlexStandiesAndCanopy />
    },
    {
      title: 'LED Sign Board',
      description: "",
      image: 'card3.jpg',
      route: 'led-sign-board',
      component: <LedSignBoard />
    },
  ];

  return (
    <div className="container mt-5 mb-4">
      <Routes>
        {cards.map((card, id) => (
          <Route key={id} path={`/${card.route}`} element={`${card.component}`}>
          </Route>
        ))}
      </Routes>
      <div className='row'>
        {cards.map((card, index) => (
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

export default ServiceConimport React from 'react'
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

export default ServiceCon