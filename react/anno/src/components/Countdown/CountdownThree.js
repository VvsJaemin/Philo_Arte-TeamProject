import React from "react";
import Countdown from "react-countdown";
import parse from "html-react-parser";
import imgBg from "../../assets/images/background/parallax-bg-2.jpg";

const CountdownThree = ({ title, tagline, backfont }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li className="white-color">
          <span className="days font-80px font-700 default-color">{days}</span>
          <p className="text-uppercase font-30px">days </p>
        </li>
        <li className="white-color">
          <span className="hours font-80px font-700 default-color">
            {hours}
          </span>
          <p className="text-uppercase font-30px">hours </p>
        </li>
        <li className="white-color">
          <span className="minutes font-80px font-700 default-color">
            {minutes}
          </span>
          <p className="text-uppercase font-30px">minutes</p>
        </li>
        <li className="white-color">
          <span className="seconds font-80px font-700 default-color">
            {seconds}
          </span>
          <p className="text-uppercase font-30px">seconds</p>
        </li>
      </ul>
    );
  };

  return (
    <section
      className="parallax-bg fixed-bg"
      data-parallax-bg-image={imgBg}
      data-parallax-speed="0.5"
      data-parallax-direction="up"
    >
      <div className="parallax-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 centerize-col">
            <div className="section-title text-center">
              <h2
                className="cardo-font white-color"
                data-backfont={backfont || "Countdown"}
              >
                {tagline}
              </h2>
              <h1 className="white-color">{title && parse(title)}</h1>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-12 text-center">
            <div className="countdown-container">
              <Countdown
                date={Date.now() + (28 * 24 * 60 * 60000 + 41500000)}
                renderer={renderer}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownThree;
