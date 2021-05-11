import React from "react";
import parse from "html-react-parser";

const AboutFour = ({ title, text, textBtn, pathBtn, image }) => (
  <section className="lg-section dark-bg" id="about">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{backgroundImage: `url(${image})`}}
      ></div>
    </div>
    <div className="container-fluid">
      <div className="col-md-5 col-sm-7 col-md-offset-6 col-sm-offset-4 pl-80 pr-70">
        <div className="section-title">
          <h1 className="default-color">{title && parse(title)}</h1>
        </div>
        <p className="white-color">
        {text && parse(text)}
        </p>
        <p className="mt-30">
          <a href={pathBtn} className="btn btn-lg btn-color btn-circle">{textBtn || "Read more"}</a>
        </p>
      </div>
    </div>
  </section>
);

export default AboutFour;
