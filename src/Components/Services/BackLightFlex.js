import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import { FaCloudSunRain } from 'react-icons/fa';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const BackLightFlex = () => {
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
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: responsiveSettings,
  };
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
            BackLight Flex
          </h2>
        </div>
        <div className="head-content">
          <p>
            Designed for illuminated graphics and advertisements creating eye-catching displays that stand out both during the day and at night.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <div className="usesInner container-fluid">
            <div className='usesHead'>
              <div className='usesHeadTitle'>
                <h2 class="usesTitle">
                  What are the <span>uses</span> of <span>BackLight</span> Flex
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3 className='usesListItemTitle'>
                    Billboards and Hoardings
                  </h3>
                  <p>
                    When strategically placed in high traffic area, it's Backlit feature enhances visibility, making it easily readable even from a distance
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Transit Advertising
                  </h3>
                  <p>
                    Whe Placed on bus shelters, metro stations, and airport terminals it's illuminated graphics draw the eyes of passersby and commuters.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Shopping Mall Displays
                  </h3>
                  <p>
                    Used for creating attractive and dynamic displays, From promotional banners to illuminated signs, enhancing the ambiance and attract potential customers to stores and specific products.
                  </p>
                </li>

                <li>
                  <h3 className='usesListItemTitle'>
                    Exhibition Graphics
                  </h3>
                  <p>
                    Helps to make booths and stalls more visible and appealing, creating a captivating atmosphere that draws visitors to the displays.
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
                  What are the <span>Advantages</span> of using <span>BackLight</span> Flex
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <PersonalVideoIcon className='brand-icon' />
                  <div className="whyListItemTitle">Excellent Visibility!</div>
                  <div className="whyListItemBody">
                    Illuminated graphics make  the advertisements stand out, especially in low-light or nighttime condition making them more memorable and impactful.
                  </div>
                </div>
                <div className="whyListItem">
                  <AutoFixHighIcon className='brand-icon' />
                  <div className="whyListItemTitle">Enhanced Aesthetics!</div>
                  <div className="whyListItemBody">
                    Backlight effect elevates the overall aesthetics of the display, leaving a positive impression, making them visually appealing and attention-grabbing.
                  </div>
                </div>
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective!</div>
                  <div className="whyListItemBody">
                    Illuminated advertising displays allows for efficient use of lighting resources, reducing energy consumption and operational costs.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <FaCloudSunRain className='brand-icon' />
                  <div className="whyListItemTitle">Durable and Weather-Resistant!</div>
                  <div className="whyListItemBody">
                    Can withstand weather conditions like rain, wind, and sunligh, ensuring the graphics to remain intact and vibrant, providing long-lasting exposure for promotion.
                  </div>
                </div>
                <div className="whyListItem">
                  <HubTwoToneIcon className='brand-icon' />
                  <div className="whyListItemTitle">Flexibility in Design!</div>
                  <div className="whyListItemBody">
                    Enabling creative professionals to come up with unique and captivating visuals that align with the brand's message and objectives.
                  </div>
                </div>
                <div className="whyListItem">
                  <EngineeringIcon className='brand-icon' />
                  <div className="whyListItemTitle">Easy Installation and Maintenance!</div>
                  <div className="whyListItemBody">
                    Making the setup process efficient and hassle-free, ensuring the advertisements retain their effectiveness throughout their display period.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BackLightFlex;