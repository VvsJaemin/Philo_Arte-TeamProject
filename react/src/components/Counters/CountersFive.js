import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import parse from "html-react-parser";

const CountersFive = ({ data, title, tagline, backfont }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 centerize-col">
            <div className="section-title text-center">
              <h2
                className="cardo-font default-color"
                data-backfont={backfont || "Counters"}
              >
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          {data.slice(0, 4).map((counter) => (
            <div
              key={counter.id}
              className="col-md-3 col-sm-6 xs-mb-40 sm-mb-20 xs-ml-40"
            >
              <div className="counter-type-2 relative">
                <i className={counter.icon + " default-color font-50px"}></i>
                <h3 className="display-block mt-0 mb-0">
                  <span className="counter font-700 dark-color">
                    <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                      <CountUp
                        delay={0.02}
                        duration={4}
                        end={viewed ? counter.value : 0}
                      />
                    </VisibilitySensor>
                  </span>
                </h3>
                <h6 className="mt-5">{counter.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersFive;
