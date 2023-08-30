import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  return (
    <div className='container'>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            What is Vinyl?
          </h2>
        </div>
        <div className="head-content">
          <p>
            Made of synthetic plastic material known for its durability, flexibility, and ability to hold vibrant colors making vinyl an excellent choice  large-format printing applications like hoardings, banners, and flex printing.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Here's a closer look at vinyl and its advantages in these contexts:
          </span>
          <ul>
            <li>
              <h3>
                Durability:
              </h3>
              <p>
                Resistant to water, weather, and UV rays, withstand harsh conditions like rain, sunlight, and temperature fluctuations, without fading or deteriorating quickly.
              </p>
            </li>

            <li>
              <h3>
                Versatility:
              </h3>
              <p>
                Comes in various types and finishes including self-adhesive vinyl, cast vinyl, and calendared viny, having characteristics, such as adhesive properties and flexibility, making it suitable for various applications.
              </p>
            </li>

            <li>
              <h3>
                Vibrant Printing:
              </h3>
              <p>
                Vinyl's smooth and glossy surface allows for high-quality and vibrant printing results making them eye-catching and visually appealing
              </p>
            </li>

            <li>
              <h3>
                Cost-Effectiveness:
              </h3>
              <p>
                Offers excellent value for money due to its long-lasting nature and the ability to produce stunning visuals at a reasonable cost.
              </p>
            </li>
            <li>
              <h3>
                Easy Maintenance:

              </h3>
              <p>
                Regular cleaning with mild detergent and water can keep the hoardings and banners looking fresh and new for an extended period.
              </p>
            </li>
            <li>
              <h3>
                Customizability:

              </h3>
              <p>
                Easily cut and shaped according to the desired specifications. enabling businesses to tailor their hoardings and banners to fit specific locations and marketing strategies.
              </p>
            </li>
          </ul>
        </div>

        {/* <div className='advantages'>
          <h3>
            Advantages of Retro-Reflective Flex:
          </h3>
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


        </div> */}
      </div>
    </div>
  )
}

export default Vinyl;