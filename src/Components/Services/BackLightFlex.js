import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: responsiveSettings,
  };
  return (
    <div className='container'>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            What is BackLight Flex?
          </h2>
        </div>
        <div className="head-content">
          <p>
          Designed for illuminated graphics and advertisements creating eye-catching displays that stand out both during the day and at night.          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of BackLight in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
              Billboards and Hoardings: 
              </h3>
              <p>
              When strategically placed in high traffic area, it's Backlit feature enhances visibility, making it easily readable even from a distance
              </p>
            </li>

            <li>
              <h3>
              Transit Advertising: 
              </h3>
              <p>              
              Whe Placed on bus shelters, metro stations, and airport terminals it's illuminated graphics draw the eyes of passersby and commuters.              </p>
            </li>

            <li>
              <h3>
              Shopping Mall Displays:
              </h3>
              <p>             
              Used for creating attractive and dynamic displays, From promotional banners to illuminated signs, enhancing the ambiance and attract potential customers to stores and specific products.             </p>
            </li>

            <li>
              <h3>
              Exhibition Graphics: 
              </h3>
              <p>
              Helps to make booths and stalls more visible and appealing, creating a captivating atmosphere that draws visitors to the displays.
              </p>
            </li>
          </ul>
        </div>

        <div className='advantages'>
          <h3>
            Advantages of BackLight Flex:
          </h3>
          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4> Excellent Visibility:</h4>
                <p>
                  Illuminated graphics make  the advertisements stand out, especially in low-light or nighttime condition making them more memorable and impactful.</p>
              </div>
              <div className="slide">
                <h4>Enhanced Aesthetics: </h4>
                <p>
                Backlight effect elevates the overall aesthetics of the display, leaving a positive impression, making them visually appealing and attention-grabbing.</p>
              </div>
              <div className="slide">
                <h4>Cost-Effective:</h4>
                <p>
                Illuminated advertising displays allows for efficient use of lighting resources, reducing energy consumption and operational costs</p>
              </div>
              <div className="slide">
                <h4>Durable and Weather-Resistant: </h4>
                <p>
                Can withstand weather conditions like rain, wind, and sunligh, ensuring the graphics to remain intact and vibrant, providing long-lasting exposure for promotion.</p>
              </div>
              <div className="slide">
                <h4>Flexibility in Design:</h4>
                <p> 
                Enabling creative professionals to come up with unique and captivating visuals that align with the brand's message and objectives.
                </p>
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

export default BackLightFlex;