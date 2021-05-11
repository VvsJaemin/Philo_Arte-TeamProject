import React from "react";
import parse from "html-react-parser";
import imgPlanet from "../../assets/images/planet-x-right-3.png";

const PricingsTwo = ({ tagline, title, backfont, text, data }) => (
  <>
    <div className="planet-x-wrap">
      <div className="planet-x-right-3">
        <img src={imgPlanet} className="img-responsive" alt="" />
      </div>
    </div>

    <section id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title text-left">
              <h2
                className="cardo-font default-color"
                data-backfont={backfont || "Pricing"}
              >
                {tagline}
              </h2>
              <h1>{title && parse(title)}</h1>
              <p className="mt-50 font-26px line-height-40">{text}</p>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12 xs-mt-50">
            <div className="row">
              {data
                .filter((v, i) => i > 0)
                .map((item) => (
                  <div
                    key={item.id}
                    className={
                      "col-md-6 pricing-table col-sm-6 " +
                      (item.featured === "true" ? "featured" : "")
                    }
                  >
                    <div
                      className={
                        "pricing-box " +
                        (item.featured === "true" ? "featured" : "")
                      }
                    >
                      {item.featured === "true" ? (
                        <div className="featured-mark">Featured</div>
                      ) : null}
                      <h3
                        className={
                          (item.featured === "true"
                            ? "default-color"
                            : "dark-color") + " mb-0"
                        }
                      >
                        {item.title}
                      </h3>
                      <h4 className="dark-color">{item.tagline}</h4>
                      <h2
                        className={
                          "font-60px sm-font-30px " +
                          (item.featured === "true"
                            ? "default-color"
                            : "dark-color")
                        }
                      >
                        <sup
                          className={
                            item.featured === "true"
                              ? "default-color"
                              : "dark-color"
                          }
                        >
                          {item.currency}
                        </sup>
                        <span>{item.price}</span>
                      </h2>
                      <div className="pricicng-feature">
                        <ul>
                          {item.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pricing-box-bottom">
                        <a
                          href="!#"
                          className={
                            "btn btn-lg btn-square full-width " +
                            (item.featured === "true"
                              ? "btn-color"
                              : "btn-dark")
                          }
                        >
                          {item.btnText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PricingsTwo;
