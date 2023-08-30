import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OneWayVision = () => {
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
            What is One Way Vision?
          </h2>
        </div>
        <div className="head-content">
          <p>
            Also known as perforated window film, is a specialized material allowing visibility from one side while appearing opaque on the other. This unique characteristic makes it an excellent choice for various applications, particularly in the flex printing and hoardings business.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of One-Way Vision in Flex Printing and Hoardings Business:
          </span>
          <ul>
            <li>
              <h3>
                Building Wraps and Hoardings:
              </h3>
              <p>
                Allowing vibrant and eye-catching graphics to be displayed while still allowing people inside buildings to see through the material.
              </p>
            </li>

            <li>
              <h3>
                Vehicle Wraps:
              </h3>
              <p>
                wraping commercial cars, buses, and even personal vehicles, enabling businesses to promote their products without obstructing the driver's vision from inside the vehicle.
              </p>
            </li>

            <li>
              <h3>
                Storefront Advertising:
              </h3>
              <p>
                Retail stores often use windows to showcase advertisements to passersby without obstructing view for potential customers inside the store.
              </p>
            </li>

            <li>
              <h3>
                Exhibition and Event Signage:
              </h3>
              <p>
                Used in creaeting visually stunning displays that attract attention while maintaining visibility for visitors inside the booth.
              </p>
            </li>
          </ul>
        </div>

        <div className='advantages'>
          <h2>
            Advantages of One-Way Vision in Flex Printing and Hoardings Business:
          </h2>

          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>
                  Visibility and Privacy:
                </h4>
                <p>
                  Offer privacy to people in urban areas or spaces by providing a clear view of the printed graphic on one side and privacy to other.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Weather Resistance:
                </h4>
                <p>
                  Designed to withstand various weather conditions, ensuring  graphics remain vibrant and durable for an extended period.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Easy installation and Removal:
                </h4>
                <p>
                  Making it convenient for businesses to update their advertising campaigns frequently.
                </p>
              </div>
              <div className="slide">
                <h4>
                  UV Protection:
                </h4>
                <p>
                  Designed to provide UV protection, which can help preserve the printed graphics and extend their lifespan.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Reduces Glare and Heat:
                </h4>
                <p>
                  Help in reduce glare and heat inside buildings and vehicles, providing a more comfortable environment.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneWayVision;