import React from "react";
import parse from "html-react-parser";
import dataStyle from "../../data/Maps/style-3-map.json";
import Map from "../Map/Map";

const ContactThree = ({ title, text, textBtn, children }) => (
  <section className="white-bg transition-none" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12 xs-mb-30">
          <h2 className="font-700">{title && parse(title)}</h2>
          <p className="mt-30">{text && parse(text)}</p>
          <form
            name="contact-form"
            id="contact-form-03"
            action="php/contact.php"
            method="POST"
            className="contact-form-style-01 mt-50"
          >
            <div className="messages"></div>
            <div className="form-group">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="md-input"
                id="name3"
                required
                placeholder="Name *"
                data-error="Your Name is Required"
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="md-input"
                id="email3"
                placeholder="Email*"
                required
                data-error="Please Enter Valid Email"
              />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className="md-textarea"
                id="message3"
                rows="7"
                placeholder="Message*"
                required
                data-error="Please, Leave us a message"
              ></textarea>
              <div className="help-block with-errors"></div>
            </div>
            <button
              type="submit"
              name="submit"
              className="btn btn-color btn-md remove-margin btn-circle"
            >
              {textBtn || "Send Message"}
            </button>
          </form>
        </div>
        <div className="col-md-5 col-sm-5 col-xs-12 xs-mb-30 mt-40 col-md-offset-1 col-sm-offset-1">
          <div
            id="map-style-3"
            className="min-height-300px relative"
            style={{ height: "300px", overflow: "hidden" }}
          >
            <Map type="3" dataStyle={dataStyle} />
          </div>
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default ContactThree;
