import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MeshBanner = () => {

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
            What is Mesh Banner?
          </h2>
        </div>
        <div className="head-content">
          <p>
            A type of flexible material designed with tiny holes that allow wind to pass through, making it ideal, especially in windy areas.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Mesh Banners in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
                Construction Site Hoardings:
              </h3>
              <p>
                As it allows wind to pass  through the banner, preventing risk of hoarding getting knocked down while still serving as an effective advertising medium.

              </p>
            </li>

            <li>
              <h3>
                Building Wraps:
              </h3>
              <p>
                showcasing the project's progress or advertise the upcoming development, making the construction site visually appealing while promoting it
              </p>
            </li>

            <li>
              <h3>
                Event Banners and Stage Backdrops:
              </h3>
              <p>
                Their wind-resistant nature ensures that they remain intact throughout the event, no matter the weather conditions.
              </p>
            </li>

            <li>
              <h3>
                Sports Events and Stadium Advertisements:
              </h3>
              <p>
                Their wind resistance and high visibility ensure that the advertisements are seen clearly by the audience.
              </p>
            </li>

            <li>
              <h3>
                Street Banners and Lamp Post Displays:
              </h3>
              <p>
                Their ability to withstand wind makes them suitable for outdoor locations with substantial air movement.
              </p>
            </li>

          </ul>

        </div>

        <div className='advantages'>
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
        </div>
      </div>
    </div>
  )
}

export default MeshBanner;