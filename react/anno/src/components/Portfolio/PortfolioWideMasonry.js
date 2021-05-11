import React from "react";
import parse from "html-react-parser";
import LoadScript from "../../helpers/LoadScript";
import PortfolioTwoItem from "./PortfolioTwoItem";
import PortfolioFilter from "./PortfolioFilter";

const PortfolioWideMasonry = ({
  data,
  title,
  tagline,
  backfont,
  filter,
  categories,
  classes
}) => {
  LoadScript("js/portfolio/portfolio-grid.js");

  return (
    <section id="portfolio" className={"pb-0 " + classes}>
      <div className="container">
        {title ? (
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2
                  className="cardo-font default-color"
                  data-backfont={backfont || "Works"}
                >
                  {tagline}
                </h2>
                <h1>{title && parse(title)}</h1>
                <hr className="center_line dark-bg" />
              </div>
            </div>
          </div>
        ) : null}
        {filter === true && Array.isArray(categories) ? (
          <PortfolioFilter categories={categories} classes="mb-80" />
        ) : null}
      </div>
      <div className="container-fluid remove-padding">
        <div className="row">
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

export default PortfolioWideMasonry;
