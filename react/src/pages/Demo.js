import React from "react";
// Images
import imgParallax from "../assets/images/background/parallax-bg-2.jpg";
import dataDemo from "../data/Demo/demo-data.json";
import imgHero from "../assets/images/slides/home-bg-17.jpg";
import FooterTwo from "../components/Footer/FooterTwo";
import ParallaxTwo from "../components/ParallaxSection/ParallaxTwo";

const Demo = () => (
  <>
    <section
      className="parallax-bg fixed-bg lg-screen lg-section"
      data-parallax-bg-image={imgHero}
      data-parallax-speed="0.5"
      data-parallax-direction="up"
      id="home"
    >
      <div className="hero-text-wrap gradient-overlay-transparent">
        <div className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12 centerize-col">
                <div className="all-padding-50 text-center white-color">
                  <h1 className="font-800">Anno Studio</h1>
                  <h2 className="font-400 cardo-font">
                    Parallax One Page Template
                  </h2>
                  <h4 className="font-600">
                    Based on Bootstrap Responsive HTML5 and <br />
                    One page Minimal Template
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="grey-bg pb-80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-8 centerize-col">
            <div className="section-title text-center">
              <h2 className="cardo-font default-color" data-backfont="Anno">
                Main Demos
              </h2>
              <h1>Choose The Template</h1>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          {dataDemo.slice(0, 12).map((item) => (
            <div className="col-md-4 col-sm-4 col-xs-12" key={item.id}>
              <div className="product">
                <div className="product-wrap border-dark-15 border-radius-10 box-shadow">
                  <img
                    src={require("../assets/images/" + item.image)}
                    className="img-responsive"
                    alt="demo12"
                  />
                  <div className="product-caption">
                    <div className="product-description text-center">
                      <div className="product-description-wrap">
                        <div className="product-title">
                          <h2>{item.title}</h2>
                        </div>
                        <div className="product-subtitle mt-20">
                          <a
                            href={process.env.PUBLIC_URL + item.path}
                            className="btn-amazing btn btn-lg btn-square"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Preview<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="dark-bg pb-80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-8 centerize-col">
            <div className="section-title text-center">
              <h2 className="cardo-font default-color" data-backfont="Anno">
                Inner Pages
              </h2>
              <h1 className="white-color">Creative Elememts</h1>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          {dataDemo.slice(12, 21).map((item) => (
            <div className="col-md-4 col-sm-4 col-xs-12" key={item.id}>
              <div className="product">
                <div className="product-wrap border-black-15 border-radius-10 box-shadow">
                  <img
                    src={require("../assets/images/" + item.image)}
                    className="img-responsive"
                    alt="demo21"
                  />
                  <div className="product-caption">
                    <div className="product-description text-center">
                      <div className="product-description-wrap">
                        <div className="product-title">
                          <h2>{item.title}</h2>
                        </div>
                        <div className="product-subtitle mt-20">
                          <a
                            href={`${process.env.PUBLIC_URL}\\${item.path}`}
                            className="btn-amazing btn btn-lg btn-square"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Preview<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ParallaxTwo
      title="Let Your Email Address Speak for You"
      tagline="Join us on social media"
      textBtn="Read more"
      pathBtn={process.env.PUBLIC_URL}
      image={imgParallax}
    />
    <FooterTwo />
  </>
);

export default Demo;
