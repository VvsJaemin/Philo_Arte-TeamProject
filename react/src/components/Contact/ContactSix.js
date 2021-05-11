import React from "react";
import dataStyle from "../../data/Maps/style-3-map.json";
import Map from "../Map/Map";

const ContactSix = ({ textBtn }) => (
  <section className="white-bg pt-0 pb-0 transition-none" id="contact">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div className="bg-flex-holder bg-flex-cover">
        <Map type="3" dataStyle={dataStyle} />
      </div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5 pt-70 pb-70 xs-pt-20 xs-pb-80">
        <form
          name="contact-form"
          id="contact-form"
          className="contact-form-style-01"
        >
          <div className="messages"></div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
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
            <div className="col-md-6 col-sm-6">
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
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="md-input"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
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
              <div className="text-left mt-20">
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
  </section>
);

export default ContactSix;
