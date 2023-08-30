import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LedSignBoard = () => {

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
  return (
    <div className='container'>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            What is LED Sign Board?
          </h2>
        </div>
        <div className="head-content">
          <p>
            These innovative display solutions offer a plethora of benefits and have become increasingly popular due to their versatility, energy efficiency, and eye-catching appeal.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses and advantages of LED sign boards in the flex printing and hoardings business:
          </span>
          <ul>
            <li>
              <h3>
                Enhanced Visibility:
              </h3>
              <p>
                Known for their high brightness and vibrant colors, making them easily visible even in broad daylight attracting attention from pedestrians
              </p>
            </li>
            <li>
              <h3>
                Energy Efficiency:
              </h3>
              <p>
                Compared to traditional lighting solutions, LED sign boards consume less electricity, resulting in reduced operating costs
              </p>
            </li>
            <li>
              <h3>
                Longevity and Durability:
              </h3>
              <p>
                Having longer lifespan that  last for tens of thousands of hours before requiring replacement, ensuring long-term cost savings and minimal maintenance .
              </p>
            </li>
            <li>
              <h3>
                Customization Options:
              </h3>
              <p>
                Businesses can design displays to showcase a variety of content, including text, images, animations, and even videos, making them ideal for promotional campaigns.
              </p>
            </li>
            <li>
              <h3>
                Real-time Content Updates:
              </h3>
              <p>
                By connecting to a centralized control system, for displaying time-sensitive information, special offers, ensuring message to remains relevant and up-to-date.
              </p>
            </li>
            <li>
              <h3>
                Cost-Effective Advertising:
              </h3>
              <p>
                Businesses can attract more attention, deliver visually appealing messages, and create a lasting impact on potential customers.
              </p>
            </li>
            <li>
              <h3>
                Low Maintenance:
              </h3>
              <p>
                Robust design and long lifespan mean that businesses do not have to frequently replace bulbs or make costly repairs, saving both time and money.
              </p>
            </li>
            <li>
              <h3>
                Versatility in Size and Shape:
              </h3>
              <p>
                By designing in various shapes and sizes to fit specific requirements. allowing unique and eye-catching displays that stand out from the competition.
              </p>
            </li>
          </ul>
        </div>

        {/* <div className='advantages'>
          <h2>
            Advantages of Mesh Banners:
          </h2>

          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>
                  Wind Resistance:
                </h4>
                <p>
                  It's perforated design allows air to flow through the banner, reducing wind load on it, preventing tearing and ensures the banner remains intact.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Durability:
                </h4>
                <p>
                  Made from high-quality materials that can withstand harsh environmental conditions, such as rain, sun exposure, and temperature fluctuations, have a longer lifespan.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Visibility:
                </h4>
                <p>
                  holes are tiny enough not to hinder the overall impact of the graphics, allowing for clear and vibrant images, providing  seamless blend of visual appeal.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Versatility:
                </h4>
                <p>
                  Used for applications, including building wraps, fence wraps, scaffold covers, and hoardings.
                </p>
              </div>
            </Slider>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default LedSignBoard;