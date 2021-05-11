import React from "react";
import Countdown from "react-countdown";
import parse from "html-react-parser";

const CountdownTwo = ({ title, tagline, backfont }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li className="white-color">
          <span className="days font-30px font-700">{days}</span>
          <p className="font-600">days </p>
        </li>
        <li className="white-color">
          <span className="hours font-30px font-700">{hours}</span>
          <p className="font-600">hours </p>
        </li>
        <li className="white-color">
          <span className="minutes font-30px font-700">{minutes}</span>
          <p className="font-600">minutes</p>
        </li>
        <li className="white-color">
          <span className="seconds font-30px font-700">{seconds}</span>
          <p className="font-600">seconds</p>
        </li>
      </ul>
    );
  };

  return (
    <section className="default-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 centerize-col">
            <div className="section-title text-center">
              <h2
                className="cardo-font dark-color"
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
            <div className="countdown-container mt-0 mb-0">
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

export default CountdownTwo;
