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

const Vinyl = () => {
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

  const fullContent = `In this context, refers to a versatile synthetic material renowned for its durability and suitability for large-format advertising. It is commonly used as the substrate or medium upon which vibrant graphics, advertisements, and messages are printed. Vinyl, in this industry, typically comes in rolls of varying thicknesses and finishes, allowing for customization based on specific project requirements. Its notable attributes include weather resistance, UV stability, and robust tear resistance, making it an ideal choice for outdoor signage and hoardings. Vinyl's flexibility enables it to conform to diverse surfaces, including billboards, vehicle wraps, banners, and building wraps.
  Moreover, vinyl's printability with vibrant, fade-resistant inks ensures that graphics remain vivid and eye-catching even in challenging outdoor conditions. It empowers businesses to communicate effectively with their target audiences.`;

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
            Vinyl
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
          <div className="usesInner container-fluid">
            <div className='usesHead'>
              <div className='usesHeadTitle'>
                <h2 class="usesTitle">
                  What are the <span>uses</span> of <span>Vinyl</span> 
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Durability
                  </h3>
                  <p>
                    Resistant to water, weather, and UV rays, withstand harsh conditions like rain, sunlight, and temperature fluctuations, without fading or deteriorating quickly.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Versatility
                  </h3>
                  <p>
                    Comes in various types and finishes including self-adhesive vinyl, cast vinyl, and calendared viny, having characteristics, such as adhesive properties and flexibility, making it suitable for various applications.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Vibrant Printing
                  </h3>
                  <p>
                    Vinyl's smooth and glossy surface allows for high-quality and vibrant printing results making them eye-catching and visually appealing
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Cost-Effectiveness
                  </h3>
                  <p>
                    Offers excellent value for money due to its long-lasting nature and the ability to produce stunning visuals at a reasonable cost.
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Easy Maintenance

                  </h3>
                  <p>
                    Regular cleaning with mild detergent and water can keep the hoardings and banners looking fresh and new for an extended period.
                  </p>
                </li>
                <li>
                  <h3 className='usesListItemTitle'>
                    Customizability

                  </h3>
                  <p>
                    Easily cut and shaped according to the desired specifications. enabling businesses to tailor their hoardings and banners to fit specific locations and marketing strategies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="why">
          <div className="whyInner container-fluid">
            <div className='whyHead'>
              <div className='whyHeadTitle'>
                <h2 className="whyTitle">
                  What are the <span>Advantages</span> of using <span>Vinyl</span> 
                </h2>
              </div>
            </div>

            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">High Visibility:</div>
                  <div className="whyListItemBody">Particularly in low-light conditions or when illuminated by artificial light sources, significantly enhances safety and the effectiveness of advertisements.</div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Enhanced Safety:</div>
                  <div className="whyListItemBody">Helps drivers and pedestrians quickly recognize important information, even from a distance, reducing the chance of accidents.</div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Durable and Weather-Resistant:</div>
                  <div className="whyListItemBody">Designed to withstand harsh weather conditions, like exposure to sunlight, rain, ensuring a longer lifespan.</div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective Solution:</div>
                  <div className="whyListItemBody">Although having a higher upfront cost compared to regular materials, its long-lasting nature and effectiveness make it a cost-effective solution over time.</div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Versatile Applications:</div>
                  <div className="whyListItemBody">Can easily be customized and applied to various surfaces, making it a versatile material for advertising and safety needs.</div>
                </div>
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Vibrant Painting:</div>
                  <div className="whyListItemBody">Vinyl allows for high-quality, vibrant, and sharp printing, making graphics and text stand out.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Vinyl;