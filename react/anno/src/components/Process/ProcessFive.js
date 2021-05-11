import React from "react";
import imgBg from "../../assets/images/background/stars-bg-3.png";

const ProcessFive = ({ data }) => (
  <section
    style={{ background: `url(${imgBg}) center center no-repeat #24182e` }}
  >
    <div className="container">
      <div className="row our-process-style-01">
        {data.map((item, i) => (
          <div
            className="col-md-3 col-sm-6 col-xs-12 line xs-mb-30 sm-mb-30"
            key={item.id}
          >
            <div className="text-left">
              <h1 className="default-color font-800">0{i + 1}</h1>
              <h2 className="mt-20 white-color font-700">{item.title}</h2>
              <p className="mb-0 mt-20 white-color">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessFive;
