import React from "react";
import parse from "html-react-parser";
import imgBg from "../../assets/images/background/stars-bg-4.png";

const ContactTwo = ({ title, children, textBtn }) => (
  <section
    className="transition-none"
    id="contact"
    style={{ background: `url(${imgBg}) center center no-repeat #fff` }}
  >
    <div className="container">
      {children}
      <div className={"row " + (children ? "mt-100" : "")}>
        <div className="col-md-12">
          <div className="section-title text-center">
            <h1 className="dark-color">{title && parse(title)}</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-sm-10 centerize-col">
          <form
            name="contact-form"
            id="contact-form"
            action="php/contact.php"
            method="POST"
            className="contact-form-style-03 dark-bg all-padding-40 mt-50 border-radius-5"
          >
            <div className="messages"></div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="md-input style-02"
                    id="name"
                    placeholder="Name *"
                    required
                    data-error="Your Name is Required"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="md-input style-02"
                    id="email"
                    placeholder="Email *"
                    required
                    data-error="Please Enter Valid Email"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="email"
                    name="email"
                    className="md-input style-02"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor="subject">Your Budget</label>
                <select name="orderby" className="orderby">
                  <option value="">$500 - $1000</option>
                  <option value="">$1000 - $2000</option>
                  <option value="">$2000 - $5000</option>
                </select>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    name="message"
                    className="md-textarea style-02"
                    id="message"
                    rows="7"
                    placeholder="Project Details"
                    required
                    data-error="Please, Leave us a message"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="text-center">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-lg btn-color btn-circle remove-margin"
                  >
                    {textBtn || "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactTwo;
