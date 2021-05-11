import React from "react";
import imgGalaxy from "../../assets/images/background/galaxy.jpg";
import LoadScript from "../../helpers/LoadScript";

const Maintenance404 = () => {
  LoadScript("js/revolution/js/revolution.addon.particles.min.js?ver=1.0.3");
  LoadScript("js/custom/404.js");

  return (
    <div className="remove-padding transition-none">
      <div
        id="rev_slider_16_1_wrapper"
        className="rev_slider_wrapper fullscreen-container"
        data-alias="404-error-page"
        data-source="gallery"
        style={{ background: "transparent", padding: "0px" }}
      >
        <div
          id="rev_slider_16_1"
          className="rev_slider fullscreenbanner"
          style={{ display: "none" }}
          data-version="5.4.1"
        >
          <ul>
            <li
              data-index="rs-34"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop="0"
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
              data-param1=""
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              <img
                src={imgGalaxy}
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina
              />

              <div
                className="tp-caption   tp-resizeme  tp-imgopacity rs-parallaxlevel-1"
                id="slide-34-layer-3"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-width="full-proportional"
                data-height="full-proportional"
                data-whitespace="nowrap"
                data-type="image"
                data-basealign="slide"
                data-responsive_offset="on"
                data-frames='[{"delay":200,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:10px;","to":"o:1;fb:0px;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: "5", opacity: "0.5 !important" }}
              >
                <div
                  className="rs-looped rs-slideloop"
                  data-easing="Power1.easeInOut"
                  data-speed="1"
                  data-xs="-5"
                  data-xe="5"
                  data-ys="0"
                  data-ye="0"
                >
                  <img
                    src={imgGalaxy}
                    alt=""
                    data-ww="['full-proportional','full-proportional','full-proportional','full-proportional']"
                    data-hh="['full-proportional','full-proportional','full-proportional','full-proportional']"
                    width="1920"
                    height="1823"
                    data-no-retina
                  />
                </div>
              </div>

              <div
                className="tp-caption   tp-resizeme  tp-imgopacity rs-parallaxlevel-2"
                id="slide-34-layer-5"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-width="full-proportional"
                data-height="full-proportional"
                data-whitespace="nowrap"
                data-type="image"
                data-basealign="slide"
                data-responsive_offset="on"
                data-frames='[{"delay":300,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:10px;","to":"o:1;fb:0px;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: "6", opacity: "0.5 !important" }}
              >
                <div
                  className="rs-looped rs-slideloop"
                  data-easing="Power1.easeInOut"
                  data-speed="1"
                  data-xs="0"
                  data-xe="0"
                  data-ys="-5"
                  data-ye="5"
                >
                  <img
                    src={imgGalaxy}
                    alt=""
                    data-ww="['full-proportional','full-proportional','full-proportional','full-proportional']"
                    data-hh="['full-proportional','full-proportional','full-proportional','full-proportional']"
                    width="1920"
                    height="1823"
                    data-no-retina
                  />
                </div>
              </div>

              <div
                className="tp-caption   tp-resizeme  tp-imgopacity rs-parallaxlevel-3"
                id="slide-34-layer-7"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-width="full-proportional"
                data-height="full-proportional"
                data-whitespace="nowrap"
                data-type="image"
                data-basealign="slide"
                data-responsive_offset="on"
                data-frames='[{"delay":400,"speed":2000,"frame":"0","from":"sX:1;sY:1;opacity:0;fb:10px;","to":"o:1;fb:0px;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: "7", opacity: "0.5 !important" }}
              >
                <div
                  className="rs-looped rs-wave"
                  data-speed="10"
                  data-angle="0"
                  data-radius="15px"
                  data-origin="50% 50%"
                >
                  <img
                    src={imgGalaxy}
                    alt=""
                    data-ww="['full-proportional','full-proportional','full-proportional','full-proportional']"
                    data-hh="['full-proportional','full-proportional','full-proportional','full-proportional']"
                    width="1920"
                    height="1823"
                    data-no-retina
                  />
                </div>
              </div>

              <div
                className="tp-caption   rs-parallaxlevel-1"
                id="slide-34-layer-14"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-67','-67','-47','-67']"
                data-fontsize="['250','250','200','150']"
                data-lineheight="['250','250','200','150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":800,"speed":2000,"frame":"0","from":"sX:2;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "8",
                  whiteSpace: "nowrap",
                  fontSize: "250px",
                  lineHeight: "250px",
                  fontWeight: "700",
                  color: "rgba(255,0,255,1)",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "-10px",
                }}
              >
                <div
                  className="rs-looped rs-wave"
                  data-speed="3"
                  data-angle="0"
                  data-radius="2px"
                  data-origin="50% 50%"
                >
                  404
                </div>
              </div>

              <div
                className="tp-caption   rs-parallaxlevel-1"
                id="slide-34-layer-13"
                data-x="['center','center','center','center']"
                data-hoffset="['-3','-3','-3','-3']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-70','-70','-50','-70']"
                data-fontsize="['250','250','200','150']"
                data-lineheight="['250','250','200','150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":700,"speed":2000,"frame":"0","from":"sX:2;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "9",
                  whiteSpace: "nowrap",
                  fontSize: "250px",
                  lineHeight: "250px",
                  fontWeight: "700",
                  color: "rgba(255,255,0,1)",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "-10px",
                }}
              >
                <div
                  className="rs-looped rs-wave"
                  data-speed="3"
                  data-angle="0"
                  data-radius="2px"
                  data-origin="50% 50%"
                >
                  404
                </div>
              </div>

              <div
                className="tp-caption   rs-parallaxlevel-1"
                id="slide-34-layer-12"
                data-x="['center','center','center','center']"
                data-hoffset="['3','3','3','3']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-70','-70','-50','-70']"
                data-fontsize="['250','250','200','150']"
                data-lineheight="['250','250','200','150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"sX:2;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "10",
                  whiteSpace: "nowrap",
                  fontSize: "250px",
                  lineHeight: "250px",
                  fontWeight: "700",
                  color: "rgba(0,255,255,1)",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "-10px",
                }}
              >
                <div
                  className="rs-looped rs-wave"
                  data-speed="3"
                  data-angle="0"
                  data-radius="2px"
                  data-origin="50% 50%"
                >
                  404
                </div>
              </div>

              <div
                className="tp-caption   rs-parallaxlevel-1"
                id="slide-34-layer-11"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-70','-70','-50','-70']"
                data-fontsize="['250','250','200','150']"
                data-lineheight="['250','250','200','150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":500,"speed":2000,"frame":"0","from":"sX:2;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "11",
                  whiteSpace: "nowrap",
                  fontSize: "250px",
                  lineHeight: "250px",
                  fontWeight: "700",
                  color: "rgba(255,255,255,1)",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "-10px",
                }}
              >
                404
              </div>

              <div
                className="tp-caption   rs-parallaxlevel-1"
                id="slide-34-layer-2"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['55','55','65','15']"
                data-fontsize="['50','50','40','30']"
                data-lineheight="['50','50','40','30']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"sX:2;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "12",
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                  lineHeight: "50px",
                  fontWeight: "700",
                  color: "rgba(255,255,255,1)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                PAGE NOT FOUND
              </div>

              <div
                className="tp-caption   rs-parallaxlevel-1"
                id="slide-34-layer-9"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['160','160','150','80']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: "13",
                  whiteSpace: "nowrap",
                  fontSize: "20px",
                  lineHeight: "22px",
                  fontWeight: "400",
                  color: "rgba(255,255,255,1)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <form
                  role="search"
                  method="get"
                  id="searchform"
                  className="revtp-searchform"
                  action="#"
                >
                  <input
                    type="text"
                    name="s"
                    id="s"
                    placeholder="Try again..."
                  />
                  <input
                    style={{ verticalAlign: "top", cursor: "pointer" }}
                    type="submit"
                    id="searchsubmit"
                    value="Find"
                  />
                </form>
              </div>
            </li>
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance404;
