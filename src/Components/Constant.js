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
import RetroReflectiveFlex from './Services/RetroReflectiveFlex';
import { FaPrint } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';


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
      title: 'Retro-Reflective Flex',
      description: "",
      image: 'card3.jpg',
      route: 'retro-reflective-flex',
      component: <RetroReflectiveFlex />
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
    image: <FaPrint size={40} color="#F7DC5A" />,
  },
  {
    title: 'Hoardings',
    description: "With strategically located hoardings in prime locations, we help your brand gain maximum exposure and create a lasting impression on passersby.",
    image:  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={58}
    height={58}
    fill="none"
    stroke={'#F7DC5A'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="6" width="16" height="12" rx="2" ry="2" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="6" y1="12" x2="18" y2="12" />
  </svg>,
  },
  {
    title: 'Customized Solutions',
    description: "Understanding uniqueness in every business, and cookie-cutter approaches won't cut it. That's why we take a personalized approach to every project, tailoring our services to meet your specific advertising needs and objectives.",
    image: <FaCogs size={40} color="#F7DC5A"  />,
  },
];