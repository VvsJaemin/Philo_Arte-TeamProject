import React from "react";
import parse from "html-react-parser";

const ProcessTwo = ({ tagline, title, backfont, data }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12 xs-mb-50 centerize-col">
          <div className="section-title text-center">
            <h2 className="cardo-font default-color" data-backfont={backfont || "Steps"}>
              {tagline}
            </h2>
            <h1>{title && parse(title)}</h1>
          </div>
        </div>
      </div>
      <div className="row our-process-style-03 mt-50">
        {data.map((process) => (
          <div
            key={process.id}
            className="col-md-3 col-sm-6 col-xs-12 line xs-mb-30 sm-mb-30"
          >
            <div className="icon-wrap default-bg">
              <div className="icon">
                <i className={"white-color font-30px " + process.classes}></i>
              </div>
            </div>
            <div className="text-center">
              <h3 className="mt-10 font-600">{process.title}</h3>
              <p className="mb-0">{process.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessTwo;
