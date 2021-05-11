import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import parse from "html-react-parser";

const CountersSix = ({ data, title, tagline, backfont }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <section className="default-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 centerize-col">
            <div className="section-title text-center white-color">
              <h2 className="cardo-font" data-backfont={backfont || "Counters"}>
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
            </div>
          </div>
        </div>
        <div className="row counter-type-3 mt-50 row-flex flex-center">
          {data.slice(4, 8).map((counter) => (
            <div
              key={counter.id}
              className="col-md-3 col-sm-6 col-xs-12 xs-mb-40 sm-mb-20 xs-ml-40"
            >
              <div className="counter-wrap">
                <div className="pull-left">
                  <i
                    className={counter.icon + " font-40px " + counter.color}
                  ></i>
                </div>
                <div className="pull-left pl-20">
                  <h2>
                    <span className="counter font-700 white-color">
                      <VisibilitySensor
                        onChange={viewChangeHandler}
                        delayedCall
                      >
                        <CountUp
                          delay={0.02}
                          duration={4}
                          end={viewed ? counter.value : 0}
                        />
                      </VisibilitySensor>
                    </span>
                  </h2>
                  <h3 className="white-color">
                    {counter.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSix;
