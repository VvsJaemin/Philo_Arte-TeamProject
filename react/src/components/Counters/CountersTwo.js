import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import imgBg from "../../assets/images/background/stars-bg.png";
import imgPlanet from "../../assets/images/planet-x-right-2.png";

const CountersTwo = ({ data }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <>
      <div className="planet-x-wrap">
        <div className="planet-x-right-2">
          <img src={imgPlanet} className="img-responsive" alt="" />
        </div>
      </div>
      <section
        style={{ background: `url(${imgBg}) center center no-repeat #24182e` }}
      >
        <div className="container">
          <div className="row">
            {data.map((counter) => (
              <div
                key={counter.id}
                className="col-md-3 col-sm-6 xs-mb-40 sm-mb-20 xs-ml-40"
              >
                <div className="counter-type-2 relative">
                  <i
                    className={counter.icon + " font-60px " + counter.color}
                  ></i>
                  <h3 className="display-block mt-0 mb-0 white-color">
                    <span className="counter font-600">
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
                  </h3>
                  <h5 className="mt-0 font-600 white-color">{counter.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CountersTwo;
