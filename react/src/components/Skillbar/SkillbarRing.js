import React, { useEffect, useRef, useState } from "react";
import EasyPieChart from "easy-pie-chart";
import VisibilitySensor from "react-visibility-sensor";

const SkillbarRing = ({ title, value }) => {
  let element = useRef();
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  useEffect(() => {
    if (viewed) {
      new EasyPieChart(element.current.querySelector(".chart-03"), {
        easing: "easeInQuad",
        barColor: "#F5325C",
        trackColor: "#ffffff",
        scaleColor: false,
        scaleLength: 2,
        size: 140, //110
        animate: {
          duration: 2000,
          enabled: true,
        },
        onStep: function (from, to, value) {
          element.current.querySelector(".percent").innerHTML = Math.round(
            value
          );
        },
      });
    }
  }, [viewed]);
  return (
    <VisibilitySensor onChange={viewChangeHandler} delayedCall>
      <div
        className="col-md-3 col-sm-6 col-xs-12 sm-mb-30 xs-mb-30"
        ref={element}
      >
        <div className="chart-circle">
          <span className="chart-03" data-percent={value}>
            <span className="percent dark-color font-20px font-500"></span>
          </span>
        </div>
        <div className="chart-title">
          <h3 className="dark-color font-600">{title}</h3>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default SkillbarRing;
