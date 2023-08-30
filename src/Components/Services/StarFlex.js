import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StarFlex = () => {
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
            What is Star Flex?
          </h2>
        </div>
        <div className="head-content">
          <p>
            Made from PVC material, which is reinforced with a strong polyester mesh making it highly resistant to tearing, fading, and damage from weather elements such as rain, sunlight, and wind. The PVC coating also gives it a smooth and glossy surface that enhances the print quality and visual appeal of the final output.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Star Flex in Flex Printing and Hoardings Business:
          </span>
          <ul>
            <li>
              <h3>
                Outdoor Banners and Hoardings:
              </h3>
              <p>
                ideal due to its robustness and ability to withstand outdoor conditions. It is commonly used for promotional banners, event advertisment
              </p>
            </li>

            <li>
              <h3>
                Billboards:
              </h3>
              <p>
                It's excellent durability ensures that billboards can withstand exposure to harsh weather conditions, which is crucial for long-term outdoor advertising.
              </p>
            </li>

            <li>
              <h3>
                Event Backdrops:
              </h3>
              <p>
                During trade show, conference, or stage performance, star flex can be used to create visually striking backdrops that effectively promote brands or enhance the event's theme.
              </p>
            </li>

            <li>
              <h3>
                Building Wraps:
              </h3>
              <p>
                Its size and durability make it suitable for Large-scale advertisements on the facades of buildings  covering substantial surfaces.
              </p>
            </li>

            <li>
              <h3>
                Street Banners:
              </h3>
              <p>
                oftenly used to display public messages, event announcements, or seasonal greetings on street poles or lamp posts.
              </p>
            </li>

            <li>
              <h3>
                Vehicle Wraps:
              </h3>
              <p>
                By turning cars, buses, or trucks into moving advertisements, reaching a broader audience while on the road.
              </p>
            </li>

          </ul>
        </div>

        <div className='advantages'>
          <h2>
            Advantages of Star Flex in Flex Printing and Hoardings Business:
          </h2>

          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>Durability:</h4>
                <p>
                  Designed to withstand harsh environmental conditions like sunlight, rain, wind, and temperature variations without significant wear and tear making it reliable.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Cost-Effective:

                </h4>
                <p>
                  It is relatively affordable, making it a cost-effective choice for large-scale advertising campaigns and outdoor promotions.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Customizable Sizes:
                </h4>
                <p>
                  Can be easily cut to the desired dimensions without compromising on quality allowing for customization based on the specific requirements of project.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Reusable:
                </h4>
                <p>
                  Sometimes can be reused for different events or campaigns, further enhancing their cost-effectiveness.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarFlex;