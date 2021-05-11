import React from "react";
import Countdown from "react-countdown";
import parse from "html-react-parser";

const CountdownFour = ({ title, tagline, backfont }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li>
          <span className="days white-color font-30px font-700">{days}</span>
          <p className="white-color text-uppercase">days </p>
        </li>
        <li>
          <span className="hours white-color font-30px font-700">{hours}</span>
          <p className="white-color text-uppercase">hours </p>
        </li>
        <li>
          <span className="minutes white-color font-30px font-700">
            {minutes}
          </span>
          <p className="white-color text-uppercase">minutes</p>
        </li>
        <li>
          <span className="seconds white-color font-30px font-700">
            {seconds}
          </span>
          <p className="white-color text-uppercase">seconds</p>
        </li>
      </ul>
    );
  };

  return (
    <section className="dark-bg">
      <div className="container">
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

export default CountdownFour;
