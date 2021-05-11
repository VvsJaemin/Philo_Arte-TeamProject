import React from "react";
import LoadScript from "../../helpers/LoadScript";
import logoFooter from "../../assets/images/logo-footer.png";
import Icofont from "react-icofont";

const FooterThree = () => {
  LoadScript("./js/master.js");
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="widget widget-text">
                <div className="logo-footer">
                  <a href={process.env.PUBLIC_URL}>
                    <img className="img-responsive" src={logoFooter} alt="" />
                  </a>
                </div>
                <p>
                  Anno template provides fully flexible templates, allowing to
                  customize every page.
                </p>
                <p className="mt-20 mb-0">
                  <a href="tel:+44 1234-567-8">+44 1234-567-8</a>
                </p>
                <p className="mt-0">
                  <a
                    href="https://www.google.com/maps/search/Potsdamer+Platz+9797/@52.5096488,13.3737554,17z/data=!3m1!4b1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Potsdamer Platz 9797
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">About Us</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>About Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Portfolio</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Services</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Contact Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Shop</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Locations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 social-icons-style-08 transition-none">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Join The Newsletter</h5>
                <form
                  name="subscribe"
                  id="subscribe"
                  action="php/subscribe.php"
                  method="POST"
                  className="contact-form-style-01"
                >
                  <div className="form-group mt-20 mb-0">
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="md-input style-02"
                      id="email"
                      placeholder="email"
                      required
                      data-error="Your Name is Required"
                    />
                  </div>
                  <div className="text-left mt-10">
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-lg btn-color btn-square remove-margin"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <ul className="sm-icon mt-20">
                <li>
                  <a className="facebook" href={process.env.PUBLIC_URL}>
                    <Icofont icon="facebook" />
                    <span></span>
                  </a>
                </li>
                <li>
                  <a className="twitter" href={process.env.PUBLIC_URL}>
                    <Icofont icon="twitter" />
                    <span></span>
                  </a>
                </li>
                <li>
                  <a className="behance" href={process.env.PUBLIC_URL}>
                    <Icofont icon="behance" />
                    <span></span>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href={process.env.PUBLIC_URL}>
                    <Icofont icon="linkedin" />
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
