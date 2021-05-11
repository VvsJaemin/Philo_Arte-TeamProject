import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import Icofont from "react-icofont";

const TestimonialsThree = ({ title, data, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="mt-0 font-700">{title && parse(title)}</h2>
          </div>
        </div>
        <div className="row">
          <div className="testimonial-style-2">
            <Slider {...settings}>
              {data
                .filter((v, i) => i < 3)
                .map((item, i) => (
                  <div className="col-xs-12" key={item.id}>
                    <div className="testimonial-item">
                      <div className="testimonial-content">
                        <img
                          className="img-responsive"
                          src={require("../../assets/images/" + data[i].image)}
                          alt=""
                        />
                        <h5 className="font-700 mb-0">{data[i].title}</h5>
                        <p className="line-height-26 font-20px">
                          <Icofont
                            icon="quote-left"
                            className="font-50px default-color mt-20"
                          />
                          <span>{data[i].text}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TestimonialsThree;
