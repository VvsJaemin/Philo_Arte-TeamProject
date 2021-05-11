import React from "react";
import parse from "html-react-parser";
import img from "../../assets/images/background/parallax-bg-2.png";

const PresentationTwo = ({ title, text, textBtn, pathBtn, backfont }) => (
  <section
    style={{ background: `url(${img}) center center no-repeat #24182e` }}
    className="height-600px"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-left white-color">
          <h1 className="font-700 xs-font-40px font-40px" data-backfont={backfont || "Anno"}>
            {title && parse(title)}
          </h1>
          <p className="mt-30">{text && parse(text)}</p>
          <p className="mt-30">
            <a href={pathBtn} className="btn btn-lg btn-color btn-square">
              {textBtn || "Read More"}
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PresentationTwo;
