import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlackBackFlex = () => {
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
            What is BlackBack Flex?
          </h2>
        </div>
        <div className="head-content">
          <p>
          Designed to have a black layer sandwiched between two layers of white PVC, which prevents light from pass through it, marking it ideal where high level of opacity and blockage of light is required.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Black Back in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
              Billboards and Hoardings: 
              </h3>
              <p>
              Used in illuminated signs or lightboxes, as it prevents the light from shining through, maintaining the intended appearance of the display.
              </p>
            </li>

            <li>
              <h3>
              Double-Sided Banners: 
              </h3>
              <p>
              When displayed different images on either side of a banner, it ensures the content on one side doesn't show through content on the other side.
              </p>
            </li>

            <li>
              <h3>
              Event Backdrops: 
              </h3>
              <p>
              Used where the backdrop needs to block out any distracting elements behind it, providing a clean and professional look              </p>
            </li>

            <li>
              <h3>
              Exhibition Graphics: 
              </h3>
              <p>
              Used for large graphics or banners that need to be displayed against a variety of backgrounds without any distortion or interference.
              </p>
            </li>
          </ul>
        </div>

        <div className='advantages'>
          <h3>
            Advantages of Black Back Flex:
          </h3>
          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>Enhanced Opacity</h4>
                <p> Ensuring that light from behind the banner or hoarding does not show through the printed graphics  enhancing the visibility and clarity.</p>
              </div>
              <div className="slide">
                <h4>No Show-Through:</h4>
                <p>Eliminating this issue of Visibility of one side from the other when light passes through it, maintaining the integrity of the design.</p>
              </div>
              <div className="slide">
                <h4>Versatile Usage:</h4>
                <p>Suitable for both single-sided and double-sided printing applications, making it a versatile option for various outdoor advertising needs.</p>
              </div>
              <div className="slide">
                <h4>Reusability:</h4>
                <p> With proper care and storage, it can be reused for future campaigns, maximizing the return on investment.</p>
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

export default BlackBackFlex;