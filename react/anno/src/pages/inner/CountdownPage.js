import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/home-business-navbar.json";
// Images
import imgTitle from "../../assets/images/title-bg/title-bg-3.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleOne from "../../components/PageTitle/PageTitleOne";
import CountdownOne from "../../components/Countdown/CountdownOne";
import CountdownTwo from "../../components/Countdown/CountdownTwo";
import CountdownThree from "../../components/Countdown/CountdownThree";
import CountdownFour from "../../components/Countdown/CountdownFour";
import FooterTwo from "../../components/Footer/FooterTwo";

const CountdownPage = () => (
  <>
    <HeaderOne data={dataNavbar} />
    <PageTitleOne title="Countdown" image={imgTitle} />
    <CountdownOne
      title="We Craft Digital <br />Experience"
      tagline="Countdown Style One"
    />
    <CountdownTwo
      title="We Craft Digital <br />Experience"
      tagline="Countdown Style Two"
    />
    <CountdownThree
      title="We Craft Digital <br />Experience"
      tagline="Countdown Style Three"
    />
    <CountdownFour
      title="We Craft Digital <br />Experience"
      tagline="Countdown Style Four"
    />
    <FooterTwo />
  </>
);

export default CountdownPage;
