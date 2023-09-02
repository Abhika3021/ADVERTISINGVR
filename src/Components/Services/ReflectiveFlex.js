import React, { useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import { FaCloudSunRain } from 'react-icons/fa';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const ReflectiveFlex = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024, // Large screens and above
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Small screens and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: responsiveSettings,
  };

  const fullContent = `It refers to a specialized type of flexible material used for creating eye-catching outdoor advertisements. This material possesses a unique property: it reflects light, making the printed graphics and text visible even in low-light conditions or when illuminated by headlights at night. It is engineered with microscopic glass beads embedded in its surface, which bounce light back towards its source. This results in enhanced visibility and readability, especially for roadside billboards and signage. The use of reflective flex is strategic for businesses aiming to maximize the impact of their advertising campaigns 24/7, as it ensures that the message remains conspicuous both during the day and at night.
  This material's durability and weather resistance make it an excellent choice for long-term outdoor applications, ensuring that the advertising investment continues to shine even in adverse weather conditions.`;

  const [isMobileView, setIsMobileView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the screen width is less than a certain breakpoint (e.g., 768px)
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  // Add an event listener to check for screen width changes
  React.useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  return (
    <div className='container'>
    <div className="container advantages-slider mb-5">
      <Slider {...settings}>
        <div className="slide">

        </div>
        <div className="slide">

        </div>
        <div className="slide">

        </div>
        <div className="slide">

        </div>
        <div className="slide">

        </div>
      </Slider>
    </div>
    <div className="flex-header">
      <div className="head text-center">
        <h2>
          Retro- Reflective
        </h2>
      </div>
      <div className="head-content text-center">
        <p>
          {isMobileView && !isExpanded
            ? `${fullContent.slice(0, 200)}...`
            : fullContent}
          {isMobileView && !isExpanded && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(true);
              }}
              className="read-more-link"
            >
              Read More
            </a>
          )}
          {isMobileView && isExpanded && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(false);
              }}
              className="read-less-link"
            >
              Read Less
            </a>
          )}
        </p>
      </div>
    </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Retro-Reflective Flex in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
                Traffic Signs and Safety Signage:
              </h3>
              <p>
                It's properties ensure that these signs remain visible even in low-light situations, especially during nighttime or adverse weather conditions  enhancing road safety.
              </p>
            </li>

            <li>
              <h3>
                Advertisements and Hoardings:
              </h3>
              <p>
                Can grab attention and stand out, particularly during the night when regular non-reflective advertisements might be less visible, making it an excellent choice for marketing campaigns
              </p>
            </li>

            <li>
              <h3>
                Emergency and Warning Signage:
              </h3>
              <p>
                During emergencies or power outages, the reflective properties help people locate exits and important safety information.
              </p>
            </li>

            <li>
              <h3>
                Work Zone Safety:
              </h3>
              <p>
                In construction zones and ,  temporary used as traffic signs, cones, and barrier  along roads enhancing visibility and reducing chances of accidents of workers and motorists.
              </p>
            </li>
          </ul>
        </div>

        <div className='advantages'>
          <h3>
            Advantages of Retro-Reflective Flex:
          </h3>
          {/* <div className="row">
            <div className="col-md-4">
              <h4>
                High Visibility:
              </h4>
              <p>
                Particularly in low-light conditions or when illuminated by artificial light sources,  significantly enhances safety and the effectiveness of advertisements.
              </p>
            </div>
            <div className="col-md-4">
              <h4>
                Enhanced Safety:
              </h4>
              <p>
                Helps drivers and pedestrians quickly recognize important information, even from a distance, reducing the chance of accidents.
              </p>
            </div>
            <div className="col-md-4">
              <h4>
                Durable and Weather-Resistant:
              </h4>
              <p>
                Designed to withstand harsh weather conditions, like exposure to sunlight, rain, ensuring a longer lifespan.
              </p>
            </div>
            <div className="col-md-4">
              <h4>
                Cost-Effective Solution:
              </h4>
              <p>
                Although having a higher upfront cost compared to regular materials, its long-lasting nature and effectiveness make it a cost-effective solution over time.
              </p>
            </div>
            <div className="col-md-4">
              <h4>
                Versatile Applications:
              </h4>
              <p>
                Can  easily customized and applied to various surfaces, making it a versatile material for  advertising and safety needs.
              </p>
            </div>
          </div> */}
          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>High Visibility:</h4>
                <p>Particularly in low-light conditions or when illuminated by artificial light sources, significantly enhances safety and the effectiveness of advertisements.</p>
              </div>
              <div className="slide">
                <h4>Enhanced Safety:</h4>
                <p>Helps drivers and pedestrians quickly recognize important information, even from a distance, reducing the chance of accidents.</p>
              </div>
              <div className="slide">
                <h4>Durable and Weather-Resistant:</h4>
                <p>Designed to withstand harsh weather conditions, like exposure to sunlight, rain, ensuring a longer lifespan.</p>
              </div>
              <div className="slide">
                <h4>Cost-Effective Solution:</h4>
                <p>Although having a higher upfront cost compared to regular materials, its long-lasting nature and effectiveness make it a cost-effective solution over time.</p>
              </div>
              <div className="slide">
                <h4>Versatile Applications:</h4>
                <p>Can easily be customized and applied to various surfaces, making it a versatile material for advertising and safety needs.</p>
              </div>
            </Slider>
          </div>



          {/* <ul>
            <li>
              High Visibility:
              Particularly in low-light conditions or when illuminated by artificial light sources,  significantly enhances safety and the effectiveness of advertisements.
            </li>
            <li>
              Enhanced Safety:
              Helps drivers and pedestrians quickly recognize important information, even from a distance, reducing the chance of accidents.
            </li>
            <li>
              Durable and Weather-Resistant:
              Designed to withstand harsh weather conditions, like exposure to sunlight, rain, ensuring a longer lifespan.
            </li>
            <li>
              Cost-Effective Solution:
              Although having a higher upfront cost compared to regular materials, its long-lasting nature and effectiveness make it a cost-effective solution over time.
            </li>
            <li>
              Versatile Applications:
              Can  easily customized and applied to various surfaces, making it a versatile material for  advertising and safety needs.
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default ReflectiveFlex;