import React from "react";
// DATA Files
import {dataNavbar, dataPricings} from "data/index";
// Images
import imgTitle from "../../assets/images/title-bg/title-bg-4.jpg";
// Components
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import PricingsRowOne from "../../components/Pricings/PricingsRowOne";
import FooterTwo from "../../components/Footer/FooterTwo";

const PricingsPage = () => (
  <>
    <HeaderOne data={dataNavbar} />
    <PageTitleTwo title="Pricing" image={imgTitle} />
    <PricingsRowOne data={dataPricings} />
    <FooterTwo />
  </>
);

export default PricingsPage;
