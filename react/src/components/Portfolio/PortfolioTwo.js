import React from "react";
import parse from "html-react-parser";
import LoadScript from "../../helpers/LoadScript";
import PortfolioTwoItem from "./PortfolioTwoItem";

const PortfolioTwo = ({ title, data }) => {
  LoadScript("js/portfolio/portfolio-grid.js");

  return (
    <section id="portfolio" className="pt-0 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="section-title text-left text-sm-center text-xs-center">
              {title && <h1 data-backfont-sm="Portfolio">{parse(title)}</h1>}
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-md-12">
            <div id="portfolio-gallery" className="cbp">
              {data.map((item, i) => (
                <PortfolioTwoItem
                  key={item.id}
                  index={i}
                  title={item.title}
                  categories={item.categories}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
