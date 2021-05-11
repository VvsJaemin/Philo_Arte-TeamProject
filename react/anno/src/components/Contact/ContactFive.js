import React from "react";
import parse from "html-react-parser";
// Images
import imgBg from "../../assets/images/background/stars-bg.png";

const ContactFive = ({ tagline, title, backfont, textBtn }) => (
  <section
    className="transition-none"
    id="contact"
    style={{ background: `url(${imgBg}) center center no-repeat #24182e` }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h2
              className="cardo-font default-color"
              data-backfont={backfont || "Target"}
            >
              {tagline}
            </h2>
            <h1 className="white-color">{title && parse(title)}</h1>
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
            className="contact-form-style-01 white-bg all-padding-40 mt-50"
          >
            <div className="messages"></div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="md-input"
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
                    className="md-input"
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
                    className="md-input"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor="subject">Your Budget</label>
                <select name="orderby" className="orderby">
                  <option>
                    $500 - $1000
                  </option>
                  <option>$1000 - $2000</option>
                  <option>$2000 - $5000</option>
                </select>
              </div>
              <div className="col-md-12 col-sm-12">
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    name="message"
                    className="md-textarea"
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
                    className="btn btn-lg btn-dark btn-square remove-margin"
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

export default ContactFive;
