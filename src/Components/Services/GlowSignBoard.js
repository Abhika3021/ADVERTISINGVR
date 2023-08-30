import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlowSignBoard = () => {
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
            What is Glow Sign Board?
          </h2>
        </div>
        <div className="head-content">
          <p>
            Made using a combination of materials, with the primary element being the flex Emitting a soft, eye-catching glow when illuminated, commonly used for advertising and marketing.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Glow Sign Boards in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
                Advertising and Branding:
              </h3>
              <p>
                It is strategically placed at high-visibility locations to grab the attention of passersby, motorists, or potential customers
              </p>
            </li>
            <li>
              <h3>
                Public Information:
              </h3>
              <p>
                Also utilized for conveying important public information, such as directions, safety guidelines, and announcements.
              </p>
            </li>
            <li>
              <h3>
                Event Promotions:
              </h3>
              <p>
                For large events, festivals, or exhibitions, glow sign boards are an effective way to promote the event and attract attendees.
              </p>
            </li>
            <li>
              <h3>
                Storefront Signage:
              </h3>
              <p>
                Helping retail stores to create an inviting ambiance and making their presence more noticeable, especially during the evening or nighttime.
              </p>
            </li>
            <li>
              <h3>
                Wayfinding Signage:
              </h3>
              <p>
                Used in complex locations like malls, airports, or large facilities, guiding visitors to their desired destinations.
              </p>
            </li>
          </ul>


        </div>

        <div className='advantages'>
          <h2>
          Advantages of Glow Sign Boards in Flex Printing and Hoardings:
          </h2>

          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>
                Visibility and Impact:
                </h4>
                <p>
                Illuminated nature makes them highly visible especially during low-light conditions or at night enhancing their impact and message recall.
                </p>
              </div>
              <div className="slide">
                <h4>
                Customizability:
                </h4>
                <p>
                Businesses can tailor the size, design, color scheme, and content according to their specific branding and promotional requirements.
                </p>
              </div>
              <div className="slide">
                <h4>
                Cost-Effective:
                </h4>
                <p>
                Relatively affordable compared to other forms of advertising, making them accessible to small and medium-sized businesses.
                </p>
              </div>
              <div className="slide">
                <h4>
                Durability:
                </h4>
                <p>
                Constructed using high-quality materials  helping withstand various weather conditions, ensuring a longer advertising lifespan.
                </p>
              </div>
              <div className="slide">
                <h4>
                Energy-Efficient:
                </h4>
                <p>
                With advancements in LED technology, glow sign boards have become more energy-efficient, consuming less power while providing consistent illumination.
                </p>
              </div>
              <div className="slide">
                <h4>
                Quick Turnaround:
                </h4>
                <p>
                Enabling businesses to respond rapidly to market trends or time-sensitive promotions.
                </p>
              </div>
              <div className="slide">
                <h4>
                Reusability:
                </h4>
                <p>
                Allowing businesses to use the same signage for different campaigns or events, saving costs in the long run.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlowSignBoard;