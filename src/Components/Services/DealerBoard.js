import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DealerBoard = () => {

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
            What is Dealer Board?
          </h2>
        </div>
        <div className="head-content">
          <p>
            Eye-catching displays placed outside retail shops, showrooms, or dealerships to capture the attention of potential customers and create a lasting impression.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Dealer Boards in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
                Brand Awareness:
              </h3>
              <p>
                Enhance brand visibility and recognition by displaying the company's logo, brand colors, and taglines, they reinforce brand identity.
              </p>
            </li>

            <li>
              <h3>
                Product Promotion:
              </h3>
              <p>
                Through attractive graphics and compelling messages, these boards entice customers to explore the offerings, increasing the chances of sales.
              </p>
            </li>

            <li>
              <h3>
                Location Identification:
              </h3>
              <p>
                Customers can easily spot the dealership or shop from a distance For businesses operating in crowded area, simplifying navigation.
              </p>
            </li>

            <li>
              <h3>
                Seasonal Campaigns:
              </h3>
              <p>
                Whether it's a festive offer, sale or a special event, these boards can be updated regularly to reflect the latest offerings, keeping the content fresh and relevant.
              </p>
            </li>

            <li>
              <h3>
                Community Interaction:
              </h3>
              <p>
                Used for announcing community initiatives, sponsorships, or social responsibility activities fosters a positive image and strengthening bond between the brand and its local customers.
              </p>
            </li>

          </ul>



        </div>

        <div className='advantages'>
          <h2>
          Advantages of Dealer Boards:
          </h2>

          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>
                High Visibility:
                </h4>
                <p>
                Strategically placed in high-traffic areas, ensuring maximum exposure to Passersby noticing these vibrant displays, increasing the potential customers for business.
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
                Offer potentially high return on investment and have a long lifespan and require minimal maintenance, making it an economical.
                </p>
              </div>
              <div className="slide">
                <h4>
                Impactful Marketing:
                </h4>
                <p>
                With its large size and compelling visuals conveying clear message quickly, making it more likely for potential customers to retain.
                </p>
              </div>
              <div className="slide">
                <h4>
                Round-the-Clock Promotion:
                </h4>
                <p>
                work 24/7, consistently promoting the business even during non-business hours, hence  maximizes the chances of attracting customers at any time of the day.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerBoard;