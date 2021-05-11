import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/minimal-agency-navbar-data.json";
import dataSlider from "../../data/Slider/minimal-agency-slider.json";
import dataServices from "../../data/Services/services-minimal-data.json";
import dataCounters from "../../data/Counters/counters-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-data.json";
import dataPortfolio from "../../data/Portfolio/main-portfolio-data.json";
import dataProcess from "../../data/Process/process-data.json";
import dataPricings from "../../data/Pricings/pricings-data.json";
import dataTeam from "../../data/Team/team-data.json";
import dataClients from "../../data/Clients/clients-data.json";
// Images
import imgOffer from "../../assets/images/mockup-2.png";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";
import imgWhatWeDo from "../../assets/images/bg-right-img.jpg";
// Components
import HeroMinimalAgency from "../../components/HeroSlider/HeroMinimalAgency";
import HeaderOne from "../../components/Header/HeaderOne";
import WhatWeOfferFour from "../../components/WhatWeOffer/WhatWeOfferFour";
import CountersOne from "../../components/Counters/CountersOne";
import TestimonialsFour from "../../components/Testimonials/TestimonialsFour";
import ParallaxOne from "../../components/ParallaxSection/ParallaxOne";
import PortfolioOne from "../../components/Portfolio/PortfolioOne";
import ProcessTwo from "../../components/Process/ProcessTwo";
import WhatWeDoOne from "../../components/WhatWeDo/WhatWeDoOne";
import PricingsOne from "../../components/Pricings/PricingsOne";
import TeamOne from "../../components/Team/TeamOne";
import ContactOne from "../../components/Contact/ContactOne";
import ClientsCarousel from "../../components/Carousel/ClientsCarousel";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const HomeMinimalAgency = () => (
  <Loader>
    <HeaderOne data={dataNavbar} />
    <HeroMinimalAgency data={dataSlider} />
    <WhatWeOfferFour
      tagline="Our Core Services"
      title="We Craft Digital <br /> Experience"
      image={imgOffer}
      data={dataServices}
    />
    <CountersOne type="dark" data={dataCounters} />
    <TestimonialsFour
      tagline="What Client Says"
      title="Our Happy Customers"
      data={dataTestimonials}
    />
    <ParallaxOne image={imgParallax}>
      Where something special happens every day
    </ParallaxOne>
    <PortfolioOne
      tagline="Show Your Works"
      title="Our Portfolio"
      backfont="Works"
      classes="no-bottom-line"
      data={dataPortfolio}
      filter={true}
      categories={[
        "Branding",
        "Creative Design",
        "Web Design",
        "Stationery",
        "Photography",
      ]}
    />
    <ProcessTwo
      tagline="Our Steps"
      title="Work Together <br />For Success"
      data={dataProcess}
    />
    <WhatWeDoOne
      tagline="What We Do"
      title="Digital Services"
      image={imgWhatWeDo}
    >
      The term Digital Services refers to the electronic delivery of information
      including data and content across multiple platforms and devices like web
      or mobile. Information is presented in a way that is easy to use and
      understand and typically involves transactional services such as
      submitting forms for processing and receiving benefits.
    </WhatWeDoOne>
    <PricingsOne
      tagline="Select Your Plan"
      title="Our Pricing"
      data={dataPricings}
      classes="no-bottom-line"
    />
    <TeamOne
      bg="white-bg"
      tagline="Meet Creatives"
      title="Our Team"
      data={dataTeam}
    />
    <ContactOne
      tagline="Contact Us"
      title="Request a Quote Now"
      classes="no-bottom-line"
    />
    <ClientsCarousel type="wide" data={dataClients} classes="white-bg" />
    <FooterTwo />
  </Loader>
);

export default HomeMinimalAgency;
