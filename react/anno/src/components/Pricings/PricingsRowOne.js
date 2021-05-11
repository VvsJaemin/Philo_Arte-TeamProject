import React from "react";

const PricingsRowOne = ({ data, classes }) => (
  <section id="pricing" className={classes ? classes : ""}>
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div
            key={item.id}
            className={
              "col-md-4 pricing-table col-sm-4 " +
              (item.featured === "true" ? "featured" : "")
            }
          >
            <div
              className={
                "pricing-box " + (item.featured === "true" ? "featured" : "")
              }
            >
              {item.featured === "true" ? (
                <div className="featured-mark">Featured</div>
              ) : null}
              <h3
                className={
                  (item.featured === "true" ? "default-color" : "dark-color") +
                  " mb-0"
                }
              >
                {item.title}
              </h3>
              <h4 className="dark-color">{item.tagline}</h4>
              <h2
                className={
                  "font-60px sm-font-30px " +
                  (item.featured === "true" ? "default-color" : "dark-color")
                }
              >
                <sup
                  className={
                    item.featured === "true" ? "default-color" : "dark-color"
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
                    (item.featured === "true" ? "btn-color" : "btn-dark")
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
  </section>
);

export default PricingsRowOne;
