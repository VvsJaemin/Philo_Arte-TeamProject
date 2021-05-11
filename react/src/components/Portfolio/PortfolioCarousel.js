import React from "react";
import Slider from "react-slick";

const PortfolioCarousel = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "single-project-slider",
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="pb-0 pt-0">
      <div className="container-fluid remove-padding">
        <div className="row">
          <Slider {...settings}>
            {data.map((item) => (
              <div className="portfolio-item" key={item.id}>
                <a href="!#">
                  <img
                    src={require("../../assets/images/portfolio/" + item.image)}
                    alt=""
                  />
                  <div className="portfolio-info white-bg">
                    <div className="centrize">
                      <div className="v-center dark-color">
                        <h3>{item.title}</h3>
                        <p>{item.categories[0]}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
