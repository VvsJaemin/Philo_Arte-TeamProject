import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import parse from "html-react-parser";

const CountersThree = ({ data, title, tagline, backfont }) => {
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
        <div className="row mt-50 row-flex flex-center">
          {data.slice(0, 4).map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6 col-xs-12">
              <div className="counter-wrap">
                <i className={counter.icon + " font-40px " + counter.color}></i>
                <h2>
                  <span className="counter font-700">
                    <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                      <CountUp
                        delay={0.02}
                        duration={4}
                        end={viewed ? counter.value : 0}
                      />
                    </VisibilitySensor>
                  </span>
                </h2>
                <h3 className="dark-color">{counter.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersThree;
