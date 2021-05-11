import React from "react";
import parse from "html-react-parser";

const AboutOne = ({ tagline, title, backfont, image, btnText, dashColor, children }) => (
  <section className="lg-section">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="container-fluid">
      <div className="col-md-5 col-sm-7 col-md-offset-6 col-sm-offset-4 pl-80 pr-70">
        <div className="section-title">
          <h2 className="cardo-font default-color" data-backfont={backfont || "Partners"}>
            {tagline}
          </h2>
          <h1>{title && parse(title)}</h1>
          {dashColor ? (
            <hr
              className={
                "left-line " + (dashColor.length ? dashColor : "default") + "-bg"
              }
            />
          ) : null}
        </div>
        <p>{children && parse(children)}</p>
        <p className="mt-30">
          <a href="!#" className="btn btn-lg btn-dark btn-square">
            {btnText || "Read More"}
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default AboutOne;
