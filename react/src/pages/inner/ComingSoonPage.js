import React from "react";
import imgBg from "../../assets/images/background/comingsoon-bg.jpg";
import LoadScript from "../../helpers/LoadScript";
import Icofont from "react-icofont";

const ComingSoonPage = () => {

    LoadScript("js/revolution/js/revolution.addon.countdown.min.js");
    LoadScript("js/custom/comingSoon.js");
  

  return (
    <div className="wrapper">
      <div className="remove-padding transition-none">
        <div
          id="rev_slider_152_1_wrapper"
          className="rev_slider_wrapper fullscreen-container"
          data-alias="coming-soon"
          data-source="gallery"
          style={{ backgroundColor: "#222222", padding: "0px" }}
        >
          <div
            id="rev_slider_152_1"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
            data-version="5.4.1"
          >
            <ul>
              <li
                data-index="rs-414"
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
                  src={imgBg}
                  alt=""
                  data-bgposition="center center"
                  data-kenburns="on"
                  data-duration="20000"
                  data-ease="Linear.easeNone"
                  data-scalestart="130"
                  data-scaleend="100"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  className="rev-slidebg"
                  data-no-retina
                />
                <div className="hero-text-wrap gradient-overlay-transparent">
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-1"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','50','50','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['150','50','50','30']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":300,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-blendmode="screen"
                    style={{
                      zIndex: "5",
                      whiteSpace: "nowrap",
                      fontSize: "30px",
                      lineHeight: "30px",
                      fontWeight: "700",
                      color: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Anno Parallax Studio One Page Template
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-2"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','50','50','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['200','150','150','120']"
                    data-fontsize="['100','100','100','70']"
                    data-lineheight="['100','100','100','70']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":400,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "6",
                      whiteSpace: "nowrap",
                      fontSize: "100px",
                      lineHeight: "100px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "-5px",
                    }}
                  >
                    LAUNCHING
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-3"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','50','50','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['290','240','240','190']"
                    data-fontsize="['100','100','100','70']"
                    data-lineheight="['100','100','100','70']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":500,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "7",
                      whiteSpace: "nowrap",
                      fontSize: "100px",
                      lineHeight: "100px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "-5px",
                    }}
                  >
                    VERY SOON.
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    data-x="['left','left','left','left']"
                    data-hoffset="['60','-20','0','15']"
                    data-y="['top','top','top','top']"
                    data-voffset="['450','380','380','220']"
                    data-fontsize="['200','150','100','70']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"x:left;rX:45deg;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-blendmode="screen"
                    style={{
                      zIndex: "8",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "200px",
                      lineHeight: "200px",
                      fontWeight: "600",
                      color: "#F5325C",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "-5px",
                    }}
                    id="t_days"
                  >
                    00
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    data-x="['left','left','left','left']"
                    data-hoffset="['330','200','150','115']"
                    data-y="['top','top','top','top']"
                    data-voffset="['450','380','380','220']"
                    data-fontsize="['200','150','100','70']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1200,"speed":2000,"frame":"0","from":"x:left;rX:45deg;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-blendmode="screen"
                    style={{
                      zIndex: "9",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "200px",
                      lineHeight: "200px",
                      fontWeight: "700",
                      color: "#F5325C",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "-5px",
                    }}
                    id="t_hourss"
                  >
                    00
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    data-x="['left','left','left','left']"
                    data-hoffset="['600','420','300','215']"
                    data-y="['top','top','top','top']"
                    data-voffset="['450','380','380','220']"
                    data-fontsize="['200','150','100','70']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":900,"speed":2000,"frame":"0","from":"x:left;rX:45deg;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-blendmode="screen"
                    style={{
                      zIndex: "10",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "200px",
                      lineHeight: "200px",
                      fontWeight: "700",
                      color: "#F5325C",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "-5px",
                    }}
                    id="t_minutes"
                  >
                    00
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    data-x="['left','left','left','left']"
                    data-hoffset="['870','640','450','315']"
                    data-y="['top','top','top','top']"
                    data-voffset="['450','380','380','220']"
                    data-fontsize="['200','150','100','70']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"x:left;rX:45deg;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-blendmode="screen"
                    style={{
                      zIndex: "11",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "200px",
                      lineHeight: "200px",
                      fontWeight: "700",
                      color: "#F5325C",
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "-5px",
                    }}
                    id="t_seconds"
                  >
                    00
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-6"
                    data-x="['left','left','left','left']"
                    data-hoffset="['60','-20','0','15']"
                    data-y="['top','top','top','top']"
                    data-voffset="['520','460','460','300']"
                    data-fontsize="['25','25','20','15']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1600,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "12",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "25px",
                      lineHeight: "25px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    DAYS
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-9"
                    data-x="['left','left','left','left']"
                    data-hoffset="['330','200','150','115']"
                    data-y="['top','top','top','top']"
                    data-voffset="['520','460','460','300']"
                    data-fontsize="['25','25','20','15']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1300,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "13",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "25px",
                      lineHeight: "25px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    HOURS
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-11"
                    data-x="['left','left','left','left']"
                    data-hoffset="['600','420','301','215']"
                    data-y="['top','top','top','top']"
                    data-voffset="['520','460','460','300']"
                    data-fontsize="['25','25','20','15']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "14",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "25px",
                      lineHeight: "25px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    MINUTES
                  </div>
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-414-layer-13"
                    data-x="['left','left','left','left']"
                    data-hoffset="['870','640','450','315']"
                    data-y="['top','top','top','top']"
                    data-voffset="['520','460','460','300']"
                    data-fontsize="['25','25','20','15']"
                    data-width="['300','300','200','100']"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":700,"speed":2000,"frame":"0","from":"x:left;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "15",
                      minWidth: "300px",
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      fontSize: "25px",
                      lineHeight: "25px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    SECONDS
                  </div>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="tp-caption tp-resizeme"
                    id="slide-414-layer-16"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','50','50','30']"
                    data-y="['bottom','bottom','bottom','bottom']"
                    data-voffset="['100','100','50','30']"
                    data-width="60"
                    data-height="60"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-actions=""
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(59, 89, 152, 1.00);bc:rgba(59, 89, 152, 1.00);"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "16",
                      minWidth: "60px",
                      maxWidth: "60px",
                      whiteSpace: "nowrap",
                      fontSize: "20px",
                      lineHeight: "60px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                      borderColor: "rgba(255, 255, 255, 1.00)",
                      borderStyle: "solid",
                      borderWidth: "2px 2px 2px 2px",
                      borderRadius: "50% 50% 50% 50%",
                      cursor: "pointer",
                    }}
                  >
                    <Icofont icon="facebook" />
                  </a>
                  <a
                    className="tp-caption   tp-resizeme"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={process.env.PUBLIC_URL}
                    id="slide-414-layer-17"
                    data-x="['left','left','left','left']"
                    data-hoffset="['170','120','120','100']"
                    data-y="['bottom','bottom','bottom','bottom']"
                    data-voffset="['100','100','50','30']"
                    data-width="60"
                    data-height="60"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-actions=""
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(85, 172, 238, 1.00);bc:rgba(85, 172, 238, 1.00);"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "17",
                      minWidth: "60px",
                      maxWidth: "60px",
                      whiteSpace: "nowrap",
                      fontSize: "20px",
                      lineHeight: "60px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                      borderColor: "rgba(255, 255, 255, 1.00)",
                      borderStyle: "solid",
                      borderWidth: "2px 2px 2px 2px",
                      borderRadius: "50% 50% 50% 50%",
                      cursor: "pointer",
                    }}
                  >
                    <Icofont icon="twitter" />
                  </a>

                  <a
                    className="tp-caption   tp-resizeme"
                    target="_blank"
                    
                    rel="noopener noreferrer"
                    href={process.env.PUBLIC_URL}
                    id="slide-414-layer-18"
                    data-x="['left','left','left','left']"
                    data-hoffset="['240','190','190','170']"
                    data-y="['bottom','bottom','bottom','bottom']"
                    data-voffset="['100','100','50','30']"
                    data-width="60"
                    data-height="60"
                    data-whitespace="nowrap"
                    data-type="text"
                    data-actions=""
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":2000,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Power2.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(221, 75, 57, 1.00);bc:rgba(221, 75, 57, 1.00);"}]'
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: "18",
                      minWidth: "60px",
                      maxWidth: "60px",
                      whiteSpace: "nowrap",
                      fontSize: "20px",
                      lineHeight: "60px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1.00)",
                      fontFamily: "'Montserrat', sans-serif",
                      borderColor: "rgba(255, 255, 255, 1.00)",
                      borderStyle: "solid",
                      borderWidth: "2px 2px 2px 2px",
                      borderRadius: "50% 50% 50% 50%",
                      cursor: "pointer",
                    }}
                  >
                    <Icofont icon="google-plus" />
                  </a>
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
    </div>
  );
};

export default ComingSoonPage;
