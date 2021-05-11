import React from "react";
import parse from "html-react-parser";
import LoadScript from "../../helpers/LoadScript";
import PortfolioFilter from "./PortfolioFilter";

const PortfolioBoxedSpaceFour = ({
  title,
  backfont,
  data,
  filter,
  categories,
}) => {
  LoadScript("js/portfolio/portfolio-grid.js");

  return (
    <section id="portfolio" className="white-bg pb-0 pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="mt-0 font-700" data-backfont={backfont || "Works"}>
              {title && parse(title)}
            </h2>
          </div>
        </div>
        {filter === true && Array.isArray(categories) ? (
          <PortfolioFilter
            categories={categories}
            classes="mb-50 transparent-bg"
          />
        ) : null}
        <div className="row">
          <div className="col-md-12">
            <div id="portfolio-gallery" className="cbp">
              {data.slice(0,8).map((item, i) => (
                <div
                  className={
                    "cbp-item col-md-3 col-sm-4 with-spacing " +
                    item.categories
                      .join(",")
                      .replace(/\s+/g, "-")
                      .replace(/,/g, " ")
                      .toLowerCase()
                      .split()
                  }
                  key={item.id}
                >
                  <div className="portfolio-item">
                    <a href="!#">
                      <img
                        src={require("../../assets/images/portfolio/" +
                          item.image)}
                        alt=""
                      />
                      <div className="portfolio-info white-bg">
                        <div className="centrize">
                          <div className="v-center dark-color">
                            <h3>{item.title}</h3>
                            <p>{categories[0]}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBoxedSpaceFour;
