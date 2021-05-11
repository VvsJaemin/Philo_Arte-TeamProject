import React from "react";
import parse from "html-react-parser";
import imgBg from "../../assets/images/background/stars-bg-4.png";

const ProcessOne = ({ data }) => (
  <section
    style={{ background: `url(${imgBg}) center center no-repeat #fff` }}
  >
    <div className="container">
      <div className="row our-process-style-01">
        {data.map((item) => (
          <div
            className="col-md-3 col-sm-6 col-xs-12 line xs-mb-30 sm-mb-30"
            key={item.id}
          >
            <div className="text-left">
              <i className={"dark-color font-50px " + item.icon}></i>
              <h2 className="mt-20 default-color font-700">{item.title}</h2>
              <p className="mb-0 mt-20 dark-color">
                {item.text && parse(item.text)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessOne;
