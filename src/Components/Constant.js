import BackLightFlex from './Services/BackLightFlex';
import BlackBackFlex from './Services/BlackBackFlex';
import LedSignBoard from './Services/LedSignBoard';
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
export const CARDS = [
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
      title: 'LED Sign Board',
      description: "",
      image: 'card3.jpg',
      route: 'led-sign-board',
      component: <LedSignBoard />
    },
    {
      title: 'Flex Standies and Canopy',
      description: "",
      image: 'card3.jpg',
      route: 'flex-standies-and-canopy',
      component: <FlexStandiesAndCanopy />
    },
  ];

export const OFFER = [
  {
    title: 'Flex Printing',
    description: "Offering wide range of high-quality flex materials ensureing vibrant colors, excellent resolution, and durability thus ensureing your message stands out and reaches your target audience effectively.",
    image: 'card1.jpg',
  },
  {
    title: 'Hoardings',
    description: "With strategically located hoardings in prime locations, we help your brand gain maximum exposure and create a lasting impression on passersby.",
    image: 'card2.jpg',
  },
  {
    title: 'Customized Solutions',
    description: "Understanding uniqueness in every business, and cookie-cutter approaches won't cut it. That's why we take a personalized approach to every project, tailoring our services to meet your specific advertising needs and objectives.",
    image: 'card3.jpg',
  },
];