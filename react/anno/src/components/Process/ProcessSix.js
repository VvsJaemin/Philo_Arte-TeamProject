import React from "react";
import Slider from "react-slick";

const ProcessSix = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    centerPadding: "0",
    className: "row service-box-style-06 service-slider",
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
    <section>
      <div className="container">
        <Slider {...settings}>
          {data.map((item, i) => (
            <div className="col-md-3 col-sm-6 col-xs-12 text-center" key={item.id}>
              <div className="icon-img">
                <img
                  className="img-responsive"
                  src={require("../../assets/images/" + item.image)}
                  alt=""
                />
              </div>
              <h3 className="font-800" data-backfont={"0" + (i + 1)}>
                {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProcessSix;
