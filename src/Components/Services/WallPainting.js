import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import LockClockIcon from '@mui/icons-material/LockClock';
import Diversity2Icon from '@mui/icons-material/Diversity2';

const WallPainting = () => {
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
  const fullContent = `"Backlight flex" denotes a specialized type of flexible substrate engineered for deployment in backlit advertising displays. These displays are characterized by their illumination originating from a rear source, commonly employing technologies such as LEDs. Backlight flex materials possess a semi-translucent quality, facilitating the transmission of light through them. This attribute enhances the luminosity and vividness of the printed imagery or textual content when subjected to backlighting. Consequently, backlight flex emerges as the preferred choice for crafting attention-grabbing and illuminated promotional exhibits, including billboards, posters, and signage designed to maintain visibility throughout both daytime and nighttime hours.`;

  const [isMobileView, setIsMobileView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth < 768);
  };

  React.useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

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
            Wall Painting
          </h2>
        </div>
        <div className="head-content text-center">
          <p>
            {isMobileView && !isExpanded
              ? `${fullContent.slice(0, 200)}...`
              : fullContent}
            {isMobileView && !isExpanded && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(true);
                }}
                className="read-more-link"
              >
                Read More
              </a>
            )}
            {isMobileView && isExpanded && (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(false);
                }}
                className="read-less-link"
              >
                Read Less
              </a>
            )}
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <div className="usesInner container-fluid">
            <div className='usesHead'>
              <div className='usesHeadTitle'>
                <h2 class="usesTitle">
                  What are the <span>uses</span> of <span>Wall</span> Painting
                </h2>
              </div>
            </div>
            <div className="usesBody">
              <ul>
                <li>
                  <h3>
                    Outdoor Advertising
                  </h3>
                  <p>
                    Hoardings or billboards with painted designs can attract the attention of passersby making them effective tools for promoting products, events or services.
                  </p>
                </li>

                <li>
                  <h3>
                    Artistic Expression          
                  </h3>
                  <p>
                    Allow's artists to showcase their creativity and artistic visuals that leave a lasting impact on viewers.
                  </p>
                </li>

                <li>
                  <h3>
                    Branding and Promotion          
                  </h3>
                  <p>
                    A well-designed wall painting can enhance brand visibility and recognition, as it becomes a recognizable landmark in the area.
                  </p>
                </li>

                <li>
                  <h3>
                    Sports Events and Stadium Advertisements          
                  </h3>
                  <p>
                    Their wind resistance and high visibility ensure that the advertisements are seen clearly by the audience.
                  </p>
                </li>

                <li>
                  <h3>
                    Event and Product Promotion          
                  </h3>
                  <p>
                    Temporary wall paintings are ideal for promoting specific events or product launches. They can be easily removed or replaced when the promotion period ends.
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
                  What are the <span>Advantages</span> of using <span>Wall</span> Painting
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <VisibilityIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Eye-Catching!
                    </div>
                  <div className="whyListItemBody">
                  Can be visually striking and attention-grabbing amd stand out due to their size, artistic appeal, and uniqueness.
                  </div>
                </div>
                <div className="whyListItem">
                  <LockClockIcon className='brand-icon' />
                  <div className="whyListItemTitle">
                    Long-Lasting!
                  </div>
                  <div className="whyListItemBody">
                  Can withstand harsh weather conditions, making them durable and long-lasting. It do not fade easily, providing a more extended period of visibility
                  </div>
                </div>
                <div className="whyListItem">
                  <MonetizationOnIcon className='brand-icon' />
                  <div className="whyListItemTitle">Cost-Effective!</div>
                  <div className="whyListItemBody">
                  Involve  minimal ongoing costs Unlike electronic advertising, which requires continuous power supply and updates.
                  </div>
                </div>
              </div>
              <div className="whyList col-md-6">
                <div className="whyListItem">
                  <AdsClickIcon className='brand-icon' />
                  <div className="whyListItemTitle">Local Targeting!</div>
                  <div className="whyListItemBody">
                  When strategically placed in areas with high footfall or heavy traffic, it target their local audienc effectively.
                  </div>
                </div>
                <div className="whyListItem">
                  <Diversity2Icon className='brand-icon' />
                  <div className="whyListItemTitle">Engaging and Memorable!</div>
                  <div className="whyListItemBody">
                  People tend to remember impactful art, making it more likely for the message or brand to stick in their minds.
                  </div>
                </div>
                {/* <div className="whyListItem">
                  <EngineeringIcon className='brand-icon' />
                  <div className="whyListItemTitle">Easy Installation and Maintenance!</div>
                  <div className="whyListItemBody">
                    Making the setup process efficient and hassle-free, ensuring the advertisements retain their effectiveness throughout their display period.
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WallPainting;