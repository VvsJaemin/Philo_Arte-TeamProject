import React from "react";
import parse from "html-react-parser";

const AboutSix = ({
  classes,
  tagline,
  title,
  backfont,
  children,
  textBtn,
  pathBtn,
  image,
  video,
}) => (
  <section className={"lg-section " + classes ? classes : ""}>
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {video ? (
        <div className="video-box_overlay">
          <div className="center-layout">
            <div className="v-align-middle">
              <a className="popup-youtube" href={video}>
                <div className="play-button">
                  <i className="tr-icon ion-android-arrow-dropright"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    <div className="container-fluid">
      <div className="col-md-5 col-sm-7 col-md-offset-6 col-sm-offset-4 pl-80 pr-70">
        <div className="section-title">
          <h2 className="cardo-font default-color" data-backfont={backfont}>
            {tagline}
          </h2>
          <h1>{title && parse(title)}</h1>
          <hr className="left-line dark-bg" />
        </div>
        {children && parse(children)}
        <p className="mt-30">
          <a href={pathBtn} className="btn btn-lg btn-dark btn-square">
            {textBtn ? textBtn : "Read more"}
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default AboutSix;
