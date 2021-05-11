import React from "react";
import parse from "html-react-parser";

const ProcessThree = ({ tagline, title, backfont, data }) => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12 xs-mb-50 centerize-col">
          <div className="section-title text-center">
            <h2 className="cardo-font default-color" data-backfont={backfont || "Steps"}>
              {tagline}
            </h2>
            <h1 className="white-color">{title && parse(title)}</h1>
          </div>
        </div>
      </div>
      <div className="row our-process-style-01 mt-30">
        {data.map((process, i) => (
          <div
            key={process.id}
            className="col-md-3 col-sm-6 col-xs-12 line xs-mb-30 sm-mb-30"
          >
            <div className="text-left">
              <h1 className="default-color font-800">{`0${i + 1}`}</h1>
              <h2 className="mt-20 white-color font-700">{process.title}</h2>
              <p className="mb-0 mt-20 white-color">{parse(process.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessThree;
