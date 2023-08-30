import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  return (
    <div className='container'>
      <div className="flex-header">
        <div className="head text-center">
          <h2>
            What is Wall Painting?
          </h2>
        </div>
        <div className="head-content">
          <p>
            A ancient form of visual artworks drawing directly on walls or other surfaces offering unique advantages to capture the attention of the audience.
          </p>
        </div>
      </div>

      <div className="flex-content">
        <div className="uses">
          <span>
            Uses of Wall Painting in Flex Printing and Hoardings:
          </span>
          <ul>
            <li>
              <h3>
                Outdoor Advertising:
              </h3>
              <p>
                Hoardings or billboards with painted designs can attract the attention of passersby making them effective tools for promoting products, events or services.
              </p>
            </li>

            <li>
              <h3>
                Artistic Expression:
              </h3>
              <p>
                Allow's artists to showcase their creativity and artistic visuals that leave a lasting impact on viewers.
              </p>
            </li>

            <li>
              <h3>
                Branding and Promotion:
              </h3>
              <p>
                A well-designed wall painting can enhance brand visibility and recognition, as it becomes a recognizable landmark in the area.
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
                Event and Product Promotion:
              </h3>
              <p>
                Temporary wall paintings are ideal for promoting specific events or product launches. They can be easily removed or replaced when the promotion period ends.
              </p>
            </li>

            <li>
              <h3>
                Enhancing Urban Aesthetics:
              </h3>
              <p>
                Can beautify urban spaces and transform mundane walls into vibrant works of art, adding to the overall appeal and aesthetics of the community.
              </p>
            </li>
            <li>
              <h3>
                Cultural and Social Messages:
              </h3>
              <p>
                Used to raise awareness about important issues, bringing attention to topics that need public support.

              </p>
            </li>
          </ul>
        </div>

        <div className='advantages'>
          <h2>
            Advantages of Wall Painting in Flex Printing and Hoardings:
          </h2>

          <div className="container advantages-slider mb-5">
            <Slider {...settings}>
              <div className="slide">
                <h4>
                  Eye-Catching:
                </h4>
                <p>
                  Can be visually striking and attention-grabbing amd stand out due to their size, artistic appeal, and uniqueness.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Long-Lasting:
                </h4>
                <p>
                  Can withstand harsh weather conditions, making them durable and long-lasting. It do not fade easily, providing a more extended period of visibility
                </p>
              </div>
              <div className="slide">
                <h4>
                  Cost-Effective:
                </h4>
                <p>
                  Involve  minimal ongoing costs Unlike electronic advertising, which requires continuous power supply and updates.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Local Targeting:
                </h4>
                <p>
                  When strategically placed in areas with high footfall or heavy traffic, it target their local audienc effectively.
                </p>
              </div>
              <div className="slide">
                <h4>
                  Engaging and Memorable:
                </h4>
                <p>
                  People tend to remember impactful art, making it more likely for the message or brand to stick in their minds.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WallPainting;