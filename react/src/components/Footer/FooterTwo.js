import React from "react";
import LoadScript from "../../helpers/LoadScript";
import logo from "../../assets/images/logo-footer.png";
import Icofont from "react-icofont";

const Footer = () => {
  LoadScript("./js/master.js");
  return (
    <>
      <footer className="footer">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="widget widget-text">
                  <div className="logo-footer">
                    <a href={process.env.PUBLIC_URL}>
                      <img className="img-responsive" src={logo} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <ul className="footer-nav">
                  <li>
                    <a href="!#">Home</a>
                  </li>
                  <li>
                    <a href="!#">Blogs</a>
                  </li>
                  <li>
                    <a href="!#">Shop</a>
                  </li>
                  <li>
                    <a href="!#">Account</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 social-icons-style-08 transition-none pull-right xs-float-none xs-mt-50">
                <ul className="sm-icon">
                  <li>
                    <a className="facebook" href="#.">
                      <Icofont icon="facebook" />
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#.">
                      <Icofont icon="twitter" />
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a className="behance" href="#.">
                      <Icofont icon="behance" />
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#.">
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
      <a href="!#" id="return-to-top">
        <Icofont icon="arrow-up" />
      </a>
    </>
  );
};

export default Footer;
